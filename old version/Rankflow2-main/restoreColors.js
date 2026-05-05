const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(filePath, 'utf8');

const originalConfig = `          colors: {
            "on-tertiary": "#ffffff",
            "outline-variant": "#c1c6d7",
            "on-primary-fixed": "#001a41",
            "primary-fixed-dim": "#adc6ff",
            "on-secondary": "#ffffff",
            "on-error-container": "#93000a",
            "error-container": "#ffdad6",
            "inverse-on-surface": "#eef0fc",
            "outline": "#717786",
            "on-secondary-container": "#54647a",
            "on-surface": "#181c23",
            "inverse-primary": "#adc6ff",
            "tertiary-container": "#c64f00",
            "on-primary-container": "#fefcff",
            "secondary-container": "#d0e1fb",
            "error": "#ba1a1a",
            "primary": "#0058bc",
            "tertiary-fixed": "#ffdbcc",
            "on-background": "#181c23",
            "surface-container-lowest": "#ffffff",
            "surface": "#f9f9ff",
            "secondary-fixed-dim": "#b7c8e1",
            "background": "#f9f9ff",
            "surface-container": "#ecedf9",
            "surface-bright": "#f9f9ff",
            "primary-container": "#0070eb",
            "on-surface-variant": "#414755",
            "on-tertiary-container": "#fffbff",
            "on-primary": "#ffffff",
            "surface-container-high": "#e6e8f3",
            "on-primary-fixed-variant": "#004493",
            "on-secondary-fixed-variant": "#38485d",
            "surface-container-highest": "#e0e2ed",
            "on-tertiary-fixed": "#351000",
            "on-tertiary-fixed-variant": "#7c2e00",
            "surface-container-low": "#f1f3fe",
            "tertiary-fixed-dim": "#ffb595",
            "primary-fixed": "#d8e2ff",
            "secondary-fixed": "#d3e4fe",
            "surface-dim": "#d8d9e5",
            "surface-variant": "#e0e2ed",
            "surface-tint": "#005bc1",
            "secondary": "#505f76",
            "tertiary": "#9e3d00",
            "on-error": "#ffffff",
            "on-secondary-fixed": "#0b1c30",
            "inverse-surface": "#2d3039",
            "accent": "#0058bc" // adding accent so any custom buttons don't break
          },`;

html = html.replace(/colors:\s*\{[\s\S]*?(?=\},\s*borderRadius:)/, originalConfig);

// Fix the SVG background classes to use native MD3 tokens from the user's config
html = html.replace(/fill-primary-light/g, 'fill-primary-fixed-dim text-primary-fixed-dim');
html = html.replace(/bg-primary-light/g, 'bg-primary-fixed-dim');

fs.writeFileSync(filePath, html, 'utf8');
