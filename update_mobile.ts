import * as fs from 'fs';

let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

content = content.replace(/px-6 md:px-12/g, 'px-2.5 md:px-12');
content = content.replace(/py-\[12\.5px\]/g, 'py-2.5 md:py-[12.5px]');
content = content.replace(/gap-12/g, 'gap-6 md:gap-12');
content = content.replace(/gap-8/g, 'gap-4 md:gap-8');
content = content.replace(/space-y-8/g, 'space-y-4 md:space-y-8');
content = content.replace(/mb-12/g, 'mb-6 md:mb-12');
content = content.replace(/mb-6/g, 'mb-3 md:mb-6');
content = content.replace(/mb-\[25px\]/g, 'mb-3 md:mb-[25px]');
content = content.replace(/mb-20/g, 'mb-10 md:mb-20');
content = content.replace(/mt-12/g, 'mt-6 md:mt-12');
content = content.replace(/mt-8/g, 'mt-4 md:mt-8');

// Specific fix for hero padding
content = content.replace(/pt-\[120px\]/g, 'pt-[80px] md:pt-[120px]');
content = content.replace(/pb-\[12.5px\]/g, 'pb-[10px] md:pb-[12.5px]');

fs.writeFileSync('src/pages/Home.tsx', content, 'utf8');
