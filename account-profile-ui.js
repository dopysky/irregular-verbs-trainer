(function(root){
  'use strict';
  function init(client,user){
    const profile=root.KokoraProfile.createProfile(client,user.id), $=id=>document.getElementById(id);
    const message=$('profile-message'),name=$('profile-name'),photo=$('profile-photo'),avatar=$('profile-avatar');
    let savedAvatar=null,ready=false;
    const metadata=user.user_metadata||{},fallbackName=metadata.display_name||metadata.full_name||user.email?.split('@')[0]||'Ученик';
    function googlePhoto(){try{const u=new URL(metadata.avatar_url||metadata.picture||'');return u.protocol==='https:'?u.href:null;}catch{return null;}}
    function render(displayName,image){
      const label=displayName||fallbackName;$('account-identity').textContent=label;avatar.textContent='';
      const src=image||googlePhoto();if(src){const img=document.createElement('img');img.alt='';img.onerror=()=>{avatar.textContent=label.trim().charAt(0).toUpperCase()||'У';};img.src=src;avatar.append(img);}else avatar.textContent=label.trim().charAt(0).toUpperCase()||'У';
    }
    $('profile-email').textContent=user.email||'';render(fallbackName,null);
    profile.load().then(data=>{savedAvatar=data?.avatar_data||null;name.value=data?.display_name||fallbackName;render(name.value,savedAvatar);ready=true;}).catch(()=>{message.textContent='Не удалось загрузить профиль. Обнови страницу и попробуй снова.';});
    function convert(file){return new Promise((resolve,reject)=>{if(!file.type.startsWith('image/')||file.size>10000000){reject(Error('Выбери изображение размером до 10 МБ.'));return;}const reader=new FileReader();reader.onerror=()=>reject(Error('Не удалось прочитать фото.'));reader.onload=()=>{const img=new Image();img.onerror=()=>reject(Error('Не удалось открыть фото.'));img.onload=()=>{try{const side=Math.min(img.width,img.height),canvas=document.createElement('canvas');canvas.width=canvas.height=256;canvas.getContext('2d').drawImage(img,(img.width-side)/2,(img.height-side)/2,side,side,0,0,256,256);const result=canvas.toDataURL('image/jpeg',.75);if(result.length>100000)throw Error();resolve(result);}catch{reject(Error('Не удалось подготовить фото.'));}};img.src=reader.result;};reader.readAsDataURL(file);});}
    let removePhoto=false;$('profile-remove-photo').addEventListener('click',()=>{removePhoto=true;photo.value='';message.textContent='Фото будет удалено после сохранения профиля.';});
    photo.addEventListener('change',()=>{if(photo.files.length)removePhoto=false;});
    $('profile-form').addEventListener('submit',async event=>{event.preventDefault();if(!ready)return;const button=event.submitter;button.disabled=true;message.textContent='Сохранение…';try{const selected=photo.files[0],image=selected?await convert(selected):removePhoto?null:savedAvatar;await profile.save({name:name.value,avatar:image});savedAvatar=image;removePhoto=false;photo.value='';render(name.value.trim(),image);message.textContent='Профиль обновлён.';}catch(error){message.textContent=error?.message?.startsWith('Не удалось')||error?.message?.startsWith('Выбери')?error.message:'Не удалось сохранить профиль. Попробуй ещё раз.';}finally{button.disabled=false;}});
    $('profile-delete').addEventListener('click',async()=>{if(window.prompt('Аккаунт, профиль и облачный прогресс будут удалены без возможности восстановления. Локальные копии на других устройствах останутся. Чтобы подтвердить, введи УДАЛИТЬ:')!=='УДАЛИТЬ')return;document.body.classList.add('account-recovering');message.textContent='Удаление аккаунта…';try{await profile.deleteAccount();for(let i=localStorage.length-1;i>=0;i--){const key=localStorage.key(i);if(key.startsWith('kokora-sync-v1:'+encodeURIComponent(user.id)+':')||key==='english-current-page-v1:'+encodeURIComponent(user.id))localStorage.removeItem(key);}try{await client.auth.signOut();}catch{}location.replace('./?guest=1');}catch{document.body.classList.remove('account-recovering');message.textContent='Не удалось подтвердить удаление. Проверь подключение и обнови страницу.';}});
  }
  root.KokoraProfileUI={init};
})(window);
