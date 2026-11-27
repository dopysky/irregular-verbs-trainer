const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const guest = fs.readFileSync('index.html', 'utf8');
const account = fs.readFileSync('account.html', 'utf8');
const topicScripts = [...guest.matchAll(/<script src="([^"?]+\.js)(?:\?[^"]*)?"><\/script>/g)]
  .map(match => match[1])
  .filter(file => /window\.TRAINING_TOPICS\.push/.test(fs.readFileSync(file, 'utf8')));
assert(topicScripts.length > 0);
const window = {TRAINING_TOPICS: []};
for (const file of topicScripts) {
  const dataIndex = account.indexOf('data-account-src="topics-data.js');
  const scriptIndex = account.indexOf(`data-account-src="${file}`);
  const uiIndex = account.indexOf('data-account-src="topics-account-test.js');
  assert(scriptIndex > dataIndex && scriptIndex < uiIndex, `${file} must load after topic data and before account UI`);
  vm.runInNewContext(fs.readFileSync(file, 'utf8'), {window});
}
for (const id of ['like-would-like', 'present-continuous-now', 'future-will-going-to', 'there-is-there-are', 'prepositions-of-movement-new']) {
  assert(window.TRAINING_TOPICS.some(topic => topic.id === id), `missing topic ${id}`);
}
console.log('Account loads all added topic blocks in order.');
