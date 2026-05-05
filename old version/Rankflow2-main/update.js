const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(filePath, 'utf8');

// 1. Update Colors + add Animations
const newConfig = `          animation: {
            'wave': 'wave 20s linear infinite',
            'wave-slow': 'wave 35s linear infinite reverse',
            'float': 'float 8s ease-in-out infinite',
          },
          keyframes: {
            wave: {
              '0%': { transform: 'translateX(0)' },
              '100%': { transform: 'translateX(-50%)' },
            },
            float: {
              '0%, 100%': { transform: 'translateY(0)' },
              '50%': { transform: 'translateY(-20px)' },
            }
          },
          colors: {
            "primary": "#0d9488",
            "primary-light": "#5eead4",
            "accent": "#f43f5e",
            "on-primary": "#ffffff",
            "background": "#f0fdfa",
            "on-background": "#0f172a",
            "surface": "#ffffff",
            "on-surface": "#0f172a",
            "surface-bright": "#ffffff",
            "surface-container-low": "rgba(255,255,255,0.6)",
            "surface-container": "rgba(255,255,255,0.7)",
            "surface-container-high": "rgba(255,255,255,0.8)",
            "surface-container-highest": "rgba(255,255,255,0.9)",
            "outline": "#94a3b8",
            "outline-variant": "rgba(13,148,136,0.15)",
            "secondary": "#475569",
            "on-secondary": "#ffffff",
            "error": "#f43f5e",
            "on-error": "#ffffff",
            "error-container": "#ffe4e6",
            "on-error-container": "#be123c",
            "tertiary-container": "#fef3c7",
            "on-tertiary-container": "#b45309",
            "primary-fixed-dim": "#2dd4bf",
            "primary-container": "#ccfbf1",
            "on-primary-container": "#115e59",`;

html = html.replace(/colors:\s*\{[\s\S]*?(?=\},\s*borderRadius:)/, newConfig);

// 2. Add Animated Background HTML inside <body>
const backgroundHtml = `
  <!-- Animated Vector Background -->
  <div class="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 bg-background pointer-events-none">
    <!-- Wavy Top -->
    <div class="absolute top-0 left-0 w-[200%] flex opacity-60 animate-wave">
      <svg viewBox="0 0 1440 320" class="w-[50%] h-auto fill-primary-light" xmlns="http://www.w3.org/2000/svg"><path d="M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,133.3C672,139,768,181,864,197.3C960,213,1056,203,1152,181.3C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      <svg viewBox="0 0 1440 320" class="w-[50%] h-auto fill-primary-light" xmlns="http://www.w3.org/2000/svg"><path d="M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,133.3C672,139,768,181,864,197.3C960,213,1056,203,1152,181.3C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
    </div>
    <!-- Wavy Top 2 (Slower, lighter) -->
    <div class="absolute top-0 left-0 w-[200%] flex opacity-30 animate-wave-slow">
      <svg viewBox="0 0 1440 320" class="w-[50%] h-auto fill-primary" xmlns="http://www.w3.org/2000/svg"><path d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      <svg viewBox="0 0 1440 320" class="w-[50%] h-auto fill-primary" xmlns="http://www.w3.org/2000/svg"><path d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
    </div>
    
    <!-- Floating Blobs inside the body -->
    <div class="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-primary-light/30 rounded-full mix-blend-multiply filter blur-[80px] animate-float"></div>
    <div class="absolute bottom-1/4 -left-20 w-[600px] h-[600px] bg-primary/20 rounded-full mix-blend-multiply filter blur-[100px] animate-float" style="animation-delay: -2s;"></div>
    <div class="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-accent/15 rounded-full mix-blend-multiply filter blur-[80px] animate-float" style="animation-delay: -4s;"></div>
  </div>
`;

// Insert after <body class="bg-background text-on-background antialiased">
html = html.replace(/(<body[^>]*>)/, '$1\n' + backgroundHtml);

// 3. Make sections transparent
html = html.replace(/<section([^>]*)bg-white([^>]*)>/g, '<section$1bg-transparent$2>');
html = html.replace(/<section([^>]*)bg-surface([^>]*)>/g, '<section$1bg-transparent$2>');

// 4. Glassmorphism for cards and header
html = html.replace(/bg-white\/90 backdrop-blur-sm/g, 'bg-white/60 backdrop-blur-md');
html = html.replace(/class="bg-white rounded-xl border border-outline-variant/g, 'class="bg-white/60 backdrop-blur-xl rounded-xl border border-white/60');
html = html.replace(/class="md:col-span-2 bg-white border border-outline-variant/g, 'class="md:col-span-2 bg-white/60 backdrop-blur-xl border border-white/60');
html = html.replace(/class="bg-white border border-outline-variant/g, 'class="bg-white/60 backdrop-blur-xl border border-white/60');
html = html.replace(/class="bg-white border-2 border-primary/g, 'class="bg-white/60 backdrop-blur-xl border-2 border-primary');

// Write out
fs.writeFileSync(filePath, html, 'utf8');
