/* Состояние открытой страницы хранится отдельно от учебного прогресса, в текущей вкладке. */
(function(root){
  'use strict';
  const KEY='english-current-page-v1',owners=new Map();let active=null,ready=false,restoring=false,scrollTimer=null,saved=null;
  const url=()=>root.location.pathname+root.location.search+root.location.hash;
  try{saved=JSON.parse(root.sessionStorage.getItem(KEY));}catch{}
  function checkpoint(){
    if(!ready||restoring||!owners.has(active))return;
    try{const data=owners.get(active).capture();root.sessionStorage.setItem(KEY,JSON.stringify({version:1,owner:active,url:url(),data,scroll:{x:root.scrollX||0,y:root.scrollY||0}}));}catch{}
  }
  function activate(owner){active=owner;if(ready&&!restoring)Promise.resolve().then(checkpoint);}
  function start(fallback){
    let restored=false;
    if(saved?.version===1&&saved.url===url()&&owners.has(saved.owner)){
      restoring=true;
      try{active=saved.owner;restored=owners.get(active).restore(saved.data)===true;}catch{restored=false;}
      restoring=false;
    }
    ready=true;
    if(!restored)fallback();
    else {const scroll=saved.scroll;root.requestAnimationFrame(()=>{root.scrollTo({left:Math.max(0,scroll?.x||0),top:Math.max(0,scroll?.y||0),behavior:'instant'});checkpoint();});}
    checkpoint();saved=null;
  }
  for(const event of ['pagehide','beforeunload'])root.addEventListener(event,checkpoint);
  for(const event of ['input','click','compositionend'])root.document.addEventListener(event,()=>Promise.resolve().then(checkpoint));
  root.addEventListener('scroll',()=>{if(!ready||restoring||scrollTimer!==null)return;scrollTimer=root.setTimeout(()=>{scrollTimer=null;checkpoint();},150);},{passive:true});
  root.PageState={register:(name,handler)=>owners.set(name,handler),activate,checkpoint,start};
})(window);
