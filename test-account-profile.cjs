const assert=require('node:assert/strict');
const {createProfile}=require('./account-profile');
(async()=>{
  let active='alice',saved=null;
  let deletions=0;
  const client={supabaseUrl:'https://example.test',supabaseKey:'public-key',auth:{getSession:async()=>({data:{session:{access_token:'alice-token'}},error:null}),getUser:async(token)=>({data:{user:{id:token==='alice-token'?'alice':active}},error:null})},from(table){
    assert.equal(table,'user_profiles');return {
      select(){return {eq(column,id){assert.equal(column,'user_id');assert.equal(id,'alice');return {maybeSingle:async()=>({data:saved,error:null})};}};},
      upsert:async row=>{saved=row;return {error:null};}
    };
  }};
  const send=async(url,options)=>{assert.match(url,/delete_own_kokora_account$/);assert.equal(options.headers.Authorization,'Bearer alice-token');deletions++;return {ok:true};};const profile=createProfile(client,'alice',{send});
  assert.equal(await profile.load(),null);
  await profile.save({name:'  Алина Скай  ',avatar:'data:image/jpeg;base64,YWJj'});
  assert.ok(saved,'profile is persisted');
  assert.equal(saved.user_id,'alice');assert.equal(saved.display_name,'Алина Скай');assert.equal((await profile.load()).avatar_data,'data:image/jpeg;base64,YWJj');
  await assert.rejects(()=>profile.save({name:'Алина',avatar:'javascript:bad'}));
  active='other';await assert.rejects(()=>profile.save({name:'Другая',avatar:null}),/аккаунт/i);
  assert.equal(saved.display_name,'Алина Скай');
  assert.equal(typeof profile.deleteAccount,'function');client.auth.getSession=async()=>({data:{session:{access_token:'other-token'}},error:null});await assert.rejects(()=>profile.deleteAccount(),/аккаунт/i);assert.equal(deletions,0);
  client.auth.getSession=async()=>({data:{session:{access_token:'alice-token'}},error:null});await profile.deleteAccount();assert.equal(deletions,1);
  console.log('Profile belongs to the signed-in account and validates uploaded avatars.');
})().catch(error=>{console.error(error);process.exitCode=1;});
