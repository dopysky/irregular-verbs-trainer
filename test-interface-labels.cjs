const fs=require('node:fs'),assert=require('node:assert/strict');
for(const file of ['app.js','topics.js','index.html'])assert.doesNotMatch(fs.readFileSync(__dirname+'/'+file,'utf8'),/[←→↑↓↔]/,file);
const html=fs.readFileSync(__dirname+'/index.html','utf8');assert.match(html,/>Открыть весь словарь<\/button>/);assert.match(html,/>К блокам<\/button>/);assert.match(html,/>Наверх<\/button>/);
const css=fs.readFileSync(__dirname+'/style.css','utf8');assert.match(css,/@font-face[\s\S]*UnboundedMobile/);assert.match(css,/@media\s*\(max-width:\s*700px\)[\s\S]*UnboundedMobile/);
console.log('Interface labels and mobile font configured');
