const fs=require('fs'),vm=require('vm'),assert=require('assert');
const ctx={window:{TRAINING_TOPICS:[]}};vm.runInNewContext(fs.readFileSync('future-will-going-to.js','utf8'),ctx);
const t=ctx.window.TRAINING_TOPICS[0];assert.equal(t.id,'future-will-going-to');assert.equal(t.cards.length,4);assert.equal(t.exercises.length,40);
for(const [i,q] of t.exercises.entries()){assert.equal(q.id,`future-will-going-to-F${String(i+1).padStart(2,'0')}`);assert(q.answer&&q.feedback_explanation);if(q.mode==='choice'){assert(q.options.includes(q.answer));for(const o of q.options.filter(x=>x!==q.answer))assert(q.choice_feedback[o]);}}
assert(t.exercises[22].instruction.includes('момент'));assert(t.exercises[39].full_translation_accepted_answers.some(x=>x.includes('those clouds')));
const core=require('./topics-core.js');
for(const q of t.exercises){const view=core.task(q);for(const answer of view.answers){assert(core.accepts(view,answer),q.id+' '+answer);assert(core.accepts(view,answer.toUpperCase()+'.'),q.id+' punctuation');}}
const last=core.task(t.exercises[39]);for(const value of ["Look at those clouds! It's going to rain.","Look at the clouds. It is going to rain", "Look at the clouds! It'll rain"])assert(core.accepts(last,value),value);
console.log('Future block checks passed');
