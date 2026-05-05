const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'index.html');

let html = fs.readFileSync(file, 'utf8');

const correctHeadAndBackground = `<!DOCTYPE html>
<html class="light" lang="en">

<head>
  <meta charset="utf-8" />
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <title>RankFlow - Analyze &amp; Improve Your Website SEO in Seconds</title>
  <meta name="description"
    content="RankFlow helps developers and businesses optimize Next.js sites for performance, SEO, and visibility. Get instant, actionable insights in seconds." />
  <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
  <script id="tailwind-config">
    tailwind.config = {
      darkMode: "class",
      theme: {
        extend: {
          animation: {
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
            "on-primary-container": "#4C1D95",
          },
          borderRadius: {
            DEFAULT: "0.125rem",
            lg: "0.25rem",
            xl: "0.5rem",
            full: "0.75rem"
          },
          spacing: {
            sm: "8px",
            "container-max": "1280px",
            gutter: "24px",
            xl: "48px",
            lg: "24px",
            md: "16px",
            unit: "4px",
            xs: "4px"
          },
          fontFamily: {
            "body-md": ["Inter"],
            "display-lg": ["Inter"],
            "title-sm": ["Inter"],
            "headline-md": ["Inter"],
            "body-sm": ["Inter"],
            "code-label": ["Inter"]
          },
          fontSize: {
            "body-md": ["16px", { lineHeight: "1.6", letterSpacing: "0", fontWeight: "400" }],
            "display-lg": ["48px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
            "title-sm": ["20px", { lineHeight: "1.4", letterSpacing: "0", fontWeight: "600" }],
            "headline-md": ["30px", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "600" }],
            "body-sm": ["14px", { lineHeight: "1.5", letterSpacing: "0", fontWeight: "400" }],
            "code-label": ["12px", { lineHeight: "1", letterSpacing: "0.05em", fontWeight: "600" }]
          }
        }
      }
    }
  </script>
  <style>
    body {
      font-family: 'Inter', sans-serif;
    }

    .material-symbols-outlined {
      font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
    }

    .high-density-table tr:nth-child(even) {
      background-color: #f8fafc;
    }

    /* FAQ accordion animation */
    .faq-answer {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease, padding 0.3s ease;
    }

    .faq-answer.open {
      max-height: 300px;
    }

    .faq-icon {
      transition: transform 0.3s ease;
    }

    .faq-item.open .faq-icon {
      transform: rotate(180deg);
    }
  </style>
</head>

<body class="bg-background text-on-background antialiased overflow-x-hidden">

  <!-- Animated Vector Background -->
  <div class="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 bg-background pointer-events-none">
    <!-- Wavy Top -->
    <div class="absolute top-0 left-0 w-[200%] flex opacity-15 animate-wave">
      <svg viewBox="0 0 1440 320" class="w-[50%] h-auto fill-primary-light" xmlns="http://www.w3.org/2000/svg"><path d="M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,133.3C672,139,768,181,864,197.3C960,213,1056,203,1152,181.3C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      <svg viewBox="0 0 1440 320" class="w-[50%] h-auto fill-primary-light" xmlns="http://www.w3.org/2000/svg"><path d="M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,133.3C672,139,768,181,864,197.3C960,213,1056,203,1152,181.3C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
    </div>
    <!-- Wavy Top 2 (Slower, lighter) -->
    <div class="absolute top-0 left-0 w-[200%] flex opacity-5 animate-wave-slow">
      <svg viewBox="0 0 1440 320" class="w-[50%] h-auto fill-primary" xmlns="http://www.w3.org/2000/svg"><path d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      <svg viewBox="0 0 1440 320" class="w-[50%] h-auto fill-primary" xmlns="http://www.w3.org/2000/svg"><path d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
    </div>
    <!-- Floating Blobs inside the body -->
    <div class="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-primary-light/10 rounded-full mix-blend-multiply filter blur-[80px] animate-float"></div>
    <div class="absolute bottom-1/4 -left-20 w-[600px] h-[600px] bg-primary/10 rounded-full mix-blend-multiply filter blur-[100px] animate-float" style="animation-delay: -2s;"></div>
  </div>

  <!-- TopNavBar -->
  <header class="bg-white/90 backdrop-blur-xl border-b border-slate-200 top-0 sticky z-50 transition-colors">`;

// Find where <header starts and slice out the broken top half
let headerIndex = html.indexOf('<header class="bg-white/90 backdrop-blur-xl border-b border-slate-200 top-0 sticky z-50 transition-colors">');

if (headerIndex !== -1) {
    const bottomHalf = html.substring(headerIndex + '<header class="bg-white/90 backdrop-blur-xl border-b border-slate-200 top-0 sticky z-50 transition-colors">'.length);
    fs.writeFileSync(file, correctHeadAndBackground + bottomHalf, 'utf8');
} else {
    console.error("Could not find header. Doing fallback...");
}
