const assert=require('assert'),fs=require('fs'),vm=require('vm');
const context={window:{TRAINING_TOPICS:[]}};vm.runInNewContext(fs.readFileSync('present-continuous-now.js','utf8'),context);
const t=context.window.TRAINING_TOPICS.find(x=>x.id==='present-continuous-now');
for(const card of t.cards) assert(card.sections?.length,card.id+' должен содержать разделы');
const pairs=t.cards[3].sections.flatMap(s=>s.pairs||[]);
assert.equal(pairs.length,5); assert(pairs.some(p=>p.note.includes('запланированн')));
for(const q of t.exercises){for(const text of [q.material,q.correct_display,...(q.options||[])]) assert(!/\.$/.test(text||''),q.id+' заканчивается точкой');}
const core=require('./topics-core.js'); const full=core.task(t.exercises.find(q=>q.id.endsWith('T01')));assert(core.accepts(full,'She is reading a book now.'));
console.log('Structured rules, five pairs, and exercise punctuation: OK');
