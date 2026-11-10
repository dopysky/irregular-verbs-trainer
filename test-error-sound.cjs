const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const clips=[];class Audio{constructor(src){this.src=src;this.played=0;clips.push(this);}pause(){}play(){this.played++;return Promise.resolve();}}
const window={Audio,setTimeout},document={addEventListener(){}};vm.runInNewContext(fs.readFileSync(__dirname+'/training-sound.js','utf8'),{window});
let enabled=true;const sound=window.bindTrainingSound(document,()=>enabled);
assert.deepEqual(clips.map(c=>c.src),['assets/sounds/neutral.mp3','assets/sounds/error-denied.mp3']);
sound.result(false);assert.equal(clips[1].played,1);assert.equal(clips[0].played,0);
enabled=false;sound.result(false);assert.equal(clips[1].played,1);
console.log('Error sound and mute handling OK');
