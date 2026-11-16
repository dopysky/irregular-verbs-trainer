/* An account-scoped sync queue. It does not run or change app data until wired in. */
(function(root){
  'use strict';
  const sections=new Set(['grammar','legacy']);
  const absent=Symbol('absent');
  const object=value=>value!==null&&typeof value==='object'&&!Array.isArray(value);
  function equal(a,b){
    if(a===b)return true;
    if(Array.isArray(a)&&Array.isArray(b))return a.length===b.length&&a.every((value,i)=>equal(value,b[i]));
    if(object(a)&&object(b)){const keys=Object.keys(a);return keys.length===Object.keys(b).length&&keys.every(key=>Object.prototype.hasOwnProperty.call(b,key)&&equal(a[key],b[key]));}
    return false;
  }
  function merge(base,local,current,path=[]){
    if(equal(local,base))return current;
    if(equal(current,base))return local;
    if(path.length===2&&path[0]==='activity'&&(base===absent||Number.isSafeInteger(base))&&Number.isSafeInteger(local)&&Number.isSafeInteger(current)){
      const start=base===absent?0:base;
      if(start>=0&&local>=start&&current>=start)return start+(local-start)+(current-start);
    }
    if(path.length===2&&path[0]==='v'&&base===absent&&object(local)&&equal(local,current)&&local.level===0&&local.streak===0&&local.wrong===0&&local.attempts===0&&local.due===0&&local.today===0&&object(local.skill)&&Object.keys(local.skill).length===0)return local;
    if(path.length===2&&['results','reviewV1','v','customStats','vocabularyReviewV1'].includes(path[0]))throw Object.assign(new Error('conflict at '+path.join('.')),{code:'CONFLICT'});
    if(equal(local,current)&&!object(local))return local;
    if(object(local)&&object(current)&&(object(base)||base===null||base===absent)){
      const old=object(base)?base:{},out={};
      for(const key of new Set([...Object.keys(old),...Object.keys(local),...Object.keys(current)])){
        const value=merge(Object.prototype.hasOwnProperty.call(old,key)?old[key]:absent,Object.prototype.hasOwnProperty.call(local,key)?local[key]:absent,Object.prototype.hasOwnProperty.call(current,key)?current[key]:absent,path.concat(key));
        if(value!==absent)out[key]=value;
      }
      return out;
    }
    if(path.length===1&&['selectedTopic','selectedGroup','selectedFolder'].includes(path[0]))return local;
    throw Object.assign(new Error('conflict at '+path.join('.')),{code:'CONFLICT'});
  }
  function createSyncEngine({store,remote,userId}){
    if(typeof userId!=='string'||!userId)throw new Error('user required');
    const inflight=new Map(),known=new Map(),views=new Map();
    function key(section){if(!sections.has(section))throw new Error('invalid section');return 'kokora-sync-v1:'+encodeURIComponent(userId)+':'+section;}
    function readLocal(section){const raw=store.getItem(key(section));if(raw===null)return null;const item=JSON.parse(raw);if(!item||!Number.isSafeInteger(item.revision)||item.revision<0||typeof item.dirty!=='boolean')throw new Error('invalid local queue');return item;}
    function writeLocal(section,item){store.setItem(key(section),JSON.stringify(item));}
    function remember(section,data){known.set(section,store.getItem(key(section)));views.set(section,data===null?null:JSON.parse(JSON.stringify(data)));return data;}
    function validate(data){if(!data||typeof data!=='object'||Array.isArray(data)||!Object.keys(data).length)throw new Error('empty progress');}
    async function load(section){
      const local=readLocal(section);if(local?.dirty)return remember(section,local.data);
      let current;
      try{current=await remote.read(userId,section);}catch(error){const latest=readLocal(section);if(latest)return remember(section,latest.data);throw error;}
      const latest=readLocal(section);
      if(latest&&(latest.dirty||!local||latest.revision!==local.revision))return remember(section,latest.data);
      if(current){validate(current.data);if(!Number.isSafeInteger(current.revision)||current.revision<1)throw new Error('invalid remote revision');if(local&&local.revision>current.revision)return remember(section,local.data);writeLocal(section,{data:current.data,revision:current.revision,dirty:false});return remember(section,current.data);}
      if(local)return remember(section,local.data);
      writeLocal(section,{data:null,revision:0,dirty:false});return remember(section,null);
    }
    function set(section,data){validate(data);if(!known.has(section))throw new Error('load account before writing');const item=readLocal(section);if(!item)throw new Error('load account before writing');const combined=merge(views.get(section),data,item.data);validate(combined);const next={...item,data:combined,dirty:true};if(!item.dirty)next.base=item.data;writeLocal(section,next);remember(section,data);}
    async function flush(section){
      if(inflight.has(section))return inflight.get(section);
      const task=(async()=>{
        for(let attempt=0;attempt<3;attempt++){
          const snapshot=readLocal(section);if(!snapshot||!snapshot.dirty)return;
          let saved;
          try{saved=await remote.write(userId,section,snapshot.data,snapshot.revision);}
          catch(error){
            if(error?.code!=='CONFLICT')throw error;
            const current=await remote.read(userId,section),latest=readLocal(section);
            if(current&&latest&&latest.revision===current.revision&&latest.revision>snapshot.revision)return;
            const hasBase=latest&&Object.prototype.hasOwnProperty.call(latest,'base');
            if(!current||!latest||(!hasBase&&latest.revision!==0))throw error;
            const combined=merge(hasBase?latest.base:null,latest.data,current.data);
            validate(combined);
            writeLocal(section,{data:combined,revision:current.revision,dirty:true,base:current.data});
            continue;
          }
          if(!saved||saved.revision!==snapshot.revision+1)throw new Error('invalid acknowledgement');
          const latest=readLocal(section);
          if(!latest)throw new Error('local progress changed during sync');
          if(latest.revision>=saved.revision)return;
          if(latest.revision!==snapshot.revision)throw new Error('local progress changed during sync');
          writeLocal(section,{...latest,revision:saved.revision,dirty:!equal(latest.data,snapshot.data),base:snapshot.data});
          known.set(section,store.getItem(key(section)));return;
        }
        throw Object.assign(new Error('progress changed during sync'),{code:'CONFLICT'});
      })();
      inflight.set(section,task);try{return await task;}finally{inflight.delete(section);}
    }
    return {load,set,flush,pending:section=>Boolean(readLocal(section)?.dirty)};
  }
  if(typeof module!=='undefined'&&module.exports)module.exports={createSyncEngine};else root.KokoraSync={createSyncEngine};
})(typeof window==='undefined'?globalThis:window);
