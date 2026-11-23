const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const clips=[],timers=[],events={};class Audio{constructor(src){this.src=src;this.played=0;this.paused=0;clips.push(this);}pause(){this.paused++;}play(){this.played++;return Promise.resolve();}}
let resumed=0,tones=0;const gainParam={setValueAtTime(){},exponentialRampToValueAtTime(){}};
class AudioContext{constructor(){this.state='interrupted';this.currentTime=0;this.destination={}}resume(){resumed++;this.state='running';return Promise.resolve()}createGain(){return {gain:gainParam,connect(){},disconnect(){}}}createOscillator(){return {frequency:gainParam,connect(){},disconnect(){},start(){tones++},stop(){}}}}
const window={Audio,AudioContext,setTimeout:fn=>{timers.push(fn);return timers.length},clearTimeout(){}},document={addEventListener(name,fn){events[name]=fn}};vm.runInNewContext(fs.readFileSync(__dirname+'/training-sound.js','utf8'),{window});
let enabled=true;const sound=window.bindTrainingSound(document,()=>enabled);
assert.deepEqual(clips.map(c=>c.src),['assets/sounds/neutral.mp3','assets/sounds/incorrect-270300.mp3']);
sound.result(false);assert.equal(clips[1].played,1);assert.equal(clips[0].played,0);
assert.ok(timers.length,'the error sound releases audio before pronunciation');timers.shift()();assert.equal(clips[1].paused,2);
events.keydown({isTrusted:true});assert.equal(resumed,1,'keyboard interaction resumes interrupted audio');
sound.result(true);assert.equal(tones,3,'correct answer plays the full signal');
enabled=false;sound.result(false);assert.equal(clips[1].played,1);
console.log('Error sound and mute handling OK');
