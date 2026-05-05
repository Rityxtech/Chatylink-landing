const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'index.html');
let html = fs.readFileSync(file, 'utf8');

// Add the character CSS animation to the <style> block
const styleInsert = `
    /* Hero character float animation */
    @keyframes heroFloat {
      0%, 100% { transform: translateY(0px) rotate(-1deg); }
      50%       { transform: translateY(-18px) rotate(1deg); }
    }
    .hero-character {
      animation: heroFloat 5s ease-in-out infinite;
      filter: drop-shadow(0 30px 40px rgba(124, 58, 237, 0.18));
    }
`;

html = html.replace('</style>', styleInsert + '</style>');

// Inject the character image block right before "Bottom Data Cards Row" comment
const characterHTML = `
        <!-- Animated Hero Character -->
        <div class="relative flex justify-center items-end w-full mb-10 z-10">
          <img
            src="hero-character.png"
            alt="Professional SEO analyst reviewing rankings dashboard"
            class="hero-character w-64 sm:w-72 md:w-80 mx-auto select-none pointer-events-none"
          />
          <!-- Decorative glow under feet -->
          <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-6 bg-primary/20 rounded-full blur-xl"></div>
        </div>

        `;

html = html.replace('<!-- Bottom Data Cards Row -->', characterHTML + '<!-- Bottom Data Cards Row -->');

fs.writeFileSync(file, html, 'utf8');
console.log('Hero character injected successfully.');
