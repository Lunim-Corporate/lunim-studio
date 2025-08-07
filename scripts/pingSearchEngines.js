require('dotenv').config();
const fs = require('fs');
const https = require('https');
const { promisify } = require('util');

const sleep = promisify(setTimeout);
const siteUrl = process.env.VITE_SITE_URL;
const sitemapUrl = `${siteUrl}/sitemap.xml`;
const logFile = 'ping-errors.log';

const ENGINES = {
  Google: `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`,
  Bing: `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`,
  Yandex: `https://webmaster.yandex.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`
};

async function pingEngine(name, url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      console.log(`📬 ${name} ping response: ${res.statusCode}`);
      resolve({ success: true, status: res.statusCode });
    }).on('error', (err) => {
      const errorMsg = `❌ ${name} ping failed: ${err.message}`;
      console.error(errorMsg);
      
      // Log error with timestamp
      const timestamp = new Date().toISOString();
      fs.appendFileSync(logFile, `${timestamp} - ${errorMsg}\n`);
      
      resolve({ success: false, error: err.message });
    });
  });
}

async function pingAll() {
  console.log('🚀 Pinging search engines...');
  
  for (const [name, url] of Object.entries(ENGINES)) {
    await pingEngine(name, url);
    await sleep(1000); // Space out requests
  }
  
  console.log('✅ Ping process completed');
}

pingAll();