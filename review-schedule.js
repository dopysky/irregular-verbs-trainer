(function(root){
  'use strict';
  const day=86400000, intervals=[1,3,7,14,30,60];
  function record(old,{now=Date.now(),ok,hint=false}){
    const prior=old && typeof old==='object'?old:null;
    const state={...(prior||{}),attempts:(Number(prior?.attempts)||0)+1,lastAt:now,error:!ok,hint:!!hint};
    if(!ok){state.stage=0;state.due=now+600000;state.recovering=true;return state;}
    if(prior && Number.isFinite(prior.due) && prior.due>now){state.error=!!prior.error;return state;}
    if(hint){state.stage=Number(prior?.stage)||0;state.due=now+(prior?.recovering?600000:day);return state;}
    const stage=!prior||prior.recovering?0:Math.min((Number(prior.stage)||0)+1,intervals.length-1);
    state.stage=stage;state.due=now+intervals[stage]*day;state.recovering=false;return state;
  }
  function migrate(results,now=Date.now()){
    const out={};for(const [id,r] of Object.entries(results||{})){
      if(!r||typeof r!=='object'||(!(Number(r.attempts)>0)&&r.error!==true))continue;
      const last=Date.parse(r.updatedAt),due=r.error?now:Number.isFinite(last)?last+day:now;
      out[id]={attempts:Number(r.attempts)||1,lastAt:Number.isFinite(last)?last:null,error:!!r.error,stage:0,due,recovering:!!r.error};
    }return out;
  }
  function due(items,states,now=Date.now()){
    return items.filter(q=>Number.isFinite(states[q.id]?.due)&&states[q.id].due<=now).sort((a,b)=>states[a.id].due-states[b.id].due);
  }
  function select(items,states,now=Date.now(),review=false){
    const dueItems=due(items,states,now);if(review)return dueItems.slice(0,18);
    const shuffle=a=>a.sort(()=>Math.random()-.5);
    const fresh=shuffle(items.filter(q=>!states[q.id])),early=shuffle(items.filter(q=>states[q.id]?.due>now));
    const chosen=[],used=new Set();
    function take(pool,limit){
      for(let n=0;n<limit&&chosen.length<18;n++){
        const available=pool.filter(q=>!used.has(q.id));if(!available.length)break;
        const buttons=chosen.filter(q=>q.mode==='choice'||/^(custom)?(RuToEn|EnToRu|Listen)$/.test(q.mode)).length;
        const wantButton=buttons<10 && chosen.length-buttons>=8;
        const wantWritten=buttons>=10;
        const recent=new Set(chosen.slice(-3).map(q=>q.source?.id));
        const spaced=available.filter(q=>!recent.has(q.source?.id));
        const candidates=spaced.length?spaced:available;
        const isButton=q=>q.mode==='choice'||/^(custom)?(RuToEn|EnToRu|Listen)$/.test(q.mode);
        const q=candidates.find(q=>(wantButton&&isButton(q))||(wantWritten&&!isButton(q)))||candidates[0];
        chosen.push(q);used.add(q.id);
      }
    }
    take(dueItems,8);take(fresh,6);take(early,4);take(dueItems,18);take(fresh,18);take(early,18);
    return chosen;
  }
  const api={record,migrate,due,select};if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.ReviewSchedule=api;
})(typeof window!=='undefined'?window:globalThis);
