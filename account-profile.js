(function(root){
  'use strict';
  function createProfile(client,userId,{send=globalThis.fetch}={}){
    async function verify(){const {data,error}=await client.auth.getUser();if(error||data?.user?.id!==userId)throw new Error('Аккаунт изменился');}
    return {
      async load(){await verify();const {data,error}=await client.from('user_profiles').select('display_name,avatar_data').eq('user_id',userId).maybeSingle();if(error)throw error;await verify();return data;},
      async save({name,avatar}){
        if(typeof name!=='string'||name.trim().length>80)throw new Error('Имя слишком длинное');
        if(avatar!==null&&(typeof avatar!=='string'||avatar.length>100000||!/^data:image\/jpeg;base64,[A-Za-z0-9+/]+={0,2}$/.test(avatar)))throw new Error('Не удалось загрузить фото');
        await verify();const {error}=await client.from('user_profiles').upsert({user_id:userId,display_name:name.trim(),avatar_data:avatar});if(error)throw error;
      },
      async deleteAccount(){
        const {data:session,error:sessionError}=await client.auth.getSession();const token=session?.session?.access_token;
        if(sessionError||!token)throw new Error('Не удалось проверить аккаунт');
        const {data,error}=await client.auth.getUser(token);if(error||data?.user?.id!==userId)throw new Error('Аккаунт изменился');
        const response=await send(client.supabaseUrl.replace(/\/$/,'')+'/rest/v1/rpc/delete_own_kokora_account',{method:'POST',headers:{apikey:client.supabaseKey,Authorization:'Bearer '+token,'Content-Type':'application/json'},body:'{}'});
        if(!response.ok)throw new Error('Не удалось подтвердить удаление');
      }
    };
  }
  const api={createProfile};if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.KokoraProfile=api;
})(typeof window==='undefined'?globalThis:window);
