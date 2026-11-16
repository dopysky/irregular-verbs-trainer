/* Prepared adapter: no connection or synchronisation occurs until invoked. */
(function(root){
  'use strict';
  const sections=new Set(['grammar','legacy']);
  function createCloudProgress(client){
    async function ensureUser(expected){
      const {data:auth,error}=await client.auth.getUser();
      if(error)throw new Error('Не удалось проверить вход');
      if(!auth?.user?.id)throw new Error('Нужно войти в аккаунт');
      if(expected&&auth.user.id!==expected)throw new Error('Аккаунт изменился; сохранение остановлено');
      return auth.user.id;
    }
    async function save(section,data,revision,expected){
      if(!sections.has(section))throw new Error('Неизвестный раздел прогресса');
      if(!data||typeof data!=='object'||Array.isArray(data)||!Object.keys(data).length)throw new Error('Нельзя отправить пустые данные');
      if(!Number.isSafeInteger(revision)||revision<0)throw new Error('Некорректная версия данных');
      const userId=await ensureUser(expected);
      const result=await client.rpc('save_own_progress_for_user',{expected_user_id:userId,section_name:section,progress_data:data,expected_revision:revision});
      if(result.error){if(result.error.message?.includes('revision_conflict'))throw Object.assign(new Error('Обнаружен конфликт прогресса; данные не перезаписаны'),{code:'CONFLICT'});throw new Error('Не удалось сохранить прогресс');}
      if(!result.data||!Number.isSafeInteger(result.data.revision))throw new Error('Сервер не подтвердил сохранение');
      return {revision:result.data.revision};
    }
    return {
      save,
      async write(userId,section,data,revision){return save(section,data,revision,userId);},
      async read(userId,section){
        if(!sections.has(section))throw new Error('Неизвестный раздел прогресса');
        await ensureUser(userId);
        const result=await client.from('user_progress').select('data,revision').eq('section',section).maybeSingle();
        if(result.error)throw new Error('Не удалось загрузить прогресс');
        await ensureUser(userId);
        return result.data;
      }
    };
  }
  if(typeof module!=='undefined'&&module.exports)module.exports={createCloudProgress};else root.KokoraCloudProgress={createCloudProgress};
})(typeof window==='undefined'?globalThis:window);
