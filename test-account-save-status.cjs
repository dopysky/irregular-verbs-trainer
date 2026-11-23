const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const source=fs.readFileSync(__dirname+'/account-test.js','utf8');
const start=source.indexOf('  function report(state)'),end=source.indexOf('\n  document.getElementById',start);
assert(start>=0&&end>start);
const status={textContent:''},button={hidden:false};
const ctx={status,document:{getElementById:()=>button}};
vm.createContext(ctx);vm.runInContext(source.slice(start,end),ctx);
for(const state of ['pending','saved']){ctx.report(state);assert.equal(status.textContent,'');assert.equal(button.hidden,true);}
for(const state of ['offline','conflict','local-conflict']){ctx.report(state);assert.notEqual(status.textContent,'');assert.equal(button.hidden,state==='offline');}
ctx.report('saved');assert.equal(status.textContent,'');assert.equal(button.hidden,true);
console.log('Only interrupted sync is displayed; recovery remains available.');
