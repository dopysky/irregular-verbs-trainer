const assert=require('node:assert/strict');
const {bindReady}=require('./training-ui');
function element(tag){return {tagName:tag,value:'',disabled:false,style:{},scrollHeight:80,handlers:{},addEventListener(name,fn){this.handlers[name]=fn;},removeEventListener(name){delete this.handlers[name];},fire(name,event={}){let prevented=false;this.handlers[name]?.({preventDefault(){prevented=true;},...event});return prevented;}};}
const input=element('TEXTAREA'),button=element('BUTTON');let commits=0;
const dispose=bindReady([input],{button,keyboard:false,commit(){commits++;}});
assert.equal(input.style.height,'82px');
assert.equal(input.fire('keydown',{key:'Enter'}),true);assert.equal(commits,0);
input.value='A long answer that wraps automatically.';input.scrollHeight=120;input.fire('input');assert.equal(input.style.height,'122px');
input.fire('compositionstart');assert.equal(input.fire('keydown',{key:'Enter',isComposing:true}),false);assert.equal(commits,0);
input.fire('compositionend');assert.equal(input.fire('keydown',{key:'Enter'}),true);assert.equal(commits,1);
button.fire('click');assert.equal(commits,1);dispose();
console.log('Enter submits once, IME remains usable, and long answers expand.');
