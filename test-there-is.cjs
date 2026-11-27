const assert = require('assert');
const fs = require('fs');
const vm = require('vm');
const ctx = {window:{TRAINING_TOPICS:[]}};
vm.runInNewContext(fs.readFileSync('there-is-there-are.js','utf8'),ctx);
const topic=ctx.window.TRAINING_TOPICS.find(x=>x.id==='there-is-there-are');
assert(topic); assert.equal(topic.cards.length,5); assert.equal(topic.exercises.length,36);
const {task,accepts}=require('./topics-core.js');
const modes={choice:0,gap:0,full:0};
for(const q of topic.exercises){
  modes[q.mode]++; const view=task(q);
  assert(q.feedback_explanation,q.id);
  for(const a of view.answers) assert(accepts(view,a),q.id+': '+a);
  if(q.mode==='choice') {
    assert.equal(q.options.filter(o=>accepts(view,o)).length,1,q.id);
    for(const o of q.options.filter(o=>!accepts(view,o))) assert(q.choice_feedback[o],q.id+': '+o);
  }
  for(const hint of q.word_hints||[]) assert(q.material.includes(hint[0]),q.id+': '+hint[0]);
}
assert.deepEqual(modes,{choice:14,gap:12,full:10});
const t=id=>task(topic.exercises.find(q=>q.id.endsWith(id)));
assert(accepts(t('T05'),"There's no milk in the fridge."));
assert(accepts(t('T07'),'Are there some shops in this street?'));
assert(!accepts(t('C01'),'are'));
for (const c of topic.cards) assert(fs.existsSync(c.figures[0].src),c.id);
console.log('There is / there are: 36 заданий и пять изображений проверены');
