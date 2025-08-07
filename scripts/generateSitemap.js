require('dotenv').config();
const fs = require('fs');
const path = require('path');

const siteUrl = process.env.VITE_SITE_URL;
const buildDir = path.join(__dirname, '..', process.env.BUILD_DIR);
const outputPath = path.join(buildDir, 'sitemap.xml');

// Dynamic page discovery
function discoverPages() {
  try {
    const files = fs.readdirSync(buildDir);
    return files
      .filter(file => file.endsWith('.html'))
      .map(file => file === 'index.html' ? '/' : `/${file.replace('.html', '')}`);
  } catch (error) {
    console.error('🚨 Error discovering pages:', error);
    return [
      '/', '/about', '/contact', '/projects', '/services', 
      '/blog', '/team', '/privacy-policy', '/terms-of-service',
      '/cookie-policy', '/legal-notice', '/imprint', '/faq'
    ];
  }
}

function getLastModified(urlPath) {
  const fileName = urlPath === '/' ? 'index.html' : `${urlPath.slice(1)}.html`;
  const filePath = path.join(buildDir, fileName);
  
  try {
    const stats = fs.statSync(filePath);
    return stats.mtime.toISOString().split('T')[0];
  } catch (error) {
    console.warn(`⚠️ Could not find ${fileName}, using current date`);
    return new Date().toISOString().split('T')[0];
  }
}

function buildSitemap() {
  const pages = discoverPages();
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  
  pages.forEach(page => {
    const lastmod = getLastModified(page);
    const priority = page === '/' ? '1.0' : '0.8';
    
    xml += `  <url>\n`;
    xml += `    <loc>${siteUrl}${page}</loc>\n`;
    xml += `    <lastmod>${lastmod}</lastmod>\n`;
    xml += `    <priority>${priority}</priority>\n`;
    xml += `  </url>\n`;
  });
  
  xml += `</urlset>`;
  
  // Ensure build directory exists
  if (!fs.existsSync(buildDir)) {
    fs.mkdirSync(buildDir, { recursive: true });
  }
  
  fs.writeFileSync(outputPath, xml, 'utf8');
  console.log('✅ Sitemap generated at:', outputPath);
}

buildSitemap();