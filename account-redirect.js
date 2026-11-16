(function(){
  'use strict';
  if(!location.pathname.endsWith('/')&&!location.pathname.endsWith('/index.html'))return;
  try{
    const session=JSON.parse(localStorage.getItem('sb-eyjygwzioumfpfpkuvav-auth-token')||'null');
    if(session?.access_token&&session?.refresh_token&&Number(session.expires_at)>Date.now()/1000+5)location.replace('./account.html');
  }catch{}
})();
