
$file = "c:\Web Projects\Undeployed\RankFlow Landing Page\index.html"
$content = Get-Content $file -Raw -Encoding UTF8

# The broken area: lines 1911-1913 are orphaned closing divs that belong to
# the inner hero/problem section before the developer section.
# We need to:
#   1. Fix the orphaned closing divs at the Developer Focus boundary
#   2. Insert the new Meet RankFlow section between the problem section and developer focus

# The text right before the orphaned devfocus content (unique marker)
$marker = '            </div>' + "`r`n" + '           </div>' + "`r`n"

# Actually let's use a unique string around the boundary
# Line 1913 contains: "          </div>"  (6-space indent closing div)
# Line 1914 contains: "          <div class=""flex-1"">"
# This is uniquely inside the broken section context after "</div>.....</div></div>"

# Strategy: find "Engineering Teams" span which is uniquely part of Dev Focus
# and insert our section break + new content right before the outer flex div

$devFocusMarker = '<span class="text-xs font-code-label text-primary-fixed-dim uppercase tracking-[0.2em] mb-4 block">Built for'

$newMeetSection = @'

        </div>
      </div>
    </section>

    <!-- Meet RankFlow - SEO Intelligence Engine -->
    <section id="features" class="py-20 px-6 bg-transparent rf-meet-section">

      <style>
        @keyframes rfFadeUp { from { opacity:0; transform:translateY(32px); } to { opacity:1; transform:translateY(0); } }
        @keyframes rfSlideLeft { from { opacity:0; transform:translateX(28px); } to { opacity:1; transform:translateX(0); } }
        @keyframes rfSlideRight { from { opacity:0; transform:translateX(-28px); } to { opacity:1; transform:translateX(0); } }
        @keyframes rfShimmer2 { 0% { background-position:-200% center; } 100% { background-position:200% center; } }
        .rf-reveal { opacity:0; }
        .rf-reveal.visible { animation: rfFadeUp 0.65s cubic-bezier(0.22,1,0.36,1) forwards; }
        .rf-reveal-l { opacity:0; }
        .rf-reveal-l.visible { animation: rfSlideLeft 0.65s cubic-bezier(0.22,1,0.36,1) forwards; }
        .rf-reveal-r { opacity:0; }
        .rf-reveal-r.visible { animation: rfSlideRight 0.65s cubic-bezier(0.22,1,0.36,1) forwards; }
        .rf-sol-tab-btn { padding:8px 20px; border-radius:999px; font-size:13px; font-weight:700; color:#64748b; background:transparent; border:1.5px solid transparent; cursor:pointer; transition:all 0.25s; white-space:nowrap; }
        .rf-sol-tab-btn:hover { color:#7C3AED; border-color:rgba(124,58,237,0.25); }
        .rf-sol-tab-btn.active { color:#7C3AED; background:rgba(124,58,237,0.08); border-color:rgba(124,58,237,0.3); }
        .rf-sol-panel { display:none; }
        .rf-sol-panel.active { display:block; }
        .rf-screen-frame { background:rgba(255,255,255,0.9); backdrop-filter:blur(20px); border:1px solid rgba(255,255,255,0.85); border-radius:20px; box-shadow:0 32px 80px rgba(124,58,237,0.16),0 8px 20px rgba(0,0,0,0.06); overflow:hidden; transition:transform 0.4s cubic-bezier(0.22,1,0.36,1),box-shadow 0.4s; }
        .rf-screen-frame:hover { transform:translateY(-6px) scale(1.01); box-shadow:0 48px 100px rgba(124,58,237,0.22),0 12px 28px rgba(0,0,0,0.08); }
        .rf-screen-bar { background:#f1f5f9; border-bottom:1px solid #e2e8f0; padding:10px 14px; display:flex; align-items:center; gap:6px; }
        .rf-wdot { width:10px; height:10px; border-radius:50%; }
        .rf-feat-card { background:rgba(255,255,255,0.85); backdrop-filter:blur(20px); border:1px solid rgba(255,255,255,0.8); border-radius:18px; padding:28px; box-shadow:0 8px 32px rgba(0,0,0,0.05); transition:transform 0.3s cubic-bezier(0.22,1,0.36,1),box-shadow 0.3s,border-color 0.3s; position:relative; overflow:hidden; }
        .rf-feat-card::before { content:''; position:absolute; inset:0; background:linear-gradient(135deg,rgba(124,58,237,0.05),transparent 60%); opacity:0; transition:opacity 0.3s; }
        .rf-feat-card:hover { transform:translateY(-4px); box-shadow:0 20px 48px rgba(124,58,237,0.13); border-color:rgba(124,58,237,0.2); }
        .rf-feat-card:hover::before { opacity:1; }
        .rf-feat-icon { width:48px; height:48px; border-radius:14px; background:linear-gradient(135deg,rgba(124,58,237,0.12),rgba(124,58,237,0.06)); display:flex; align-items:center; justify-content:center; margin-bottom:18px; }
        .rf-stat-pill { background:rgba(255,255,255,0.92); backdrop-filter:blur(16px); border:1px solid rgba(255,255,255,0.9); border-radius:14px; padding:14px 10px; box-shadow:0 8px 28px rgba(124,58,237,0.1); text-align:center; }
        .rf-prog-bar2 { height:6px; border-radius:9999px; width:0; transition:width 1.3s cubic-bezier(0.22,1,0.36,1); }
        .rf-shimmer-hdl2 { background:linear-gradient(90deg,#7C3AED 0%,#00E1D9 50%,#7C3AED 100%); background-size:200% auto; -webkit-background-clip:text; -webkit-text-fill-color:transparent; animation:rfShimmer2 3s linear infinite; font-weight:800; }
      </style>

      <div class="max-w-7xl mx-auto">

        <div class="text-center mb-14 rf-reveal">
          <span class="text-xs font-code-label text-primary uppercase tracking-[0.2em] mb-3 block">The Solution</span>
          <h2 class="font-headline-md text-headline-md text-on-surface mb-4">
            Meet RankFlow &mdash; Your<br>
            <span class="rf-shimmer-hdl2">SEO Intelligence Engine</span>
          </h2>
          <p class="text-secondary font-body-md max-w-xl mx-auto">One platform to crawl, diagnose, and dominate. Built for Next.js teams who treat SEO as an engineering discipline.</p>
        </div>

        <div class="flex justify-center mb-10 rf-reveal" style="animation-delay:0.08s">
          <div class="inline-flex gap-1 bg-white/70 backdrop-blur-xl border border-white/80 rounded-full p-1 shadow-md">
            <button class="rf-sol-tab-btn active" onclick="rfSolTab('dashboard',this)"><span class="material-symbols-outlined align-middle text-[15px] mr-1">dashboard</span>Analytics Dashboard</button>
            <button class="rf-sol-tab-btn" onclick="rfSolTab('audit',this)"><span class="material-symbols-outlined align-middle text-[15px] mr-1">bug_report</span>Issue Auditor</button>
          </div>
        </div>

        <div id="rf-sol-dashboard" class="rf-sol-panel active">
          <div class="flex flex-col lg:flex-row items-center gap-10">
            <div class="flex-1 w-full rf-reveal-r" style="animation-delay:0.12s">
              <div class="rf-screen-frame">
                <div class="rf-screen-bar">
                  <div class="rf-wdot" style="background:#ef4444"></div><div class="rf-wdot" style="background:#f59e0b"></div><div class="rf-wdot" style="background:#22c55e"></div>
                  <div class="flex-1 mx-3 bg-white rounded px-3 py-1 text-[10px] text-slate-400 font-mono">app.rankflow.io/dashboard</div>
                </div>
                <img src="assets/rankflow_dashboard.png" alt="RankFlow Analytics Dashboard showing keyword rankings and Core Web Vitals" class="w-full object-cover" style="max-height:420px;object-position:top;" />
              </div>
            </div>
            <div class="flex-1 max-w-md rf-reveal-l" style="animation-delay:0.2s">
              <span class="text-xs font-code-label text-primary uppercase tracking-[0.2em] mb-3 block">Real-time Intelligence</span>
              <h3 class="text-2xl font-black text-on-surface mb-3 leading-snug">Your entire SEO operation in one live dashboard</h3>
              <p class="text-secondary text-sm mb-6 leading-relaxed">Track keyword rankings, monitor Core Web Vitals, and watch organic traffic trends update in real time without waiting for weekly reports.</p>
              <div class="grid grid-cols-3 gap-3 mb-6">
                <div class="rf-stat-pill"><p class="text-2xl font-black text-primary" data-count="32" data-suffix="%">0%</p><p class="text-[10px] text-secondary font-medium mt-0.5">Traffic Lift</p></div>
                <div class="rf-stat-pill"><p class="text-2xl font-black text-primary" data-count="94" data-suffix="">0</p><p class="text-[10px] text-secondary font-medium mt-0.5">Avg. Score</p></div>
                <div class="rf-stat-pill"><p class="text-2xl font-black text-primary" data-count="2.4" data-suffix="s" data-float="true">0s</p><p class="text-[10px] text-secondary font-medium mt-0.5">Faster LCP</p></div>
              </div>
              <ul class="space-y-3">
                <li class="flex items-start gap-3"><span class="material-symbols-outlined text-primary text-[18px] mt-0.5">check_circle</span><span class="text-sm text-on-surface"><strong>Live keyword position tracking</strong> updated every 24 hours</span></li>
                <li class="flex items-start gap-3"><span class="material-symbols-outlined text-primary text-[18px] mt-0.5">check_circle</span><span class="text-sm text-on-surface"><strong>Core Web Vitals timeline</strong> LCP, CLS &amp; INP in one view</span></li>
                <li class="flex items-start gap-3"><span class="material-symbols-outlined text-primary text-[18px] mt-0.5">check_circle</span><span class="text-sm text-on-surface"><strong>Competitor benchmarking</strong> see exactly where rivals outrank you</span></li>
              </ul>
            </div>
          </div>
        </div>

        <div id="rf-sol-audit" class="rf-sol-panel">
          <div class="flex flex-col lg:flex-row items-center gap-10">
            <div class="flex-1 w-full">
              <div class="rf-screen-frame">
                <div class="rf-screen-bar">
                  <div class="rf-wdot" style="background:#ef4444"></div><div class="rf-wdot" style="background:#f59e0b"></div><div class="rf-wdot" style="background:#22c55e"></div>
                  <div class="flex-1 mx-3 bg-white rounded px-3 py-1 text-[10px] text-slate-400 font-mono">app.rankflow.io/audit</div>
                </div>
                <img src="assets/rankflow_audit.png" alt="RankFlow SEO Audit panel with critical issues and fix suggestions" class="w-full object-cover" style="max-height:420px;object-position:top;" />
              </div>
            </div>
            <div class="flex-1 max-w-md">
              <span class="text-xs font-code-label text-primary uppercase tracking-[0.2em] mb-3 block">Issue Detector</span>
              <h3 class="text-2xl font-black text-on-surface mb-3 leading-snug">Every SEO issue, ranked by revenue impact</h3>
              <p class="text-secondary text-sm mb-6 leading-relaxed">No vague advice. RankFlow surfaces broken links, missing tags, slow assets and schema errors with one-click code fixes tailored for your stack.</p>
              <div class="space-y-3 mb-6">
                <div><div class="flex justify-between text-xs font-bold mb-1"><span class="text-red-500">Critical Issues</span><span class="text-slate-500" id="rfs-crit-lbl">0 / 3</span></div><div class="bg-slate-100 rounded-full h-2"><div class="rf-prog-bar2 bg-red-500" id="rfs-crit"></div></div></div>
                <div><div class="flex justify-between text-xs font-bold mb-1"><span class="text-amber-500">Warnings</span><span class="text-slate-500" id="rfs-warn-lbl">0 / 7</span></div><div class="bg-slate-100 rounded-full h-2"><div class="rf-prog-bar2 bg-amber-400" id="rfs-warn"></div></div></div>
                <div><div class="flex justify-between text-xs font-bold mb-1"><span class="text-emerald-500">Opportunities</span><span class="text-slate-500" id="rfs-opp-lbl">0 / 12</span></div><div class="bg-slate-100 rounded-full h-2"><div class="rf-prog-bar2 bg-emerald-400" id="rfs-opp"></div></div></div>
              </div>
              <ul class="space-y-3">
                <li class="flex items-start gap-3"><span class="material-symbols-outlined text-primary text-[18px] mt-0.5">check_circle</span><span class="text-sm text-on-surface"><strong>404 &amp; redirect chain detection</strong> with direct URL mapping</span></li>
                <li class="flex items-start gap-3"><span class="material-symbols-outlined text-primary text-[18px] mt-0.5">check_circle</span><span class="text-sm text-on-surface"><strong>Schema &amp; Open Graph validation</strong> preview how Google sees you</span></li>
                <li class="flex items-start gap-3"><span class="material-symbols-outlined text-primary text-[18px] mt-0.5">check_circle</span><span class="text-sm text-on-surface"><strong>Next.js-specific fixes</strong> direct code snippets not generic advice</span></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
          <div class="rf-feat-card rf-reveal" style="animation-delay:0.10s"><div class="rf-feat-icon"><span class="material-symbols-outlined text-primary" style="font-size:22px">timer</span></div><h4 class="font-bold text-on-surface text-base mb-2">Real-time Audit</h4><p class="text-secondary text-sm leading-relaxed">Continuous scanning for SEO regressions as you push code, catching issues before Google does.</p></div>
          <div class="rf-feat-card rf-reveal" style="animation-delay:0.17s"><div class="rf-feat-icon"><span class="material-symbols-outlined text-primary" style="font-size:22px">speed</span></div><h4 class="font-bold text-on-surface text-base mb-2">Performance Scoring</h4><p class="text-secondary text-sm leading-relaxed">Proprietary Core Web Vitals engine correlated within &plusmn;3pts of real CrUX field data.</p></div>
          <div class="rf-feat-card rf-reveal" style="animation-delay:0.24s"><div class="rf-feat-icon"><span class="material-symbols-outlined text-primary" style="font-size:22px">trending_up</span></div><h4 class="font-bold text-on-surface text-base mb-2">Keyword Tracking</h4><p class="text-secondary text-sm leading-relaxed">Historical rank storage to visualise how each optimisation shifts your SERP positions over time.</p></div>
          <div class="rf-feat-card rf-reveal" style="animation-delay:0.31s"><div class="rf-feat-icon"><span class="material-symbols-outlined text-primary" style="font-size:22px">psychology</span></div><h4 class="font-bold text-on-surface text-base mb-2">AI Optimisation</h4><p class="text-secondary text-sm leading-relaxed">LLM-powered rewrites of title tags and meta descriptions to maximise click-through rate automatically.</p></div>
          <div class="rf-feat-card rf-reveal" style="animation-delay:0.38s"><div class="rf-feat-icon"><span class="material-symbols-outlined text-primary" style="font-size:22px">dataset</span></div><h4 class="font-bold text-on-surface text-base mb-2">Next.js Reports</h4><p class="text-secondary text-sm leading-relaxed">Deep-dives into Next.js Image optimisation, Metadata API, App Router and generateSitemaps.</p></div>
          <div class="rf-feat-card rf-reveal" style="animation-delay:0.45s"><div class="rf-feat-icon"><span class="material-symbols-outlined text-primary" style="font-size:22px">smartphone</span></div><h4 class="font-bold text-on-surface text-base mb-2">Mobile-first Insights</h4><p class="text-secondary text-sm leading-relaxed">Simulated mobile Chromium audits so your site performs flawlessly on every screen size.</p></div>
        </div>

      </div>

      <script>
        function rfSolTab(name, btn) {
          document.querySelectorAll('.rf-sol-panel').forEach(p => p.classList.remove('active'));
          document.querySelectorAll('.rf-sol-tab-btn').forEach(b => b.classList.remove('active'));
          document.getElementById('rf-sol-' + name).classList.add('active');
          btn.classList.add('active');
          if (name === 'audit') {
            setTimeout(() => {
              document.getElementById('rfs-crit').style.width = '30%'; document.getElementById('rfs-crit-lbl').textContent = '3 / 3';
              document.getElementById('rfs-warn').style.width = '70%'; document.getElementById('rfs-warn-lbl').textContent = '7 / 7';
              document.getElementById('rfs-opp').style.width = '100%'; document.getElementById('rfs-opp-lbl').textContent = '12 / 12';
            }, 120);
          }
        }
        function rfRunCounters() {
          document.querySelectorAll('[data-count]').forEach(el => {
            const target = parseFloat(el.dataset.count), suffix = el.dataset.suffix || '', isFloat = el.dataset.float === 'true';
            const dur = 1400, t0 = performance.now();
            (function tick(now) {
              const p = Math.min((now - t0) / dur, 1), e = 1 - Math.pow(1 - p, 3);
              el.textContent = (isFloat ? (target * e).toFixed(1) : Math.round(target * e)) + suffix;
              if (p < 1) requestAnimationFrame(tick);
            })(t0);
          });
        }
        (function() {
          const io = new IntersectionObserver(entries => {
            entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
          }, { threshold: 0.12 });
          document.querySelectorAll('.rf-reveal,.rf-reveal-l,.rf-reveal-r').forEach(el => io.observe(el));
          const cio = new IntersectionObserver(entries => { if (entries[0].isIntersecting) { rfRunCounters(); cio.disconnect(); } }, { threshold: 0.25 });
          const ms = document.querySelector('.rf-meet-section');
          if (ms) cio.observe(ms);
        })();
      </script>
    </section>

    <!-- Developer Focus -->
    <section class="py-10 px-6 bg-slate-900 text-white overflow-hidden relative">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-5 relative z-10">

'@

# Find where the dev focus content starts (the "Built for Engineering Teams" span)
# and insert before the parent <div class="flex-1"> that wraps it
# We look for the unique preceding context:
# The orphaned content starts with: `          <div class="flex-1">` followed by the span

$oldDevFocusStart = '          <div class="flex-1">' + "`r`n" + '            <span class="text-xs font-code-label text-primary-fixed-dim uppercase tracking-[0.2em] mb-4 block">Built for'

# We need to also include the broken closing divs before it:
# Lines 1911-1913:
#               </div>
#             </div>
#           </div>
# Then line 1914: <div class="flex-1">

$brokenClosing = '              </div>' + "`r`n" + '            </div>' + "`r`n" + '          </div>' + "`r`n" + '          <div class="flex-1">' + "`r`n" + '            <span class="text-xs font-code-label text-primary-fixed-dim uppercase tracking-[0.2em] mb-4 block">Built for'

if ($content.Contains($brokenClosing)) {
    $replacement = $newMeetSection + '            <span class="text-xs font-code-label text-primary-fixed-dim uppercase tracking-[0.2em] mb-4 block">Built for'
    $content = $content.Replace($brokenClosing, $replacement)
    [System.IO.File]::WriteAllText($file, $content, [System.Text.Encoding]::UTF8)
    Write-Host "SUCCESS: Meet RankFlow section inserted and Developer Focus restored."
} else {
    Write-Host "MARKER NOT FOUND. Trying alternative..."
    # Show surrounding chars for debugging
    $idx = $content.IndexOf('Built for')
    Write-Host "Found 'Built for' at index: $idx"
    Write-Host "Context around it:"
    Write-Host $content.Substring([Math]::Max(0,$idx-200), 300)
}
