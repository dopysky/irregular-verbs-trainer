const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const html=fs.readFileSync(__dirname+'/index.html','utf8');
const head=html.slice(0,html.indexOf('</head>')),script=head.match(/<script[^>]*>([\s\S]*?)<\/script>/)?.[1];
assert(script,'theme is applied in head');assert(head.indexOf('<script')<head.indexOf('rel="stylesheet"'));
for(const [records,expected] of [[{'irregular_trainer_v21':'{"theme":"dark"}'},'dark'],[{'irregular_trainer_v16':'{"theme":"dark"}'},'dark'],[{'irregular_trainer_v21':'{"theme":"light"}'},'light'],[{'irregular_trainer_v21':'broken'},'light'],[{},'light']]){
 const document={documentElement:{dataset:{}}},localStorage={getItem:key=>records[key]||null};vm.runInNewContext(script,{document,localStorage});assert.equal(document.documentElement.dataset.theme||'light',expected);
}
const serviceWorker=fs.readFileSync(__dirname+'/sw.js','utf8');
for(const match of html.matchAll(/<script src="([^"]+\?v=[^"]+)"/g))assert(serviceWorker.includes("'./"+match[1]+"'"),match[1]+' is pre-cached');
console.log('Theme is applied before styles for existing, legacy and damaged state');
