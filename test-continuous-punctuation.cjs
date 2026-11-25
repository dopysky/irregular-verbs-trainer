const assert=require('assert'),fs=require('fs'),vm=require('vm');const ctx={window:{TRAINING_TOPICS:[]}};vm.runInNewContext(fs.readFileSync('present-continuous-now.js','utf8'),ctx);const q=ctx.window.TRAINING_TOPICS[0].exercises;
assert.equal(q.find(x=>x.id.endsWith('F04')).material,'He is ___ a letter now (write)');
assert.equal(q.find(x=>x.id.endsWith('C12')).material,'Was he reading? — Yes, he ___');
assert.equal(q.find(x=>x.id.endsWith('T01')).material,'Она сейчас читает книгу');
const second={window:{TRAINING_TOPICS:[]}};const source=fs.readFileSync('present-continuous-now.js','utf8').replace('I ___ lunch right now.','First sentence. Second sentence.');vm.runInNewContext(source,second);assert.equal(second.window.TRAINING_TOPICS[0].exercises.find(x=>x.id.endsWith('C01')).material,'First sentence. Second sentence');
console.log('Exercise punctuation and parenthesized hints: OK');
