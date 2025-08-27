import * as prismic from '@prismicio/client';

// The endpoint is read from the .env file
const endpoint = import.meta.env.VITE_PRISMIC_ENDPOINT;

export const client = prismic.createClient(endpoint);