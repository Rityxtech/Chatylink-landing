const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(filePath, 'utf8');

const newConfig = `          colors: {
            "primary": "#7C3AED", /* Vibrant Violet/Purple */
            "primary-light": "#A78BFA", /* Soft Purple */
            "accent": "#00E1D9", /* Bright Cyan for highlight/contrast */
            "on-primary": "#ffffff",
            "background": "#ffffff", /* White */
            "on-background": "#0F172A", /* Slate 900 */
            "surface": "#ffffff",
            "on-surface": "#0F172A",
            "surface-bright": "#ffffff",
            "surface-container-low": "rgba(255, 255, 255, 0.6)",
            "surface-container": "rgba(255, 255, 255, 0.7)",
            "surface-container-high": "rgba(255, 255, 255, 0.8)",
            "surface-container-highest": "rgba(255, 255, 255, 0.9)",
            "outline": "#E2E8F0",
            "outline-variant": "rgba(124, 58, 237, 0.15)", /* Soft purple tint */
            "secondary": "#475569",  /* Slate 600 */
            "on-secondary": "#ffffff",
            "error": "#EF4444",
            "on-error": "#ffffff",
            "error-container": "#FEE2E2",
            "on-error-container": "#991B1B",
            "tertiary-container": "#F3E8FF",
            "on-tertiary-container": "#6B21A8",
            "primary-fixed-dim": "#8B5CF6",
            "primary-container": "#F5F3FF",
            "on-primary-container": "#4C1D95",`;

html = html.replace(/colors:\s*\{[\s\S]*?(?=\},\s*borderRadius:)/, newConfig);

// Rewrite the file
fs.writeFileSync(filePath, html, 'utf8');
