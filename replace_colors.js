const fs = require('fs');
const path = require('path');

const targetDir = 'c:\\Users\\varas\\Documents\\GitHub\\khido';

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace words
  content = content.replace(/calipso-/g, 'calipso-');
  content = content.replace(/calipsoGlow/g, 'calipsoGlow');
  content = content.replace(/calipso-/g, 'calipso-');
  content = content.replace(/--calipso:/g, '--calipso:');
  
  // Replace colors
  content = content.replace(/rgba\(139, 136, 255/g, 'rgba(0, 191, 203');
  content = content.replace(/rgba\(108,102,255/g, 'rgba(0,191,203');
  content = content.replace(/rgba\(119,114,216/g, 'rgba(0,191,203');
  content = content.replace(/rgba\(139,92,246/g, 'rgba(0,191,203');
  content = content.replace(/#0099A2/g, '#0099A2');
  
  fs.writeFileSync(filePath, content, 'utf8');
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
console.log('Replaced all violet/purple references with calipso!');
