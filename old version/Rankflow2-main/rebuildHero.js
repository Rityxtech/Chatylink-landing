const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(filePath, 'utf8');

// The place where the DOM broke is right after the "Run Free Audit" button in the TopNavBar
// Let's find that button
const navBarEndMatch = html.indexOf('Free Audit</button>');
if (navBarEndMatch === -1) {
    console.log("Could not find the navigation button.");
    process.exit(1);
}

const navBarEndIdx = navBarEndMatch + 'Free Audit</button>'.length;

// Now find where the next intact section starts. The tool deleted down to the "Browser chrome" block.
// So let's find the start of the <div class="bg-white/85 backdrop-blur-2xl rounded-xl ..."> which wraps the browser chrome.
const dashMatch = html.indexOf('<div class="bg-white/85 backdrop-blur-2xl rounded-xl border border-white/80 shadow-lg overflow-hidden">', navBarEndIdx);

if (dashMatch === -1) {
    console.log("Could not find the dashboard container.");
    process.exit(1);
}

// We will replace everything between 'navBarEndIdx' and 'dashMatch' with the proper closing tags, the new Hero Section, and the Dashboard section wrapper.
const replacementDOM = `
      </div>
    </nav>
  </header>

  <main>

    <!-- Hero Section with Premium Quip-Style Layout -->
    <section class="relative pt-16 pb-20 px-6 bg-transparent overflow-visible">
      <div class="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        
        <!-- Center Text -->
        <div class="text-center w-full relative">
        
          <h1 class="font-display-lg text-display-lg text-on-surface mb-6 max-w-3xl mx-auto relative z-20 leading-tight">
            Elevate Your Rankings with RankFlow The Ultimate Best SEO Solution
          </h1>
          <p class="font-body-md text-body-md text-secondary mb-10 max-w-2xl mx-auto relative z-20">
            RankFlow combines cutting-edge technology with user-friendly features, making it the perfect companion for businesses & individuals looking to optimize Next.js sites.
          </p>
          
          <div class="max-w-xl mx-auto mb-16 relative z-20">
            <form class="flex flex-col sm:flex-row gap-2 p-1.5 bg-white/85 backdrop-blur-2xl border border-outline-variant shadow-lg rounded-lg" onsubmit="return false;">
              <input class="flex-1 bg-transparent border-none focus:ring-0 text-body-sm font-body-sm px-4 py-3 placeholder:text-slate-400 font-medium" placeholder="Enter Your Website Url" required type="url" />
              <button class="bg-gradient-to-r from-rose-400 to-rose-500 text-white px-8 py-3 rounded text-sm font-bold transition-all hover:brightness-110 flex justify-center items-center gap-2" type="submit">
                Boost My Rankings <span class="material-symbols-outlined text-[16px]">arrow_outward</span>
              </button>
            </form>
          </div>

          <!-- Floating Stats Card (Top Left) -->
          <div class="hidden lg:flex absolute top-12 -left-12 flex-col items-start p-5 bg-white/85 backdrop-blur-2xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-xl w-64 transform -rotate-2 hover:rotate-0 transition-transform cursor-pointer">
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

          <!-- Floating Stats Card (Top Right) -->
          <div class="hidden lg:flex absolute top-20 -right-12 flex-col items-start p-5 bg-white/85 backdrop-blur-2xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-xl w-64 transform rotate-2 hover:rotate-0 transition-transform cursor-pointer">
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

        <!-- Bottom Data Cards Row -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto z-20">
            
            <!-- Radial Charts Card -->
            <div class="bg-white/85 backdrop-blur-2xl border border-white/80 shadow-[0_12px_40px_rgb(0,0,0,0.08)] rounded-xl p-6 relative hover:-translate-y-1 transition-transform">
              <div class="flex justify-between items-center mb-6">
                <h3 class="font-bold text-sm text-on-surface">Core Web Vitals</h3>
                <div class="flex items-center gap-4 text-[10px] uppercase font-bold text-secondary">
                  <span class="flex items-center gap-1"><div class="w-2 h-2 bg-rose-400"></div> LCP</span>
                  <span class="flex items-center gap-1"><div class="w-2 h-2 bg-emerald-400"></div> FID</span>
                  <span class="material-symbols-outlined text-outline text-[16px] cursor-pointer hover:text-primary">more_vert</span>
                </div>
              </div>
              <div class="flex justify-around items-center pt-2">
                 <!-- Radial 1 -->
                 <div class="flex flex-col items-center gap-3">
                    <div class="relative w-16 h-16 rounded-full border-4 border-rose-400 flex items-center justify-center">
                       <span class="text-xs font-black">81%</span>
                       <div class="absolute top-0 right-0 w-4 h-4 bg-rose-100 rounded-full -mt-1 -mr-2 border-2 border-white"></div>
                    </div>
                    <span class="text-[10px] font-bold text-secondary text-center leading-tight">Total Order</span>
                 </div>
                 <!-- Radial 2 -->
                 <div class="flex flex-col items-center gap-3">
                    <div class="relative w-16 h-16 rounded-full border-4 border-emerald-400 flex items-center justify-center">
                       <span class="text-xs font-black">22%</span>
                    </div>
                    <span class="text-[10px] font-bold text-secondary text-center leading-tight">Customer Growth</span>
                 </div>
                 <!-- Radial 3 -->
                 <div class="flex flex-col items-center gap-3">
                    <div class="relative w-16 h-16 rounded-full border-4 border-primary flex items-center justify-center">
                       <span class="text-xs font-black">62%</span>
                    </div>
                    <span class="text-[10px] font-bold text-secondary text-center leading-tight">Total Revenue</span>
                 </div>
              </div>
            </div>

            <!-- Wave Chart Card -->
            <div class="bg-white/85 backdrop-blur-2xl border border-white/80 shadow-[0_12px_40px_rgb(0,0,0,0.08)] rounded-xl p-6 relative flex flex-col justify-between hover:-translate-y-1 transition-transform">
               <div class="flex justify-between items-start mb-4">
                  <div>
                    <h3 class="font-bold text-sm text-on-surface">Chart Order</h3>
                    <p class="text-[10px] text-secondary mt-1">Lorem ipsum dolor sit amet</p>
                  </div>
                  <button class="flex items-center gap-2 border border-primary/20 text-primary px-3 py-1.5 rounded-full text-xs font-bold hover:bg-primary/5 transition-colors">
                     <span class="material-symbols-outlined text-[14px]">download</span> Save Report
                  </button>
               </div>
               
               <!-- SVG Dummy Chart -->
               <div class="w-full h-24 relative mt-auto flex items-end">
                  <svg viewBox="0 0 400 100" class="w-full h-full preserve-aspect-ratio-none">
                     <defs>
                       <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                         <stop offset="0%" stop-color="#00E1D9" stop-opacity="0.3"/>
                         <stop offset="100%" stop-color="#00E1D9" stop-opacity="0.0"/>
                       </linearGradient>
                     </defs>
                     <path d="M0,80 C40,50 60,90 100,50 C140,10 180,60 220,40 C260,20 300,70 340,30 C380,-10 400,40 400,40 L400,100 L0,100 Z" fill="url(#chartGradient)"></path>
                     <path d="M0,80 C40,50 60,90 100,50 C140,10 180,60 220,40 C260,20 300,70 340,30 C380,-10 400,40 400,40" fill="none" stroke="#00E1D9" stroke-width="3"></path>
                     <circle cx="100" cy="50" r="4" fill="#ffffff" stroke="#00E1D9" stroke-width="2"></circle>
                     <circle cx="220" cy="40" r="4" fill="#ffffff" stroke="#00E1D9" stroke-width="2"></circle>
                     <circle cx="340" cy="30" r="4" fill="#ffffff" stroke="#00E1D9" stroke-width="2"></circle>
                  </svg>
                  
                  <!-- Tooltip -->
                  <div class="absolute top-2 left-1/2 -ml-16 bg-white border border-outline-variant shadow px-3 py-1.5 flex flex-col items-center rounded-lg">
                    <span class="text-[10px] font-black text-on-surface">456 Order</span>
                    <span class="text-[8px] text-secondary font-bold">Oct 18th, 2026</span>
                  </div>
               </div>
               
               <!-- X Axis labels -->
               <div class="flex justify-between w-full text-[8px] font-black text-secondary mt-3 px-1">
                 <span>Sunday</span><span>Monday</span><span>Tuesday</span><span>Wednesday</span><span>Thursday</span><span>Friday</span><span>Saturday</span>
               </div>
            </div>
            
        </div>
      </div>
    </section>

    <!-- Trusted By Logos -->
    <section class="py-8 px-6 bg-transparent mt-8">
        <div class="max-w-7xl mx-auto">
          <p class="text-[10px] font-code-label text-center text-outline uppercase tracking-widest mb-6">Trusted by modern developers building fast web apps</p>
          <div class="flex flex-wrap justify-center items-center gap-6 md:gap-12 opacity-50 grayscale">
            <span class="font-black text-xl italic">NEXT.JS</span>
            <span class="font-black text-xl italic">VERCEL</span>
            <span class="font-black text-xl italic">STRIPE</span>
            <span class="font-black text-xl italic">SUPABASE</span>
          </div>
        </div>
    </section>

    <!-- Live Demo Preview (Dashboard) Continuation -->
    <section class="bg-transparent py-8 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="bg-white/85 backdrop-blur-2xl rounded-xl border border-white/80 shadow-lg overflow-hidden">
`;

html = html.substring(0, navBarEndIdx) + replacementDOM + html.substring(dashMatch + '<div class="bg-white/85 backdrop-blur-2xl rounded-xl border border-white/80 shadow-lg overflow-hidden">'.length);

fs.writeFileSync(filePath, html, 'utf8');
console.log('DOM Repair and Hero Section update complete.');
