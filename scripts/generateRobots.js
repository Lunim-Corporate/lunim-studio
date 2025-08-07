require('dotenv').config();
const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, '..', process.env.BUILD_DIR);
const outputPath = path.join(buildDir, 'robots.txt');

const content = `# Allow all crawlers
User-agent: *
Allow: /

# Sitemap location
Sitemap: ${process.env.VITE_SITE_URL}/sitemap.xml

# Disallow admin area
Disallow: /admin/
Disallow: /wp-admin/
Disallow: /dashboard/
Disallow: /private/
`;

fs.writeFileSync(outputPath, content);
console.log('✅ robots.txt generated at:', outputPath);