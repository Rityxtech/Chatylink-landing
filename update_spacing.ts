import * as fs from 'fs';
import * as path from 'path';

const dir = path.join(process.cwd(), 'src', 'pages');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace py-[25px] with py-[12.5px]
  content = content.replace(/py-\[25px\]/g, 'py-[12.5px]');
  
  // Replace mb-[25px] with mb-[25px] ? Wait, mb doesn't duplicate if there is no mt.
  // Actually, mb-[25px] is already exactly 25px.
  
  // In Home.tsx we have some mb-20, mb-16, mb-12.
  content = content.replace(/mb-24/g, 'mb-[25px]');
  content = content.replace(/mb-20/g, 'mb-[25px]');
  content = content.replace(/mb-16/g, 'mb-[25px]');
  content = content.replace(/space-y-48/g, 'space-y-[25px]');
  content = content.replace(/gap-24/g, 'gap-[25px]');
  content = content.replace(/gap-20/g, 'gap-[25px]');
  content = content.replace(/gap-16/g, 'gap-[25px]');
  
  fs.writeFileSync(filePath, content, 'utf8');
}
console.log('updated');
