/* Auth wrapper: passwords are passed directly to Supabase and never stored here. */
(function(root){
  'use strict';
  function createAccountSession(client,redirectUrl){
    const url=new URL(redirectUrl);
    if(!['https:','http:'].includes(url.protocol)||(url.protocol==='http:'&&!['localhost','127.0.0.1'].includes(url.hostname)))throw new Error('Небезопасный адрес возврата');
    function email(value){if(typeof value!=='string'||!value.trim())throw new Error('Введите email');return value.trim();}
    function password(value){if(typeof value!=='string'||!value)throw new Error('Введите пароль');return value;}
    async function invoke(call){const result=await call;if(result.error)throw result.error;return result.data;}
    return {
      signUp:(address,secret,name='')=>invoke(client.auth.signUp({email:email(address),password:password(secret),options:{emailRedirectTo:url.href,data:{display_name:String(name).trim().slice(0,80)}}})),
      signIn:(address,secret)=>invoke(client.auth.signInWithPassword({email:email(address),password:password(secret)})),
      resetPassword:address=>invoke(client.auth.resetPasswordForEmail(email(address),{redirectTo:url.href})),
      updatePassword:secret=>invoke(client.auth.updateUser({password:password(secret)})),
      signInGoogle:()=>invoke(client.auth.signInWithOAuth({provider:'google',options:{redirectTo:url.href}})),
      signOut:()=>invoke(client.auth.signOut())
    };
  }
  if(typeof module!=='undefined'&&module.exports)module.exports={createAccountSession};else root.KokoraAccount={createAccountSession};
})(typeof window==='undefined'?globalThis:window);
