const fs = require('fs');
const path = require('path');

const siteUrl = 'https://studio.lunim.io'; // website domain
const outputPath = path.join(__dirname, 'dist', 'sitemap.xml'); // save sitemap in dist automatically after build

const pages = [
  '/',
  '/about',
  '/contact',
  '/projects',
  '/services',
  '/blog',
  '/team',
  '/privacy-policy',
  '/terms-of-service',
  '/cookie-policy',
  '/legal-notice',
  '/imprint',
  '/faq'

];

function getLastModified(urlPath) {
  const fileName = urlPath === '/' ? 'index.html' : `${urlPath.slice(1)}.html`;
  const filePath = path.join(__dirname, 'dist', fileName);
  try {
    const stats = fs.statSync(filePath);
    return stats.mtime.toISOString().split('T')[0];
  } catch (error) {
    console.warn(`⚠️ Could not find ${fileName}, defaulting to today's date`);
    return new Date().toISOString().split('T')[0];
  }
}

function buildSitemap() {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  pages.forEach((page) => {
    const lastmod = getLastModified(page);
    const priority = page === '/' ? '1.0' : '0.8';
    xml += `  <url>\n`;
    xml += `    <loc>${siteUrl}${page}</loc>\n`;
    xml += `    <lastmod>${lastmod}</lastmod>\n`;
    xml += `    <priority>${priority}</priority>\n`;
    xml += `  </url>\n`;
  });

  xml += `</urlset>`;
  fs.writeFileSync(outputPath, xml, 'utf8');
  console.log('✅ Sitemap generated at:', outputPath);
}

buildSitemap();