const fs = require('fs');

let code = fs.readFileSync('src/pages/Home.tsx', 'utf8');

// 1. Main Container
code = code.replace(
    /<main className="overflow-x-hidden w-full relative z-10 pt-\[80px\] md:pt-\[120px\]">/,
    '<main className="overflow-x-hidden w-full relative z-10 pt-[60px] md:pt-[120px] flex flex-col space-y-[10px] md:space-y-0">'
);

// 2. Sections paddings
code = code.replace(/py-5"/g, 'py-1 md:py-5"');
code = code.replace(/py-8 /g, 'py-1 md:py-8 ');
code = code.replace(/py-16 /g, 'py-1 md:py-16 ');
code = code.replace(/py-20 /g, 'py-1 md:py-20 ');

// 3. Typography & Spacing Minimization
code = code.replace(/text-3xl md:text-5xl/g, 'text-[22px] md:text-5xl');
code = code.replace(/text-4xl md:text-5xl/g, 'text-[22px] md:text-5xl');
code = code.replace(/text-2xl md:text-3xl/g, 'text-lg md:text-3xl');
code = code.replace(/text-2xl /g, 'text-base md:text-2xl ');
code = code.replace(/text-xl /g, 'text-sm md:text-xl ');

code = code.replace(/p-12 /g, 'p-4 md:p-12 ');
code = code.replace(/p-8 /g, 'p-3 md:p-8 ');
code = code.replace(/p-6 /g, 'p-3 md:p-6 ');
code = code.replace(/p-4 /g, 'p-2 md:p-4 ');

code = code.replace(/mb-16/g, 'mb-4 md:mb-16');
code = code.replace(/mb-12/g, 'mb-4 md:mb-12');
code = code.replace(/mb-10/g, 'mb-3 md:mb-10');
code = code.replace(/mb-8/g, 'mb-3 md:mb-8');
code = code.replace(/mb-6/g, 'mb-2 md:mb-6');
code = code.replace(/mb-5/g, 'mb-2 md:mb-5');
code = code.replace(/mb-4/g, 'mb-2 md:mb-4');

code = code.replace(/mt-16/g, 'mt-4 md:mt-16');
code = code.replace(/mt-12/g, 'mt-3 md:mt-12');
code = code.replace(/mt-6/g, 'mt-2 md:mt-6');

code = code.replace(/gap-16/g, 'gap-4 md:gap-16');
code = code.replace(/gap-8/g, 'gap-3 md:gap-8');
code = code.replace(/gap-6/g, 'gap-3 md:gap-6');
code = code.replace(/gap-4/g, 'gap-2 md:gap-4');
code = code.replace(/gap-3/g, 'gap-1.5 md:gap-3');
code = code.replace(/gap-2/g, 'gap-1 md:gap-2');

// Text sizing specifics
code = code.replace(/text-sm /g, 'text-[10px] md:text-sm ');
code = code.replace(/text-xs /g, 'text-[9px] md:text-xs ');
code = code.replace(/text-\[11px\]/g, 'text-[9px] md:text-[11px]');
code = code.replace(/text-\[10px\]/g, 'text-[8px] md:text-[10px]');
code = code.replace(/text-\[9px\]/g, 'text-[8px] md:text-[9px]');

// Ensure we didn't break React syntax
code = code.replace(/className={`/g, 'className={`'); // no-op but safe target

// 4. Motion modifications

// TrustedBySection
code = code.replace(
    /<div className="max-w-7xl mx-auto flex flex-col items-center">/g,
    '<motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="max-w-7xl mx-auto flex flex-col items-center">'
);
code = code.replace(
    /        <\/div>\n      <\/div>\n    <\/section>/,
    '        </div>\n      </motion.div>\n    </section>'
);

// SolutionSection head motion
code = code.replace(
    /<div className="text-center mb-\[2px\] md:mb-12">/,
    '<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center mb-[2px] md:mb-12">'
);
code = code.replace(
    /      <\/div>\n\n        <div className="flex flex-wrap/,
    '      </motion.div>\n\n        <div className="flex flex-wrap'
);

// ProblemSection cards
code = code.replace(
    /<div key=\{i\} className="glass-card shadow-lg/g,
    '<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }} className="glass-card shadow-lg'
);
// Replace end of map for ProblemSection
code = code.replace(
    /                <\/div>\n              <\/div>\n            <\/div>\n          \)\)\}/,
    '                </div>\n              </div>\n            </motion.div>\n          )}'
);

// MeetRankflowSection cards
code = code.replace(
    /<div key=\{i\} className="glass-card p-\[3px\] md:p-8/g,
    '<motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }} className="glass-card p-[3px] md:p-8'
);
code = code.replace(
    /              <\/p>\n            <\/div>\n          \)\)\}/,
    '              </p>\n            </motion.div>\n          )}'
);

// Pricing Section cards
code = code.replace(
    /<div key=\{i\} className=\{`glass-card/g,
    '<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }} className={`glass-card'
);
code = code.replace(
    /              <\/button>\n            <\/div>\n          \)\)\}/,
    '              </button>\n            </motion.div>\n          )}'
);

// Developer section blocks
code = code.replace(
    /<div className="flex-1 min-w-0">/,
    '<motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="flex-1 min-w-0">'
);
code = code.replace(
    /<div className="flex-1 w-full max-w-xl">/,
    '<motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="flex-1 w-full max-w-xl">'
);

// Close Developer section blocks
code = code.replace(
    /          <\/div>\n        <\/div>\n      <\/div>\n\n      <style>/,
    '          </div>\n        </motion.div>\n      </div>\n\n      <style>'
);
// We also need to close the left block of Developer section. But it's adjacent, let's look at the structure.
//   </div>
//   {/* Terminal Window */}
code = code.replace(
    /          <\/div>\n        <\/div>\n\n        \{\/\* Terminal Window \*\/\}/,
    '          </div>\n        </motion.div>\n\n        {/* Terminal Window */}'
);

fs.writeFileSync('src/pages/Home.tsx', code, 'utf8');
console.log('Mobile optimizations applied successfully!');
