const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(filePath, 'utf8');

// 1. Soften the moving SVG waves
html = html.replace(/opacity-60 animate-wave/g, 'opacity-15 animate-wave');
html = html.replace(/opacity-30 animate-wave-slow/g, 'opacity-5 animate-wave-slow');

// 2. Soften the aurora blobs
html = html.replace(/bg-primary-light\/30/g, 'bg-primary-light/10');
html = html.replace(/bg-primary\/20/g, 'bg-primary/10');
html = html.replace(/bg-accent\/15/g, 'bg-accent/5');

// 3. Make the foreground cards more opaque to increase reading contrast
html = html.replace(/bg-white\/60 backdrop-blur-xl/g, 'bg-white/85 backdrop-blur-2xl');
html = html.replace(/bg-white\/60 backdrop-blur-md/g, 'bg-white/90 backdrop-blur-xl'); // Header

// 4. Also increase the white border slightly for better definition
html = html.replace(/border-white\/60/g, 'border-white/80');

fs.writeFileSync(filePath, html, 'utf8');
