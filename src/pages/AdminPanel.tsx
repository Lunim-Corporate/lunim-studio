import React, { useState, useEffect, useCallback } from 'react';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';
import { Loader2, Image as ImageIcon } from 'lucide-react'; // ImageIcon re-added

// Define the type for your hero section content
interface HeroContent {
  id: number;
  hero_title_part1: string;
  hero_title_part2: string;
  hero_description: string;
  background_image_url: string | null; // Keep this in the interface to match DB schema
}

const AdminPanel: React.FC = () => {
  const navigate = useNavigate();
  const [session, setSession] = useState<any>(undefined);
  const [heroContent, setHeroContent] = useState<HeroContent | null>(null);
  const [loadingHero, setLoadingHero] = useState(true);
  const [savingHero, setSavingHero] = useState(false);

  // --- RE-ADDED IMAGE-RELATED STATES ---
  const [heroImageFile, setHeroImageFile] = useState<File | null>(null);
  const [heroImagePreview, setHeroImagePreview] = useState<string | null>(null);
  // --- END RE-ADDED ---

  const [heroFormMessage, setHeroFormMessage] = useState<string | null>(null);
  const [heroFormError, setHeroFormError] = useState<string | null>(null);

  // --- Session Management ---
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (session === null) {
      console.log('No session, redirecting to login.');
      navigate('/admin/login');
    }
  }, [session, navigate]);

  // --- Hero Section Data Management ---

  const fetchHeroContent = useCallback(async () => {
    setLoadingHero(true);
    setHeroFormError(null);
    try {
      const { data, error } = await supabase
        .from('hero_section_content')
        .select('*')
        .order('created_at', { ascending: false }) // Get the latest entry
        .limit(1)
        .single(); // Expect only one row for hero content

      if (error && error.code !== 'PGRST116') { // PGRST116 means no rows found (which is fine for first time)
        throw error;
      }

      if (data) {
        setHeroContent(data);
        // --- IMAGE PREVIEW STATE UPDATE RE-ADDED ---
        setHeroImagePreview(data.background_image_url);
      } else {
        // Initialize with empty strings if no content exists
        setHeroContent({
          id: 0, // Temp ID, will be assigned by DB on insert
          hero_title_part1: '',
          hero_title_part2: '',
          hero_description: '',
          background_image_url: null, // Explicitly set to null when no content exists
        });
        // --- IMAGE PREVIEW STATE UPDATE RE-ADDED ---
        setHeroImagePreview(null);
      }
    } catch (error: any) {
      console.error('Error fetching hero content:', error);
      setHeroFormError(`Error loading hero content: ${error.message}`);
    } finally {
      setLoadingHero(false);
    }
  }, []);

  useEffect(() => {
    if (session) { // Only fetch if session is available
      fetchHeroContent();
    }
  }, [session, fetchHeroContent]);

  const handleHeroInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setHeroContent((prev) => (prev ? { ...prev, [name]: value } : null));
  };

  // --- RE-ADDED IMAGE-RELATED FUNCTIONS ---
  const handleHeroImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setHeroImageFile(file); // Store the actual file

      // Create a URL for local preview
      const previewUrl = URL.createObjectURL(file);
      setHeroImagePreview(previewUrl);
      setHeroFormMessage(null); // Clear any previous messages
      setHeroFormError(null); // Clear any previous errors
    }
  };

  const uploadHeroImage = async (): Promise<string | null> => {
    if (!heroImageFile || !session) {
      return null; // No file to upload or no session
    }

    const fileExt = heroImageFile.name.split('.').pop();
    const fileName = `${Date.now()}.${Math.random().toString(36).substring(2, 10)}.${fileExt}`; // More unique filename
    const filePath = `hero_backgrounds/${fileName}`; // Path inside your storage bucket

    try {
      const { data, error } = await supabase.storage
        .from('lunim-studio-assets') // <-- YOUR BUCKET NAME HERE
        .upload(filePath, heroImageFile, {
          cacheControl: '3600',
          upsert: false, // Set to true if you want to overwrite existing files with the same name
        });

      if (error) {
        throw error;
      }

      // Get the public URL of the uploaded image
      const { data: publicUrlData } = supabase.storage
        .from('lunim-studio-assets') // <-- YOUR BUCKET NAME HERE
        .getPublicUrl(filePath);

      if (publicUrlData) {
        return publicUrlData.publicUrl;
      }
      return null;
    } catch (error: any) {
      console.error('Error uploading image:', error);
      setHeroFormError(`Error uploading image: ${error.message}`);
      return null;
    }
  };
  // --- END RE-ADDED IMAGE-RELATED FUNCTIONS ---

  const handleSaveHeroContent = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!heroContent || !session) {
      setHeroFormError('Session not found or hero content is empty.');
      return;
    }

    setSavingHero(true);
    setHeroFormMessage(null);
    setHeroFormError(null);

    try {
      let imageUrl = heroContent.background_image_url; // Start with the existing URL

      // --- ADDED IMAGE UPLOAD LOGIC ---
      if (heroImageFile) {
        const uploadedUrl = await uploadHeroImage();
        if (uploadedUrl) {
          imageUrl = uploadedUrl; // Use the newly uploaded URL
        } else {
          // If upload failed, stop the save process and show error
          setSavingHero(false);
          return;
        }
      }
      // --- END ADDED IMAGE UPLOAD LOGIC ---

      // Prepare the object for upsert
      const contentToSave = {
        hero_title_part1: heroContent.hero_title_part1,
        hero_title_part2: heroContent.hero_title_part2,
        hero_description: heroContent.hero_description,
        background_image_url: imageUrl, // Pass the existing URL or new uploaded URL
      };

      // Add ID only if it's an update
      if (heroContent.id > 0) {
        Object.assign(contentToSave, { id: heroContent.id });
      }

      console.log('Attempting to upsert hero content:', contentToSave); // Log data being sent

      const { data: upsertedData, error } = await supabase
        .from('hero_section_content')
        .upsert(contentToSave, { onConflict: 'id' })
        .select(); // Select the data after upsert for debugging and ID update

      if (error) throw error;

      console.log('Hero section content upserted successfully:', upsertedData);
      setHeroFormMessage('Hero section content saved successfully!');
      // --- IMAGE FILE STATE RESET RE-ADDED ---
      setHeroImageFile(null); // Clear the selected file after successful upload/save
      fetchHeroContent(); // Re-fetch to ensure the ID is updated for subsequent edits if it was a new insert

    } catch (error: any) {
      console.error('Error saving hero content:', error);
      setHeroFormError(`Error saving hero content: ${error.message}`);
    } finally {
      setSavingHero(false);
    }
  };

  if (session === undefined) {
    return (
      <div className="min-h-screen bg-[#0f172a] text-white flex items-center justify-center">
        <p>Loading session...</p>
      </div>
    );
  }

  return (
    <div className="pt-24 md:pt-16 bg-[#0f172a] text-white min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Admin Panel</h1>
        <p className="text-center text-xl mb-8">Welcome, {session.user?.email}!</p>

        {/* Hero Section Management */}
        <section className="bg-[#1a202c] p-8 rounded-lg shadow-xl border border-white mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Hero Section Content</h2>
          {loadingHero ? (
            <p className="text-center text-gray-400">Loading hero content...</p>
          ) : heroContent ? (
            <form onSubmit={handleSaveHeroContent} className="space-y-6">
              {heroFormMessage && <p className="text-green-500 text-center mb-4">{heroFormMessage}</p>}
              {heroFormError && <p className="text-red-500 text-center mb-4">{heroFormError}</p>}

              <div>
                <label htmlFor="hero_title_part1" className="block text-gray-300 text-sm font-semibold mb-2">
                  Hero Title (Part 1)
                </label>
                <input
                  type="text"
                  id="hero_title_part1"
                  name="hero_title_part1"
                  value={heroContent.hero_title_part1}
                  onChange={handleHeroInputChange}
                  className="w-full p-3 rounded-lg bg-[#1f2937] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                  placeholder="e.g., Innovative AI Solutions"
                  required
                />
              </div>

              <div>
                <label htmlFor="hero_title_part2" className="block text-gray-300 text-sm font-semibold mb-2">
                  Hero Title (Part 2)
                </label>
                <input
                  type="text"
                  id="hero_title_part2"
                  name="hero_title_part2"
                  value={heroContent.hero_title_part2}
                  onChange={handleHeroInputChange}
                  className="w-full p-3 rounded-lg bg-[#1f2937] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                  placeholder="e.g., for Your Business"
                  required
                />
              </div>

              <div>
                <label htmlFor="hero_description" className="block text-gray-300 text-sm font-semibold mb-2">
                  Hero Description
                </label>
                <textarea
                  id="hero_description"
                  name="hero_description"
                  value={heroContent.hero_description}
                  onChange={handleHeroInputChange}
                  rows={4}
                  className="w-full p-3 rounded-lg bg-[#1f2937] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                  placeholder="A concise description of your services."
                  required
                ></textarea>
              </div>

              {/* --- RE-ADDED IMAGE UPLOAD SECTION --- */}
              <div>
                <label htmlFor="hero_image" className="block text-gray-300 text-sm font-semibold mb-2">
                  Background Image
                </label>
                <input
                  type="file"
                  id="hero_image"
                  name="hero_image"
                  accept="image/*" // Only accept image files
                  onChange={handleHeroImageChange}
                  className="w-full text-white text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 mb-4"
                />

                {heroImagePreview && (
                  <div className="mt-4">
                    <p className="block text-gray-300 text-sm font-semibold mb-2">Current/New Image Preview:</p>
                    <img
                      src={heroImagePreview}
                      alt="Hero Background Preview"
                      className="w-full h-48 object-cover rounded-lg border border-gray-700"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        // Clear the selected file and preview if user decides not to upload it
                        setHeroImageFile(null);
                        setHeroImagePreview(heroContent?.background_image_url || null); // Revert to stored URL or null
                      }}
                      className="mt-2 text-red-400 hover:text-red-600 text-sm"
                    >
                      Clear selected image
                    </button>
                  </div>
                )}

                {!heroImagePreview && (
                  <div className="mt-4 text-center text-gray-500">
                    <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
                    <p className="mt-2">No background image selected.</p>
                  </div>
                )}
              </div>
              {/* --- END RE-ADDED IMAGE UPLOAD SECTION --- */}

              <button
                type="submit"
                disabled={savingHero}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-colors disabled:opacity-50 flex items-center justify-center"
              >
                {savingHero ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Saving...
                  </>
                ) : (
                  'Save Hero Content'
                )}
              </button>
            </form>
          ) : (
            <p className="text-center text-red-500">Error: Hero content data is not initialized.</p>
          )}
        </section>

        <div className="text-center mt-12">
          <button
            onClick={async () => {
              await supabase.auth.signOut();
              navigate('/admin/login');
            }}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;