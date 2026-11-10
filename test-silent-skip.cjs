const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const app=fs.readFileSync(__dirname+'/app.js','utf8');
function source(name){const start=app.indexOf('function '+name+'('),end=app.indexOf('\nfunction ',start+1);assert(start>=0&&end>start);return app.slice(start,end);}
for(const [name,folder] of [['checkCurrent',false],['checkFolderCurrent',true]]){
  for(const skip of [true,false]){
    let silent;
    const item={v:{id:'x',word:'cat',translation:'кот'},mode:folder?'customRuToEnWrite':'write',custom:folder};
    const session={items:[item],index:0,answered:false,score:0,completedIds:new Set(),folderId:'f'};
    const c={session,window:{ReviewSchedule:{record:()=>({})}},document:{querySelector:()=>null,getElementById:()=>({})},currentAnswers:()=>({v2:'no',v3:'no',folder:'no'}),accepted:()=>false,normalize:x=>x,legacyInputDispose:null,setPracticeActions(){},markAttempt(){},makeItem:()=>item,makeFolderItem:()=>item,customStat:()=>({}),vocabularyReview:()=>({}),logActivity(){},save(){},presentLegacyAnswer(_q,_ok,_next,s){silent=s},nextQ(){},nextFolderQ(){},Date,Math};
    vm.createContext(c);vm.runInContext(source(name),c);c[name](skip);assert.equal(!!silent,skip,`${name} skip=${skip}`);
  }
}
const topics=fs.readFileSync(__dirname+'/topics.js','utf8');assert.match(topics,/if\s*\(!skipped\)\s*window\.TrainingSound\?\.result\(ok\)/);
const card=source('showAnswerCard');assert.match(card,/if\s*\(!silent\)\s*autoSpeakCurrent\(text\)/);
console.log('Skip is silent in grammar, verb and vocabulary practice');
