(function(root){
  'use strict';
  async function createAccountStorage(engine,{schedule=fn=>setTimeout(fn,800),onStatus=()=>{}}={}){
    const sections=['legacy','grammar'],data={};
    for(const section of sections)data[section]=await engine.load(section);
    const running=new Set(),errors=new Map();
    function report(){
      if([...errors.values()].includes('local-conflict'))onStatus('local-conflict');
      else if([...errors.values()].includes('conflict'))onStatus('conflict');
      else if(errors.size)onStatus('offline');
      else if(sections.some(section=>engine.pending?.(section)))onStatus('pending');
      else onStatus('saved');
    }
    async function sync(section){
      if(running.has(section))return;
      running.add(section);
      try {
        do {await engine.flush(section);} while(engine.pending?.(section));
        errors.delete(section);
      } catch(error) {errors.set(section,error?.code==='CONFLICT'?'conflict':'offline');}
      finally {running.delete(section);report();}
    }
    function queue(section){report();schedule(()=>sync(section));}
    return {
      get(section){if(!sections.includes(section))throw new Error('invalid section');return data[section]===null?null:JSON.stringify(data[section]);},
      set(section,raw){if(!sections.includes(section))throw new Error('invalid section');const value=JSON.parse(raw);try{engine.set(section,value);}catch(error){if(error?.code==='CONFLICT'){errors.set(section,'local-conflict');report();}throw error;}data[section]=value;queue(section);},
      retry(){for(const section of sections)if(engine.pending?.(section))queue(section);report();}
    };
  }
  if(typeof module!=='undefined'&&module.exports)module.exports={createAccountStorage};else root.KokoraAccountStorage={createAccountStorage};
})(typeof window==='undefined'?globalThis:window);
