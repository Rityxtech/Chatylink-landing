const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(filePath, 'utf8');

// Find the cyan blob and remove it completely using regex
// Matches the div containing 'bg-accent/5' and 'rounded-full'
html = html.replace(/<div class="absolute[^>]*bg-accent[^>]*><\/div>/gi, '');

fs.writeFileSync(filePath, html, 'utf8');
