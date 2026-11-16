const assert=require('node:assert/strict');
const {createSyncEngine}=require('./sync-engine');
function store(){const data=new Map();return {data,getItem:k=>data.get(k)??null,setItem:(k,v)=>data.set(k,v)};}
(async()=>{
  let saved=null;
  const remote={read:async()=>saved,write:async(_user,_section,data,revision)=>{
    if((saved?.revision||0)!==revision)throw Object.assign(Error('conflict'),{code:'CONFLICT'});
    return saved={data,revision:revision+1};
  }};
  const phoneStore=store(),computerStore=store();
  let phone=createSyncEngine({store:phoneStore,remote,userId:'user'});
  const computer=createSyncEngine({store:computerStore,remote,userId:'user'});
  await phone.load('grammar');await computer.load('grammar');
  computer.set('grammar',{results:{computer:{attempts:1}}});await computer.flush('grammar');
  phone.set('grammar',{results:{phone:{attempts:1}}});
  phone=createSyncEngine({store:phoneStore,remote,userId:'user'});await phone.load('grammar');await phone.flush('grammar');
  assert.deepEqual(saved.data.results,{computer:{attempts:1},phone:{attempts:1}});
  assert.equal(phone.pending('grammar'),false);
  phone.set('grammar',{results:{phone:{attempts:2}}});await phone.flush('grammar');
  assert.deepEqual(saved.data.results,{computer:{attempts:1},phone:{attempts:2}});
  // Both devices start from a saved revision; independent updates survive a restart.
  const newerPhoneStore=store(),newerPhone=createSyncEngine({store:newerPhoneStore,remote,userId:'existing'}),newerComputer=createSyncEngine({store:store(),remote,userId:'existing'});
  const start=await newerPhone.load('grammar');await newerComputer.load('grammar');
  newerComputer.set('grammar',{results:{...start.results,third:{attempts:1}}});await newerComputer.flush('grammar');
  newerPhone.set('grammar',{results:{...start.results,fourth:{attempts:1}}});
  const restarted=createSyncEngine({store:newerPhoneStore,remote,userId:'existing'});await restarted.load('grammar');await restarted.flush('grammar');
  assert.equal(saved.data.results.third.attempts,1);assert.equal(saved.data.results.fourth.attempts,1);
  // Two devices answering the same question preserve both attempts and the latest result.
  saved={revision:1,data:{results:{q:{attempts:1,correct:1,error:false,updatedAt:'2026-01-01T00:00:00.000Z'}},reviewV1:{q:{attempts:1,lastAt:10,due:20}}}};
  const first=createSyncEngine({store:store(),remote,userId:'timed'}),second=createSyncEngine({store:store(),remote,userId:'timed'});
  await first.load('grammar');await second.load('grammar');
  first.set('grammar',{results:{q:{attempts:2,correct:2,error:false,updatedAt:'2026-01-02T00:00:00.000Z'}},reviewV1:{q:{attempts:2,lastAt:20,due:30}}});
  second.set('grammar',{results:{q:{attempts:2,correct:1,error:true,updatedAt:'2026-01-03T00:00:00.000Z'}},reviewV1:{q:{attempts:2,lastAt:30,due:40}}});
  await first.flush('grammar');await second.flush('grammar');
  assert.equal(saved.data.results.q.attempts,3);assert.equal(saved.data.results.q.correct,2);assert.equal(saved.data.results.q.error,true);
  assert.equal(saved.data.reviewV1.q.attempts,3);assert.equal(saved.data.reviewV1.q.lastAt,30);
  // Older pending queues did not keep their common starting point. Never overwrite either copy.
  const oldStore=store(),oldKey='kokora-sync-v1:old:grammar';
  oldStore.setItem(oldKey,JSON.stringify({data:{results:{local:{attempts:1}}},revision:1,dirty:true}));
  saved={data:{results:{remote:{attempts:1}}},revision:2};
  const old=createSyncEngine({store:oldStore,remote,userId:'old'});await old.load('grammar');
  await assert.rejects(()=>old.flush('grammar'),{code:'CONFLICT'});
  assert.equal(JSON.parse(oldStore.getItem(oldKey)).data.results.local.attempts,1);
  assert.equal(saved.data.results.remote.attempts,1);
  assert.equal(typeof old.recoverFromCloud,'function');await old.recoverFromCloud('grammar');
  assert.equal(old.pending('grammar'),false);assert.equal((await old.load('grammar')).results.remote.attempts,1);
  const backup=[...oldStore.data.entries()].find(([key])=>key.startsWith(oldKey+':backup:'));
  assert.equal(JSON.parse(backup[1]).data.results.local.attempts,1,'phone-only progress must remain backed up');
  old.set('grammar',{results:{remote:{attempts:2}}});await old.flush('grammar');
  assert.equal(saved.data.results.remote.attempts,2,'new changes after recovery must sync to the cloud');
  assert.equal(JSON.parse(backup[1]).data.results.local.attempts,1,'recovery backup remains intact');
  // A tab conflict must back up its unsaved view and allow recovery even when the stored version is clean.
  saved={revision:1,data:{v:{word:{attempts:1}}}};const shared=store(),a=createSyncEngine({store:shared,remote,userId:'tabs'}),b=createSyncEngine({store:shared,remote,userId:'tabs'});
  await a.load('legacy');await b.load('legacy');a.set('legacy',{v:{word:{attempts:2}}});await a.flush('legacy');
  assert.throws(()=>b.set('legacy',{v:{word:{attempts:3}}}),{code:'CONFLICT'});
  assert([...shared.data.entries()].some(([k,v])=>k.includes(':backup:')&&JSON.parse(v).data?.v?.word?.attempts===3),'unsaved tab data must be backed up');
  await b.recoverFromCloud('legacy');assert.equal((await b.load('legacy')).v.word.attempts,2);
  // Simultaneous edits of the same answer cannot safely be combined as independent answers.
  saved=null;const left=createSyncEngine({store:store(),remote,userId:'same'}),right=createSyncEngine({store:store(),remote,userId:'same'});
  await left.load('grammar');await right.load('grammar');left.set('grammar',{results:{q:{attempts:1}}});right.set('grammar',{results:{q:{attempts:1}}});
  await left.flush('grammar');await assert.rejects(()=>right.flush('grammar'),{code:'CONFLICT'});assert.equal(right.pending('grammar'),true);
  console.log('Independent progress from different devices is merged after restart.');
})().catch(error=>{console.error(error);process.exitCode=1;});
