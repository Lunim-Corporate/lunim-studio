import React, { useState, useEffect } from 'react';
import { SliceZone } from '@prismicio/react';
import { Content } from '@prismicio/client';
import { client } from '../prismic';

// Section components that will act as slice renderers
import TeamHeroSection from '../components/sections/TeamHeroSection';
import TeamMembersSection from '../components/sections/TeamMembersSection';

// Map Slice API IDs from Prismic to React components
const components = {
  team_hero: TeamHeroSection,
  team_members: TeamMembersSection,
};

const OurTeam: React.FC = () => {
  const [teamPage, setTeamPage] = useState<Content.TeamPageDocument | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeamPageData = async () => {
      try {
        console.log("FETCHING TEAM PAGE DATA...");
        const document = await client.getSingle('team_page');
        console.log("FETCH COMPLETE:", document);
        
        // Check for 'body' from Prismic
        if (document && document.data.body.length > 0) {
          console.log("SUCCESS: Team page document has", document.data.body.length, "slices.");
        } else {
          console.warn("WARNING: Fetched team page document is null or has no slices in the 'body' field.");
        }
        setTeamPage(document);
      } catch (error) {
        console.error("FETCH ERROR:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTeamPageData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-2xl bg-gradient-to-br from-slate-900 to-slate-800">
        Loading team page...
      </div>
    );
  }

  // Check for 'body' from Prismic
  if (!teamPage || teamPage.data.body.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-yellow-400 text-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-center p-8">
        Team page content loaded, but no slices found.
        <br />
        Please check your Prismic repository and ensure the team_page document is published.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-slate-200">
      <div className="w-full max-w-6xl px-4 mx-auto py-16">
        <div className="mb-12 mt-12 text-center">
          {/* Pass teamPage.data.body to the SliceZone */}
          <SliceZone slices={teamPage.data.body} components={components} />
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
