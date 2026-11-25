const assert = require('assert');
const fs = require('fs');
const vm = require('vm');
const ctx = {window:{}};
vm.createContext(ctx);
for (const f of ['grammar-cards.js','new-exercises.js','topics-data.js','like-would-like.js']) vm.runInContext(fs.readFileSync(f,'utf8'),ctx);
const topic=ctx.window.TRAINING_TOPICS.find(t=>t.id==='like-would-like');
assert(topic, 'Тема должна быть подключена');
assert.equal(topic.cards.length,4);
assert.equal(topic.exercises.length,24);
const {task,accepts}=require('./topics-core.js');
assert(accepts(task(topic.exercises[14]),'to dance'));
assert(accepts(task(topic.exercises[19]),'She does not like to run'));
assert(!accepts(task(topic.exercises[19]),'She do not like running'));
assert(topic.exercises[0].choice_feedback.likes);
console.log('Like/would like: проверка пройдена');
const modes={choice:0,gap:0,full:0};
for (const q of topic.exercises) {
  modes[q.mode]++;
  const v=task(q);
  for(const a of v.answers) assert(accepts(v,a),`${q.id}: ${a}`);
  assert(q.feedback_explanation, `${q.id}: нет объяснения`);
  if(q.mode==='choice') {
    assert.equal(q.options.filter(o=>accepts(v,o)).length,1,`${q.id}: правильный вариант`);
    for(const o of q.options.filter(o=>!accepts(v,o))) assert(q.choice_feedback[o],`${q.id}: нет объяснения ${o}`);
  }
}
assert.deepEqual(modes,{choice:8,gap:8,full:8});
console.log('24 задания: варианты ответов и объяснения проверены');
