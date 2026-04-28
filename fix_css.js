const fs = require('fs');
const path = require('path');

const targetDir = 'c:\\Users\\varas\\Documents\\GitHub\\khido';

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  
  // Replace colors with spaces
  content = content.replace(/rgba\(\s*139\s*,\s*136\s*,\s*255/g, 'rgba(0, 191, 203');
  content = content.replace(/rgba\(\s*108\s*,\s*102\s*,\s*255/g, 'rgba(0, 191, 203');
  content = content.replace(/rgba\(\s*119\s*,\s*114\s*,\s*216/g, 'rgba(0, 191, 203');
  content = content.replace(/rgba\(\s*139\s*,\s*92\s*,\s*246/g, 'rgba(0, 191, 203');
  content = content.replace(/rgba\(\s*130\s*,\s*126\s*,\s*226/g, 'rgba(0, 191, 203');
  content = content.replace(/rgba\(\s*81\s*,\s*77\s*,\s*180/g, 'rgba(0, 191, 203');
  content = content.replace(/rgba\(\s*194\s*,\s*192\s*,\s*255/g, 'rgba(0, 191, 203');
  content = content.replace(/rgba\(\s*34\s*,\s*31\s*,\s*105/g, 'rgba(0, 38, 41'); // dark teal
  content = content.replace(/#00BFCB/g, '#00BFCB');
  content = content.replace(/#00BFCB/g, '#00BFCB');
  
  if (original !== content) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated: ' + filePath);
  }
}

function traverseDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (!fullPath.includes('node_modules') && !fullPath.includes('.next') && !fullPath.includes('.git')) {
        traverseDir(fullPath);
      }
    } else {
      if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js') || fullPath.endsWith('.css')) {
        replaceInFile(fullPath);
      }
    }
  }
}

traverseDir(targetDir);
console.log('Replaced CSS variables and spaced rgb codes!');
