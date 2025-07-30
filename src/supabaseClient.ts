import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase URL or Anon Key is missing from environment variables. Please check your .env file.');
  // --- ADD THIS LINE ---
  throw new Error('Supabase environment variables are not set. Application cannot initialize.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);