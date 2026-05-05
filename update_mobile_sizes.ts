import * as fs from 'fs';

let home = fs.readFileSync('src/pages/Home.tsx', 'utf8');
home = home.replace(/pt-\[80px\] md:pt-\[120px\]/, 'pt-12 md:pt-[120px]');
home = home.replace(/pb-\[10px\] md:pb-\[12\.5px\]/, 'pb-4 md:pb-[12.5px]');
home = home.replace(/px-2\.5 md:px-12/g, 'px-4 md:px-12'); 
home = home.replace(/h-48 flex items-end/, 'h-32 md:h-48 flex items-end');
// Also reduce the gap and space on mobile
home = home.replace(/gap-6 md:gap-12/g, 'gap-4 md:gap-12'); 
home = home.replace(/space-y-4 md:space-y-8/g, 'space-y-3 md:space-y-8');
home = home.replace(/mb-8/g, 'mb-4 md:mb-8');

fs.writeFileSync('src/pages/Home.tsx', home);

let header = fs.readFileSync('src/components/TopNavBar.tsx', 'utf8');
header = header.replace(/h-16 md:h-20/, 'h-14 md:h-20');
fs.writeFileSync('src/components/TopNavBar.tsx', header);

let footer = fs.readFileSync('src/components/Footer.tsx', 'utf8');
footer = footer.replace(/py-8 md:py-10/, 'py-6 md:py-10');
footer = footer.replace(/gap-8 lg:gap-6/, 'gap-6 lg:gap-6');
footer = footer.replace(/mt-10 pt-6/, 'mt-6 pt-4 md:mt-10 md:pt-6');
fs.writeFileSync('src/components/Footer.tsx', footer);

console.log('done');
