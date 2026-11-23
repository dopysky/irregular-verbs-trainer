(function(){
  'use strict';
  const url='https://eyjygwzioumfpfpkuvav.supabase.co';
  const publicKey='sb_publishable_IN0u7O7zHPQ5bszGq2-Xkg_v0Z3U_8k';
  const linkError=new URLSearchParams((location.hash||'').replace(/^#/, '')).get('error_code');
  const client=window.supabase.createClient(url,publicKey);
  const redirect=location.origin+location.pathname;
  const account=window.KokoraAccount.createAccountSession(client,redirect);
  const gate=document.getElementById('account-gate'),message=document.getElementById('account-message');
  const email=document.getElementById('account-email'),password=document.getElementById('account-password');
  const status=document.getElementById('account-status');let started=false,recoveryMode=false,mode='signin',busy=false;
  const form=document.getElementById('account-form'),submit=document.getElementById('account-submit');
  const switchButton=document.getElementById('account-switch'),resetButton=document.getElementById('account-reset');
  const title=document.getElementById('account-title'),description=document.getElementById('account-description');
  function setMode(next){
    mode=next;show('');
    const isSignup=mode==='signup',isReset=mode==='reset';
    title.textContent=isReset?'Восстановление пароля':isSignup?'Создать аккаунт':'С возвращением!';
    description.textContent=isReset?'Отправим ссылку для создания нового пароля.':isSignup?'Зарегистрируйся, чтобы сохранять прогресс.':'Войди, чтобы продолжить занятия на любом устройстве.';
    submit.textContent=isReset?'Отправить ссылку':isSignup?'Зарегистрироваться':'Войти';
    const nameGroup=document.getElementById('account-name-group');if(nameGroup)nameGroup.hidden=!isSignup;
    document.getElementById('account-password-group').hidden=isReset;
    password.required=!isReset;password.autocomplete=isSignup?'new-password':'current-password';
    resetButton.hidden=mode!=='signin';
    document.getElementById('account-switch-label').textContent=mode==='signin'?'Ещё нет аккаунта?':'Уже есть аккаунт?';
    switchButton.textContent=mode==='signin'?'Создать аккаунт':'Войти';
  }
  client.auth.onAuthStateChange((event,session)=>{
    if(event==='PASSWORD_RECOVERY'){
      recoveryMode=true;gate.hidden=false;document.body.classList.add('account-locked');document.body.classList.remove('account-checking');document.getElementById('account-bar').hidden=true;document.getElementById('account-form').hidden=true;document.getElementById('account-recovery').hidden=false;show('Придумайте новый пароль.');
    }else if(started&&(!session?.user||session.user.id!==window.KokoraAccountId))setTimeout(()=>location.reload(),0);
  });
  function show(text){(recoveryMode?document.getElementById('account-recovery-message'):message).textContent=text;}
  if(linkError)show(linkError==='otp_expired'?'Ссылка уже использована или истекла. Нажмите «Забыли пароль?», чтобы получить новую.':'Не удалось открыть ссылку. Попробуйте получить новую или войдите снова.');
  function friendly(error){const text=String(error?.message||'');if(/invalid login credentials/i.test(text))return 'Неверная почта или пароль.';if(/email not confirmed/i.test(text))return 'Сначала подтвердите почту по ссылке из письма.';if(error?.status===429||/rate limit|too many requests|security purposes.*after/i.test(text)){const seconds=text.match(/after\s+(\d+)\s+seconds?/i)?.[1];return seconds?`Подожди ${seconds} сек. и попробуй ещё раз.`:'Слишком много попыток. Подожди немного и попробуй снова.';}if(/email address.*(not authorized|not allowed)|only.*(team|organization)/i.test(text))return 'Тестовая почта пока отправляет письма только владельцам проекта Supabase.';return 'Не получилось выполнить действие. Проверьте данные и подключение.';}
  async function perform(action){if(busy)return;busy=true;submit.disabled=true;switchButton.disabled=true;resetButton.disabled=true;try{show('Подождите…');await action();}catch(error){show(friendly(error));}finally{busy=false;submit.disabled=false;switchButton.disabled=false;resetButton.disabled=false;}}
  switchButton.addEventListener('click',()=>setMode(mode==='signin'?'signup':'signin'));
  resetButton.addEventListener('click',()=>setMode('reset'));
  document.getElementById('account-google').addEventListener('click',()=>perform(()=>account.signInGoogle()));
  fetch(url+'/auth/v1/settings',{headers:{apikey:publicKey}}).then(response=>response.ok?response.json():null).then(settings=>{if(settings?.external?.google===true){document.getElementById('account-google').disabled=false;document.getElementById('account-google-note').hidden=true;}}).catch(()=>{});
  form.addEventListener('submit',event=>{
    event.preventDefault();
    if(!email.value.trim()){show('Укажите почту.');email.focus();return;}
    if(!email.validity.valid){show('Проверьте адрес почты.');email.focus();return;}
    if(mode!=='reset'&&!password.value){show(mode==='signup'?'Придумайте пароль.':'Введите пароль.');password.focus();return;}
    if(mode==='signup'&&password.value.length<6){show('Пароль должен содержать не меньше 6 символов.');password.focus();return;}
    perform(async()=>{
      if(mode==='reset'){await account.resetPassword(email.value);show('Если аккаунт с этой почтой есть, письмо со ссылкой отправлено. Проверь почту и папку «Спам».');return;}
      if(mode==='signup'){const result=await account.signUp(email.value,password.value,document.getElementById('account-name')?.value||'');password.value='';if(result.session){location.reload();return;}show('Если почта ещё не зарегистрирована, проверьте письмо и подтвердите регистрацию. Если уже входили через Google, войдите через Google.');return;}
      await account.signIn(email.value,password.value);password.value='';location.reload();
    });
  });
  document.getElementById('account-recovery').addEventListener('submit',event=>{event.preventDefault();perform(async()=>{const field=document.getElementById('account-new-password');await account.updatePassword(field.value);field.value='';await account.signOut();recoveryMode=false;document.getElementById('account-recovery').hidden=true;document.getElementById('account-form').hidden=false;show('Пароль изменён. Теперь войдите.');});});
  document.getElementById('account-logout').addEventListener('click',()=>perform(async()=>{await account.signOut();location.reload();}));
  async function loadScripts(){for(const placeholder of document.querySelectorAll('script[data-account-src]'))await new Promise((resolve,reject)=>{const script=document.createElement('script');script.src=placeholder.dataset.accountSrc;script.onload=resolve;script.onerror=reject;document.body.append(script);});}
  let activeBridge=null;
  function report(state){status.textContent=({offline:'Не удалось синхронизировать прогресс. Локальные изменения сохранены; проверь подключение и попробуй снова.',conflict:'Прогресс изменён на другом устройстве. Локальные данные сохранены; синхронизация остановлена.','local-conflict':'Прогресс изменён в другой вкладке. Последние действия сохранены в резервной копии на этом устройстве; синхронизация остановлена.'})[state]||'';const button=document.getElementById('account-recover-cloud');if(button)button.hidden=!['conflict','local-conflict'].includes(state);}
  document.getElementById('account-recover-cloud')?.addEventListener('click',async()=>{
    if(!activeBridge||!window.confirm('Взять прогресс из аккаунта? Несинхронизированный прогресс этого браузера будет сохранён здесь как резервная копия, но не добавится к облачному.'))return;
    const button=document.getElementById('account-recover-cloud');button.disabled=true;document.body.classList.add('account-recovering');status.textContent='Восстановление…';
    try{await activeBridge.recoverFromCloud();location.reload();}catch(error){status.textContent='Не удалось восстановить прогресс. Локальные данные не удалены. Проверь подключение и попробуй снова.';button.disabled=false;document.body.classList.remove('account-recovering');}
  });
  async function start(){
    try{
      if(linkError){document.body.classList.remove('account-checking');return;}
      const {data,error}=await client.auth.getUser();
      if(recoveryMode)return;
      if(error||!data.user){document.body.classList.remove('account-checking');if(error&&error.name!=='AuthSessionMissingError')show('Не удалось проверить вход. Проверьте подключение.');return;}
      const id=data.user.id;
      document.getElementById('account-identity').textContent=data.user.email||'Аккаунт';
      if(window.KokoraProfileUI)window.KokoraProfileUI.init(client,data.user);
      const remote=window.KokoraCloudProgress.createCloudProgress(client);
      const engine=window.KokoraSync.createSyncEngine({store:localStorage,remote,userId:id});
      const bridge=await window.KokoraAccountStorage.createAccountStorage(engine,{onStatus:report});
      activeBridge=bridge;window.KokoraActiveStorage=bridge;window.KokoraAccountId=id;
      const legacy=bridge.get('legacy');if(legacy)document.documentElement.dataset.theme=JSON.parse(legacy).theme==='dark'?'dark':'light';
      await loadScripts();if(recoveryMode)return;started=true;gate.hidden=true;document.body.classList.remove('account-locked');document.body.classList.remove('account-checking');document.getElementById('account-bar').hidden=false;bridge.retry();
      window.addEventListener('online',()=>bridge.retry());
    }catch(error){document.body.classList.remove('account-checking');show('Не удалось загрузить прогресс. Проверьте подключение и обновите страницу.');}
  }
  start();
})();
