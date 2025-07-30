// src/components/LeadGenForm.tsx
import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient'; // Assuming you have supabaseClient.ts configured

interface LeadGenFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const LeadGenForm: React.FC<LeadGenFormProps> = ({ isOpen, onClose, onSuccess }) => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(''); // New state for phone number
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Reset form status, email, and phone number when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setEmail('');
      setPhoneNumber(''); // Reset phone number
      setFormStatus('idle');
      setErrorMessage('');
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setErrorMessage('');

    if (!email) {
      setErrorMessage('Please enter your email address.');
      setFormStatus('error');
      return;
    }

    // You can add validation for phone number here if it's required
    // For now, it's optional.
    // if (!phoneNumber) {
    //   setErrorMessage('Please enter your phone number.');
    //   setFormStatus('error');
    //   return;
    // }

    try {
      const { data, error } = await supabase
        .from('leads')
        .insert([
          {
            Email: email, // Matches Supabase column 'Email' (with capital E)
            PhoneNumber: phoneNumber, // New: Matches Supabase column 'PhoneNumber' (assuming capital P)
            created_at: new Date().toISOString()
          },
        ])
        .select();

      if (error) {
        throw error;
      }

      console.log('Lead submitted successfully:', data);
      setFormStatus('success');
      onSuccess(); // Call the success callback from the parent
      // Optionally, close the modal after a short delay for success message to be seen
      setTimeout(onClose, 2000);

    } catch (error: any) {
      console.error('Error submitting lead:', error);
      setErrorMessage(`Failed to subscribe: ${error.message || 'Unknown error.'}`);
      setFormStatus('error');
    }
  };

  if (!isOpen) {
    return null; // Don't render if not open
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-lg shadow-xl p-8 max-w-md w-full relative border border-gray-700">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-3xl font-bold text-white mb-4 text-center">Stay In Touch</h2>
        <p className="text-gray-300 text-center mb-6">
          We will Help you take your Project from Idea to completion in web3.io or anything software. We will send you something Nice for Free.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="leadEmail" className="sr-only">Email Address</label>
            <input
              type="email"
              id="leadEmail"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* New Phone Number Input Field */}
          <div>
            <label htmlFor="leadPhone" className="sr-only">Phone Number</label>
            <input
              type="tel" // Use type="tel" for phone numbers
              id="leadPhone"
              placeholder="Your phone number (optional)"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              // `required` attribute removed to make it optional, add if needed
            />
          </div>

          <button
            type="submit"
            disabled={formStatus === 'submitting'}
            className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-3 rounded-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {formStatus === 'submitting' ? 'Subscribing...' : 'Subscribe Now'}
          </button>

          {formStatus === 'success' && (
            <p className="text-green-400 text-center mt-2">Successfully subscribed!</p>
          )}
          {formStatus === 'error' && (
            <p className="text-red-400 text-center mt-2">{errorMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default LeadGenForm;
