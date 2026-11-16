const assert=require('node:assert/strict');
const {createAccountSession}=require('./account-session');
(async()=>{
  const calls=[]; const ok=(name)=>async (...args)=>{calls.push([name,name==='reset'?args:args[0]]);return {data:{ok:true},error:null}};
  const auth={signUp:ok('signup'),signInWithPassword:ok('signin'),resetPasswordForEmail:ok('reset'),signInWithOAuth:ok('oauth'),signOut:ok('signout'),updateUser:ok('update')};
  const account=createAccountSession({auth},'https://example.test/kokora/');
  await account.signUp('person@example.test','securepass');assert.equal(calls[0][1].options.emailRedirectTo,'https://example.test/kokora/');
  await account.signIn('person@example.test','securepass');assert.equal(calls[1][1].email,'person@example.test');
  await account.resetPassword('person@example.test');assert.equal(calls[2][1][1].redirectTo,'https://example.test/kokora/');
  await account.signInGoogle();assert.equal(calls[3][1].options.redirectTo,'https://example.test/kokora/');
  await account.updatePassword('newsecurepass');assert.equal(calls[4][1].password,'newsecurepass');
  await account.signUp('named@example.test','securepass','Алина');assert.equal(calls.at(-1)[1].options.data.display_name,'Алина');
  assert.throws(()=>account.signIn('','x'),/email/i);
  console.log('Account client uses explicit redirect URLs and validates input.');
})().catch(e=>{console.error(e);process.exitCode=1;});
