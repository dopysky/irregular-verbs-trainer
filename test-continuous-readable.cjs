const assert=require('assert'),fs=require('fs'),vm=require('vm');const ctx={window:{TRAINING_TOPICS:[]}};vm.runInNewContext(fs.readFileSync('present-continuous-now.js','utf8'),ctx);
const t=ctx.window.TRAINING_TOPICS.find(x=>x.id==='present-continuous-now');let sections=t.cards.flatMap(c=>c.sections), text=sections.map(s=>[s.title,s.text,s.formula].join(' ')).join('\n');
assert(/что такое continuous/i.test(t.intro[0].title)); text += t.intro.map(s=>s.text).join(" ");assert(text.includes('She is reading'));assert(text.includes('She was reading'));assert(!text.includes("В речи обычны сокращения"));assert(!/смысловой глагол|немой e|подлежащее \+/.test(text));
assert(t.cards[3].sections.some(s=>s.pairs?.some(p=>p.left[0].includes('I think this is a good idea'))));assert.equal(t.cards[3].sections.flatMap(s=>s.pairs||[]).length,5);
console.log('Beginner explanations and approved comparison examples: OK');
