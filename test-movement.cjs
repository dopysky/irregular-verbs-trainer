const assert = require('node:assert/strict');
const vm = require('node:vm');
const fs = require('node:fs');
const window = {TRAINING_TOPICS: []};
vm.runInNewContext(fs.readFileSync('prepositions-of-movement-new.js','utf8'), {window});
const topic = window.TRAINING_TOPICS.find(t => t.id === 'prepositions-of-movement-new');
assert.equal(topic.cards.length, 6);
assert.equal(topic.exercises.length, 19);
for (const card of topic.cards) assert.ok(fs.existsSync(card.figures[0].src));
for (const exercise of topic.exercises) {
  assert.ok(exercise.answers.includes(exercise.answer));
  assert.ok(exercise.feedback_explanation);
}
for (const answer of ['towards', 'toward', 'to']) assert.ok(topic.exercises[4].answers.includes(answer));
for (const answer of ['onto', 'on']) assert.ok(topic.exercises[10].answers.includes(answer));
console.log('Movement block checks passed');
