(function(){
  'use strict';
  if(!location.pathname.endsWith('/')&&!location.pathname.endsWith('/index.html'))return;
  if(new URLSearchParams(location.search).has('guest'))return;
  try{
    const session=JSON.parse(localStorage.getItem('sb-eyjygwzioumfpfpkuvav-auth-token')||'null');
    if(session?.access_token&&session?.refresh_token)location.replace('./account.html');
  }catch{}
})();
