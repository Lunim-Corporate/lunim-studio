// This file should be placed in your serverless functions directory,
// e.g., netlify/functions/subscribe-newsletter.js or api/subscribe-newsletter.js

// IMPORTANT: For local development, you might need to install 'node-fetch'
// if your Node.js version doesn't support 'fetch' natively (Node.js < 18).
// npm install node-fetch
// const fetch = require('node-fetch'); // Uncomment this line if you installed node-fetch

exports.handler = async (event, context) => {
  // 1. Ensure it's a POST request
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  try {
    // 2. Get the email from the request body
    const { email } = JSON.parse(event.body);

    if (!email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Email address is required.' }),
      };
    }

    // 3. --- CONFIGURE YOUR MAILCHIMP DETAILS HERE ---
    // For production, use environment variables for security!
    // Example: process.env.MAILCHIMP_API_KEY
    const MAILCHIMP_API_KEY = "63aecac548d9cefdfd7b3587d4e9af64"; // Your actual API Key (without the data center part)
    const MAILCHIMP_AUDIENCE_ID = "YOUR_AUDIENCE_ID"; // IMPORTANT: REPLACE WITH YOUR ACTUAL AUDIENCE ID
    const MAILCHIMP_DC = "us5"; // Extracted from your API key

    // Basic check to remind you to replace placeholders
    if (MAILCHIMP_AUDIENCE_ID === "YOUR_AUDIENCE_ID") {
      console.warn("Mailchimp Audience ID not configured. Please update the serverless function.");
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Mailchimp integration not fully configured. Please check serverless function code.' }),
      };
    }

    // 4. Construct the Mailchimp API URL
    const mailchimpApiUrl = `https://${MAILCHIMP_DC}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`;

    // 5. Send the request to Mailchimp
    const response = await fetch(mailchimpApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Authorization header uses Basic Auth: "Basic <base64_encoded_string>"
        // The string is "anystring:YOUR_MAILCHIMP_API_KEY"
        'Authorization': `Basic ${Buffer.from(`anystring:${MAILCHIMP_API_KEY}`).toString('base64')}`,
      },
      body: JSON.stringify({
        email_address: email,
        status: 'subscribed', // 'subscribed' for immediate subscription, 'pending' for double opt-in
      }),
    });

    // 6. Parse Mailchimp's response
    const data = await response.json();

    // 7. Check if Mailchimp request was successful
    if (!response.ok) {
      console.error('Mailchimp API Error:', data);
      // Return Mailchimp's error message to the frontend for better debugging
      return {
        statusCode: response.status,
        body: JSON.stringify({
          message: data.detail || 'Failed to subscribe to newsletter via Mailchimp.',
          mailchimpError: data, // Include Mailchimp's full error for debugging
        }),
      };
    }

    console.log(`Successfully subscribed ${email} to Mailchimp:`, data);

    // 8. Send success response back to your website
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Subscription successful! Welcome to our newsletter.' }),
    };
  } catch (error) {
    console.error('Serverless function error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Server Error', error: error.message }),
    };
  }
};
