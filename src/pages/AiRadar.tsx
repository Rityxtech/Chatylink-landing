import React from 'react';

export default function AiRadar() {
    return (
        <div className="min-h-screen text-on-surface bg-[#1A0E2E] selection:bg-primary-container selection:text-white font-body-sm relative isolate">
            <style>{`
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 20;
            font-size: 14px;
        }
        .ai-radar-glass-panel {
            background: rgba(26, 14, 46, 0.7);
            backdrop-filter: blur(12px);
            border: 1px solid #3B2557;
        }
        .ai-radar-zebra-row:nth-child(even) {
            background-color: rgba(59, 37, 87, 0.2);
        }
      `}</style>

            {/* Filters Bar (High Density) */}
            <div className="sticky top-[56px] md:top-[80px] z-40 bg-[#1A0E2E]/95 backdrop-blur-md border-b border-[#3B2557] px-4 py-1.5 flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap items-center gap-3">
                    <h1 className="font-h1 text-[18px] text-white flex items-center gap-2 m-0 p-0 font-semibold tracking-tight">
                        AI Radar
                        <span className="bg-[#9d4edd]/30 text-[#e0b6ff] text-[10px] px-1.5 py-0.5 rounded-sm font-code border border-[#e0b6ff]/20">24</span>
                    </h1>
                    <div className="h-4 w-px bg-[#3B2557]/40 mx-2 hidden sm:block"></div>
                    <div className="flex flex-wrap gap-1">
                        <button className="bg-[#9d4edd] text-white font-label-caps text-[10px] px-2.5 py-0.5 rounded-sm uppercase tracking-wider font-bold border-none cursor-pointer">Today</button>
                        <button className="text-[#d0c2d5] font-label-caps text-[10px] px-2.5 py-0.5 rounded-sm hover:bg-white/5 uppercase tracking-wider font-bold bg-transparent border-none cursor-pointer transition-colors">Week</button>
                        <button className="text-[#d0c2d5] font-label-caps text-[10px] px-2.5 py-0.5 rounded-sm hover:bg-white/5 uppercase tracking-wider font-bold bg-transparent border-none cursor-pointer transition-colors">Month</button>
                    </div>
                </div>
                <div className="relative w-full sm:w-auto mt-2 sm:mt-0">
                    <span className="material-symbols-outlined absolute left-2 top-1/2 -translate-y-1/2 text-[#998d9e] text-[15px]">search</span>
                    <input className="bg-black/20 border border-[#3B2557] focus:ring-1 focus:ring-[#e0b6ff]/50 focus:border-[#e0b6ff] text-[10px] pl-7 pr-3 py-1 sm:py-0.5 w-full sm:w-48 rounded-sm placeholder:text-[#998d9e]/60 text-white outline-none transition-all" placeholder="Filter signals..." type="text" />
                </div>
            </div>

            {/* Dashboard Content */}
            <div className="max-w-[1600px] mx-auto p-4 grid grid-cols-12 gap-6">

                {/* MAIN FEED: Breaking Updates (2/3 Column) */}
                <section className="col-span-12 lg:col-span-8 flex flex-col gap-2">
                    <div className="flex items-center justify-between pb-1 border-b border-[#3B2557]">
                        <h2 className="font-h2 text-[11px] uppercase tracking-widest text-[#998d9e] font-bold m-0 p-0">Breaking Updates</h2>
                        <span className="font-code text-[10px] text-[#e0b6ff] flex items-center gap-1.5 uppercase font-semibold">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e0b6ff] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e0b6ff]"></span>
                            </span>
                            Live Stream
                        </span>
                    </div>

                    <div className="flex flex-col">
                        {/* Feed Item 1: OpenAI */}
                        <div className="ai-radar-glass-panel p-3 ai-radar-zebra-row border-t-0 hover:bg-white/[0.02] transition-colors group">
                            <div className="flex justify-between items-start mb-1">
                                <div className="flex items-center gap-2">
                                    <span className="font-label-caps text-[9px] text-[#e0b6ff] border border-[#e0b6ff]/30 px-1 rounded-sm uppercase tracking-tighter font-bold">OpenAI</span>
                                </div>
                                <span className="font-code text-[10px] text-[#998d9e]">14:02 UTC</span>
                            </div>
                            <h3 className="font-h2 text-[15px] font-bold text-white leading-tight mb-1 group-hover:text-[#e0b6ff] transition-colors m-0 p-0">GPT-5 training cluster confirmed in Iowa facility expansion.</h3>
                            <p className="text-[12px] text-[#d0c2d5]/80 line-clamp-2 sm:line-clamp-1 italic m-0 p-0">New regulatory filings suggest a massive 500MW power draw increase specifically allocated for next-gen reasoning models.</p>
                            <div className="mt-2 flex flex-wrap gap-1.5">
                                <span className="text-[8px] font-code bg-white/5 border border-white/10 px-1.5 py-0.5 text-[#998d9e] uppercase">#LLM</span>
                                <span className="text-[8px] font-code bg-white/5 border border-white/10 px-1.5 py-0.5 text-[#998d9e] uppercase">#INFRASTRUCTURE</span>
                            </div>
                        </div>

                        {/* Feed Item 2: Google */}
                        <div className="ai-radar-glass-panel p-3 ai-radar-zebra-row border-t-0 hover:bg-white/[0.02] transition-colors group">
                            <div className="flex justify-between items-start mb-1">
                                <div className="flex items-center gap-2">
                                    <span className="font-label-caps text-[9px] text-[#d4bcf3] border border-[#d4bcf3]/30 px-1 rounded-sm uppercase tracking-tighter font-bold">Google DeepMind</span>
                                </div>
                                <span className="font-code text-[10px] text-[#998d9e]">12:45 UTC</span>
                            </div>
                            <h3 className="font-h2 text-[15px] font-bold text-white leading-tight mb-1 group-hover:text-[#d4bcf3] transition-colors m-0 p-0">Gemini 1.5 Pro updates context window to 2.5M tokens for developers.</h3>
                            <p className="text-[12px] text-[#d0c2d5]/80 line-clamp-2 sm:line-clamp-1 italic m-0 p-0">Alpha testers report significant improvements in code retrieval across multi-million line repositories without RAG overhead.</p>
                            <div className="mt-2 flex flex-wrap gap-1.5">
                                <span className="text-[8px] font-code bg-white/5 border border-white/10 px-1.5 py-0.5 text-[#998d9e] uppercase">#GEMINI</span>
                                <span className="text-[8px] font-code bg-white/5 border border-white/10 px-1.5 py-0.5 text-[#998d9e] uppercase">#LONG_CONTEXT</span>
                            </div>
                        </div>

                        {/* Feed Item 3: Anthropic */}
                        <div className="ai-radar-glass-panel p-3 ai-radar-zebra-row border-t-0 hover:bg-white/[0.02] transition-colors group">
                            <div className="flex justify-between items-start mb-1">
                                <div className="flex items-center gap-2">
                                    <span className="font-label-caps text-[9px] text-[#998d9e] border border-[#998d9e]/30 px-1 rounded-sm uppercase tracking-tighter font-bold">Anthropic</span>
                                </div>
                                <span className="font-code text-[10px] text-[#998d9e]">09:12 UTC</span>
                            </div>
                            <h3 className="font-h2 text-[15px] font-bold text-white leading-tight mb-1 group-hover:text-[#e0b6ff] transition-colors m-0 p-0">Claude 3.5 Opus leaked benchmarks show 15% edge over current SOTA.</h3>
                            <p className="text-[12px] text-[#d0c2d5]/80 line-clamp-2 sm:line-clamp-1 italic m-0 p-0">Unverified internal test results circulating on X suggest breakthroughs in complex mathematical reasoning and formal logic.</p>
                            <div className="mt-2 flex flex-wrap gap-1.5">
                                <span className="text-[8px] font-code bg-white/5 border border-white/10 px-1.5 py-0.5 text-[#998d9e] uppercase">#CLAUDE</span>
                                <span className="text-[8px] font-code bg-white/5 border border-white/10 px-1.5 py-0.5 text-[#998d9e] uppercase">#BENCHMARKS</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SIDEBAR: Funding & Launches (1/3 Column) */}
                <aside className="col-span-12 lg:col-span-4 flex flex-col gap-6">

                    {/* Funding Rounds */}
                    <div className="flex flex-col gap-2">
                        <h2 className="font-h2 text-[11px] uppercase tracking-widest text-[#998d9e] font-bold pb-1 border-b border-[#3B2557] m-0 p-0">Funding Rounds</h2>
                        <div className="flex flex-col gap-1.5">
                            <div className="ai-radar-glass-panel p-2 flex items-center justify-between hover:border-[#e0b6ff]/50 transition-all cursor-pointer group">
                                <div className="flex flex-col">
                                    <span className="font-label-caps text-[10px] font-bold text-[#eadfec]">Cognition AI</span>
                                    <span className="text-[9px] text-[#998d9e] uppercase">Series B • $175M</span>
                                </div>
                                <div className="text-right">
                                    <span className="font-code text-[11px] text-[#e0b6ff] font-bold">+$2.1B Val</span>
                                    <span className="block text-[8px] text-[#998d9e]/60 truncate max-w-[120px]">Lachy Groom, Founders Fund</span>
                                </div>
                            </div>
                            <div className="ai-radar-glass-panel p-2 flex items-center justify-between hover:border-[#d4bcf3]/50 transition-all cursor-pointer group">
                                <div className="flex flex-col">
                                    <span className="font-label-caps text-[10px] font-bold text-[#eadfec]">Mistral</span>
                                    <span className="text-[9px] text-[#998d9e] uppercase">Strategic • Undisclosed</span>
                                </div>
                                <div className="text-right">
                                    <span className="font-code text-[11px] text-[#d4bcf3] font-bold">MS Partnership</span>
                                    <span className="block text-[8px] text-[#998d9e]/60 truncate max-w-[120px]">Azure Integration Focus</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Product Launches */}
                    <div className="flex flex-col gap-2">
                        <h2 className="font-h2 text-[11px] uppercase tracking-widest text-[#998d9e] font-bold pb-1 border-b border-[#3B2557] m-0 p-0">Product Launches</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
                            <div className="relative h-28 ai-radar-glass-panel overflow-hidden group">
                                <img alt="Figure Launch" className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8DczKj65C2YUJwumnLspJzrLFG07cPeTtLUQT9ccuXxmHPHeV_bhHPfkN81WxOcgO1sofYYLk4v4M9STTK-eOW1VkuGgX7rdFcRXdZDNi4v-lDjUewCunxVfLnPhQ7--HUeB3AwqMM0M7dJw2C3FbRwUt_vyOnuAyfR8gst0OQj9olSXaMIEoKmKFGSekGMEeoAFNIcmWShWrbWcVwg83qflB9najVkVUBZlWjbKsYp9WfvRB_b5MFnxTvJ4mbZHNJWTDJvHm8yqX" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0E2E] via-transparent to-transparent"></div>
                                <div className="absolute bottom-2 left-2 right-2">
                                    <span className="bg-[#9d4edd] text-white font-label-caps text-[8px] px-1.5 py-0.5 rounded-sm tracking-tighter font-bold">ALPHA ACCESS</span>
                                    <h4 className="font-h2 text-[12px] font-bold text-white mt-1 uppercase tracking-tight m-0 p-0">Figure-02 Robotics Suite</h4>
                                </div>
                            </div>
                            <div className="relative h-28 ai-radar-glass-panel overflow-hidden group">
                                <img alt="Llama 3 Optimizer" className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCM6ZtVT31lBAV2zZxtg-ztpE8C2S2ZQ28pWFq2ISlb1nIMRzIihqlIj8pafgiqryFjnlINB9rJKcd8gPlSvhln8Zkti4VdpH7D5aEiZovlSUG97bo5A_N2ie8OptbWt9Kuk9XdrNs3c3AOPLDK-fD8yO1R1iEdVSpWwKuJu2tmsffmnZ3ikVtf80fgoyVVe1WLv5PacJfT8SgJfq2VP_iV5ugRTLuUx3AYqI487rR1859-f9REUx_sJSEwWQj55K8ShzUpxC_FWihX" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0E2E] via-transparent to-transparent"></div>
                                <div className="absolute bottom-2 left-2 right-2">
                                    <span className="bg-[#53406e] text-white font-label-caps text-[8px] px-1.5 py-0.5 rounded-sm tracking-tighter font-bold">OPEN SOURCE</span>
                                    <h4 className="font-h2 text-[12px] font-bold text-white mt-1 uppercase tracking-tight m-0 p-0">Llama 3 Local Optimizer v2.4</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Ad/Promo Area */}
                    <div className="bg-[#9d4edd]/20 border border-[#9d4edd] p-3 rounded-sm flex flex-col gap-2 relative overflow-hidden group">
                        <div className="absolute -right-4 -top-4 w-16 h-16 bg-[#e0b6ff] opacity-10 blur-xl group-hover:opacity-20 transition-opacity"></div>
                        <span className="font-label-caps text-[9px] text-[#e0b6ff] uppercase font-bold tracking-widest">PRO INSIGHTS</span>
                        <h3 className="font-h1 text-[13px] font-bold text-white leading-tight m-0 p-0">2024 AI Hardware State of Play Report.</h3>
                        <button className="w-full py-1.5 mt-1 bg-[#e0b6ff] text-[#1A0E2E] font-label-caps text-[10px] font-black rounded-sm hover:bg-white transition-colors uppercase border-none cursor-pointer">Download PDF</button>
                    </div>
                </aside>
            </div>
        </div>
    );
}
