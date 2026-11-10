const assert=require('node:assert/strict');
class Element {
  constructor(tag){this.tagName=tag.toUpperCase();this.type=tag==='input'?'text':'';this.inputMode='';this.value='';this.selectionStart=this.selectionEnd=0;this.isConnected=true;this.attrs={};this.dataset={};this.children=[];this.events={};this.classList={add(){},remove(){}};this.style={setProperty(){},removeProperty(){}};}
  setAttribute(k,v){this.attrs[k]=v;} getAttribute(k){return this.attrs[k]??null;} removeAttribute(k){delete this.attrs[k];}
  appendChild(x){this.children.push(x);x.parent=this;return x;} replaceChildren(){this.children=[];} remove(){this.removed=true;}
  addEventListener(k,f){(this.events[k]??=[]).push(f);} removeEventListener(k,f){this.events[k]=(this.events[k]||[]).filter(x=>x!==f);}
  dispatchEvent(e){e.target=this;for(const f of this.events[e.type]||[])f(e);return true;}
  fire(type,extra={}){this.dispatchEvent({type,preventDefault(){},...extra});} focus(){this.fire('focus');} scrollIntoView(){} setSelectionRange(a,b){this.selectionStart=a;this.selectionEnd=b;} contains(x){return this===x||this.children.some(c=>c.contains(x));}
}
const doc=new Element('document');doc.body=new Element('body');doc.documentElement=new Element('html');doc.createElement=t=>new Element(t);
let timeoutFn,intervalFn;const vibrations=[];
global.window={document:doc,navigator:{vibrate:n=>vibrations.push(n)},matchMedia:()=>({matches:true}),Event:class{constructor(type){this.type=type;}},setTimeout:f=>(timeoutFn=f,1),clearTimeout:()=>{},setInterval:f=>(intervalFn=f,2),clearInterval:()=>{intervalFn=null;},addEventListener(){},removeEventListener(){}};
const {attach}=require('./keyboard');const field=new Element('input'),submit=new Element('button');submit.disabled=false;let submits=0;submit.click=()=>submits++;
const dispose=attach([field],submit);assert.equal(field.getAttribute('inputmode'),'none');field.focus();const panel=doc.body.children[0];assert.equal(panel.hidden,false);
let row=panel.children[1];row.children[0].fire('pointerdown');row.children[0].fire('pointerup');row.children[0].fire('click');assert.equal(field.value,'q');assert.deepEqual(vibrations,[8]);
field.value='abcd';field.setSelectionRange(1,3);row.children[1].fire('click');assert.equal(field.value,'awd');
field.value='abcd';field.setSelectionRange(4,4);const backspace=panel.children[3].children.at(-1);backspace.fire('pointerdown');timeoutFn();intervalFn();assert.equal(field.value,'ab');assert.deepEqual(vibrations,[8,8,8,8]);backspace.fire('pointerup');assert.equal(intervalFn,null);
window.navigator.vibrate=()=>{throw Error('unsupported')};row.children[1].fire('click');assert.equal(field.value,'abw');delete window.navigator.vibrate;row.children[1].fire('click');assert.equal(field.value,'abww');
let bottom=panel.children.at(-1);bottom.children.at(-1).fire('click');assert.equal(submits,1);
panel.children[0].fire('click');assert.equal(panel.hidden,true);assert.equal(field.getAttribute('inputmode'),'text');dispose();assert.equal(field.getAttribute('inputmode'),null);assert(panel.removed);
console.log('Keyboard attach, edit, submit, fallback and cleanup OK');
