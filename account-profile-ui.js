(function(root){
  'use strict';
  function init(client,user){
    const profile=root.KokoraProfile.createProfile(client,user.id), $=id=>document.getElementById(id);
    const panel=$('account-profile'),message=$('profile-message'),name=$('profile-name'),photo=$('profile-photo'),avatar=$('profile-avatar'),remove=$('profile-remove-photo'),retry=$('profile-retry');
    const metadata=user.user_metadata||{},fallbackName=metadata.display_name||metadata.full_name||user.email?.split('@')[0]||'Ученик';
    let ready=false,desiredAvatar=null,version=0,savedVersion=0,saving=false,timer=null,photoVersion=0;
    function googlePhoto(){try{const u=new URL(metadata.avatar_url||metadata.picture||'');return u.protocol==='https:'?u.href:null;}catch{return null;}}
    function render(displayName,image){
      const label=displayName.trim()||fallbackName;$('account-identity').textContent=label;avatar.textContent='';
      const src=image||googlePhoto();if(src){const img=document.createElement('img');img.alt='';img.onerror=()=>{avatar.textContent=label.trim().charAt(0).toUpperCase()||'У';};img.src=src;avatar.append(img);}else avatar.textContent=label.trim().charAt(0).toUpperCase()||'У';
      remove.hidden=!image;
    }
    $('profile-email').textContent=user.email||'';render(fallbackName,null);
    name.disabled=photo.disabled=true;
    profile.load().then(data=>{desiredAvatar=data?.avatar_data||null;name.value=data?.display_name||fallbackName;render(name.value,desiredAvatar);ready=true;name.disabled=photo.disabled=false;}).catch(()=>{message.textContent='Не удалось загрузить профиль. Обнови страницу.';});
    async function flush(){
      clearTimeout(timer);timer=null;if(!ready||saving||version===savedVersion)return;
      saving=true;retry.hidden=true;const current=version,values={name:name.value.trim(),avatar:desiredAvatar};message.textContent='Сохранение…';
      try{await profile.save(values);savedVersion=current;message.textContent='';}catch{message.textContent='Не удалось сохранить профиль.';retry.hidden=false;saving=false;return;}
      saving=false;if(version!==savedVersion)flush();
    }
    function changed(immediate){if(!ready)return;version++;render(name.value,desiredAvatar);clearTimeout(timer);if(immediate)flush();else timer=setTimeout(flush,700);}
    retry.addEventListener('click',()=>flush());
    name.addEventListener('input',()=>changed(false));name.addEventListener('blur',()=>flush());
    $('profile-form').addEventListener('submit',event=>{event.preventDefault();flush();});
    function convert(file){return new Promise((resolve,reject)=>{if(!file.type.startsWith('image/')||file.size>10000000){reject(Error('Выбери изображение до 10 МБ.'));return;}const reader=new FileReader();reader.onerror=()=>reject(Error('Не удалось прочитать фото.'));reader.onload=()=>{const img=new Image();img.onerror=()=>reject(Error('Не удалось открыть фото.'));img.onload=()=>{try{const side=Math.min(img.width,img.height),canvas=document.createElement('canvas');canvas.width=canvas.height=256;canvas.getContext('2d').drawImage(img,(img.width-side)/2,(img.height-side)/2,side,side,0,0,256,256);const result=canvas.toDataURL('image/jpeg',.75);if(result.length>100000)throw Error();resolve(result);}catch{reject(Error('Не удалось подготовить фото.'));}};img.src=reader.result;};reader.readAsDataURL(file);});}
    photo.addEventListener('change',async()=>{const file=photo.files[0],request=++photoVersion;if(!file||!ready)return;message.textContent='Подготовка фото…';try{const image=await convert(file);if(request!==photoVersion)return;desiredAvatar=image;photo.value='';changed(true);}catch(error){if(request===photoVersion){photo.value='';message.textContent=error.message||'Не удалось загрузить фото.';}}});
    remove.addEventListener('click',()=>{if(!ready)return;photoVersion++;photo.value='';desiredAvatar=null;changed(true);});
    document.addEventListener('click',event=>{if(panel.open&&!panel.contains(event.target)){panel.open=false;flush();}});
    document.addEventListener('keydown',event=>{if(event.key==='Escape'&&panel.open){panel.open=false;flush();}});
    root.addEventListener?.('online',()=>flush());
    $('profile-delete').addEventListener('click',async()=>{if(window.prompt('Аккаунт, профиль и облачный прогресс будут удалены без возможности восстановления. Локальные копии на других устройствах останутся. Чтобы подтвердить, введи УДАЛИТЬ:')!=='УДАЛИТЬ')return;document.body.classList.add('account-recovering');message.textContent='Удаление аккаунта…';try{await profile.deleteAccount();for(let i=localStorage.length-1;i>=0;i--){const key=localStorage.key(i);if(key.startsWith('kokora-sync-v1:'+encodeURIComponent(user.id)+':')||key==='english-current-page-v1:'+encodeURIComponent(user.id))localStorage.removeItem(key);}try{await client.auth.signOut();}catch{}location.replace('./?guest=1');}catch{document.body.classList.remove('account-recovering');message.textContent='Не удалось подтвердить удаление. Проверь подключение и обнови страницу.';}});
  }
  root.KokoraProfileUI={init};
})(window);
