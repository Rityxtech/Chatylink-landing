const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'index.html');
let html = fs.readFileSync(file, 'utf8');

const heroStart = html.indexOf('<!-- Hero Section with Premium Quip-Style Layout -->');
const heroEnd = html.indexOf('<!-- Bottom Data Cards Row -->');

if (heroStart === -1 || heroEnd === -1) {
    console.error('Could not find hero markers');
    process.exit(1);
}

const cleanHero = `<!-- Hero Section with Premium Quip-Style Layout -->
    <section class="relative pt-16 pb-20 px-6 bg-transparent overflow-visible">
      <div class="max-w-7xl mx-auto relative z-10 flex flex-col items-center">

        <!-- Center Text Block -->
        <div class="text-center w-full relative">

          <h1 class="font-display-lg text-display-lg text-on-surface mb-6 max-w-3xl mx-auto relative z-20 leading-tight">
            Elevate Your Rankings with RankFlow The Ultimate Best SEO Solution
          </h1>
          <p class="font-body-md text-body-md text-secondary mb-10 max-w-2xl mx-auto relative z-20">
            RankFlow combines cutting-edge technology with user-friendly features, making it the perfect companion for businesses &amp; individuals looking to optimize Next.js sites.
          </p>

          <div class="max-w-xl mx-auto mb-16 relative z-20">
            <form class="flex flex-col sm:flex-row gap-2 p-1.5 bg-white/85 backdrop-blur-2xl border border-outline-variant shadow-lg rounded-lg" onsubmit="return false;">
              <input class="flex-1 bg-transparent border-none focus:ring-0 text-body-sm font-body-sm px-4 py-3 placeholder:text-slate-400 font-medium" placeholder="Enter Your Website Url" required type="url" />
              <button class="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-8 py-3 rounded text-sm font-bold transition-all hover:brightness-110 flex justify-center items-center gap-2" type="submit">
                Boost My Rankings <span class="material-symbols-outlined text-[16px]">arrow_outward</span>
              </button>
            </form>
          </div>

          <!-- Floating Stats Card (Top Left) — pulled in with left-4 so it's fully visible -->
          <div class="hidden lg:flex absolute top-10 left-4 flex-col items-start p-5 bg-white/85 backdrop-blur-2xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-xl w-56 transform -rotate-2 hover:rotate-0 transition-transform cursor-pointer z-30">
            <div class="flex items-center gap-3 mb-2">
              <div class="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-primary">
                <span class="material-symbols-outlined">dataset</span>
              </div>
              <div class="text-left">
                <p class="font-black text-2xl text-on-surface">300+</p>
                <p class="text-[10px] uppercase tracking-wider font-bold text-primary">Pages Crawled</p>
              </div>
            </div>
            <div class="flex items-center justify-between w-full mt-2">
              <span class="text-xs text-secondary bg-surface-container-low px-2 py-1 rounded shadow-sm flex items-center gap-1">May 2026 <span class="material-symbols-outlined text-[10px]">expand_more</span></span>
            </div>
          </div>

          <!-- Floating Stats Card (Top Right) — pulled in with right-4 so it's fully visible -->
          <div class="hidden lg:flex absolute top-20 right-4 flex-col items-start p-5 bg-white/85 backdrop-blur-2xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-xl w-56 transform rotate-2 hover:rotate-0 transition-transform cursor-pointer z-30">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-full bg-emerald-400/20 flex items-center justify-center text-emerald-500">
                <span class="material-symbols-outlined font-black">euro_symbol</span>
              </div>
              <div class="text-left">
                <p class="font-black text-2xl text-on-surface">60K+</p>
                <p class="text-[10px] uppercase tracking-wider font-bold text-primary">Profits Earned</p>
                <span class="text-[10px] text-secondary mt-1 flex items-center gap-1 bg-surface-container-low px-2 py-1 rounded w-max shadow-sm">May 2026 <span class="material-symbols-outlined text-[10px]">expand_more</span></span>
              </div>
            </div>
          </div>

        </div>

        `;

html = html.substring(0, heroStart) + cleanHero + html.substring(heroEnd);

fs.writeFileSync(file, html, 'utf8');
console.log('Hero section rebuilt successfully.');
