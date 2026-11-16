const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const ids=['account-gate','account-bar','account-message','account-email','account-password','account-status','account-form','account-submit','account-switch','account-reset','account-title','account-description','account-password-group','account-switch-label','account-google','account-google-note','account-recovery','account-recovery-message','account-new-password','account-logout'];
const elements=Object.fromEntries(ids.map(id=>[id,{hidden:false,addEventListener(){}}]));
const classes=new Set(['account-locked','account-checking']);let finish;
const auth={onAuthStateChange(){},getUser:()=>new Promise(resolve=>{finish=resolve;})};
const context={document:{body:{classList:{add:x=>classes.add(x),remove:x=>classes.delete(x)}},getElementById:id=>elements[id]},window:{supabase:{createClient:()=>({auth})},KokoraAccount:require('./account-session')},location:{origin:'https://example.test',pathname:'/account.html'},fetch:async()=>({ok:false}),setTimeout,URL,URLSearchParams};
(async()=>{
  vm.runInNewContext(fs.readFileSync(__dirname+'/account-test.js','utf8'),context);
  assert(classes.has('account-checking'),'login form stays hidden while checking the session');
  finish({data:{user:null},error:null});await new Promise(r=>setImmediate(r));
  assert(!classes.has('account-checking'),'login form appears after confirming there is no session');
  console.log('Login form waits for the session check.');
})().catch(error=>{console.error(error);process.exitCode=1;});
