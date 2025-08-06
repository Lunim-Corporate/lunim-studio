const fs = require('fs');
const https = require('https');
const sitemapUrl = 'https://studio.lunim.io/sitemap.xml';

// Define which search engines are critical
// const criticalEngines = ['Google', 'Bing'];

function pingSearchEngine(name, url) {
  https.get(url, (res) => {
    console.log(`📬 ${name} ping response: ${res.statusCode}`);
  }).on('error', (err) => {
    const errorMessage = `❌ ${name} ping failed: ${err.message}`;
    console.error(errorMessage);
    fs.appendFileSync('ping-errors.log', `${new Date().toISOString()} - ${errorMessage}\n`);  // save any failed pings to ping-errors.log with a timestamp
    console.log('🚨 Error logged to ping-errors.log');
    

   // Exit only if engine is marked critical
    // if (criticalEngines.includes(name)) {
    //   console.log(`💥 Critical failure: stopping build due to ${name}`);
    //   process.exit(1);
    // } else {
    //   console.log(`⚠️ Non-critical failure: ${name}`);
    // }

  });
}

console.log('🚀 Pinging search engines with updated sitemap...');
pingSearchEngine('Google', `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`);
pingSearchEngine('Bing', `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`);