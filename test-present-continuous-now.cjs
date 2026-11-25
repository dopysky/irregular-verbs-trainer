const assert=require('assert'),fs=require('fs'),vm=require('vm');
const ctx={window:{TRAINING_TOPICS:[]}};vm.runInNewContext(fs.readFileSync('present-continuous-now.js','utf8'),ctx);
const t=ctx.window.TRAINING_TOPICS.find(x=>x.id==='present-continuous-now');
assert.equal(t.cards.length,4);assert.equal(t.exercises.length,44);
assert.deepEqual(Object.fromEntries(['choice','gap','full'].map(m=>[m,t.exercises.filter(x=>x.mode===m).length])),{choice:16,gap:16,full:12});
const {task,accepts}=require('./topics-core.js');
for(const q of t.exercises){const v=task(q);assert(accepts(v,q.answer),q.id);assert(q.feedback_explanation,q.id);assert(q.explain_skip,q.id);if(q.mode==='choice'){assert.equal(q.options.length,3);for(const o of q.options.filter(o=>o!==q.answer)){assert(!accepts(v,o),q.id);assert(q.choice_feedback[o],q.id)}}}
for(const card of t.cards){assert(fs.existsSync(card.figures[0].src));assert(card.figures[0].captions.length);}
assert(accepts(task(t.exercises.find(q=>q.id.endsWith('T02'))),"WE AREN'T WATCHING TV NOW!"));
assert(!accepts(task(t.exercises.find(q=>q.id.endsWith('T02'))),'We is watching TV now'));
console.log('4 cards, 44 exercises, answers and feedback: OK');
