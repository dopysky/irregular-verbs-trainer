const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const app=fs.readFileSync(__dirname+'/app.js','utf8');
function source(name){const start=app.indexOf('function '+name+'('),end=app.indexOf('\nfunction ',start+1);assert.ok(start>=0&&end>start,`Missing ${name}`);return app.slice(start,end)}
const c={};vm.createContext(c);vm.runInContext(source('wordStudyStatus')+'\n'+source('planWordBatch'),c);
const words=Array.from({length:23},(_,i)=>({id:'w'+i}));
const stats={};const batch=()=>Array.from(c.planWordBatch(words,stats,0)).map(x=>x.id);
assert.deepEqual(batch(),words.slice(0,10).map(x=>x.id),'first ten only');
stats.w0={level:1};assert.equal(c.wordStudyStatus(stats.w0),'Знакомое');
stats.w0={level:2};assert.equal(c.wordStudyStatus(stats.w0),'Закреплено');
stats.w0={level:3};assert.equal(c.wordStudyStatus(stats.w0),'Выучено');
assert.equal(c.wordStudyStatus({}),'Новое');
for(let i=0;i<10;i++)stats['w'+i]={level:3,attempts:3,nextReviewStep:100};
assert.deepEqual(batch(),words.slice(10,20).map(x=>x.id),'next ten unlock only after learned');
stats.w0.nextReviewStep=0;assert.ok(batch().includes('w0'),'due learned word is reviewed');
assert.ok(batch().length<=10,'reviews stay within ten');
assert.equal(stats.w0.level,3,'planning does not mutate old progress');
const s={state:{customFolders:{f:{name:'Тест'}},customStats:{}},selectedFolder:'f',selectedGroup:1,session:null,verbs:[],Number,Set,Map,Math,
  visibleFolderWords:()=>words,folderPercent:()=>0,save(){},show(){},renderQFolder(){s.session.answered=false},renderDictionary(){},finishSession(){s.finished=true},presentLegacyAnswer(){},nextFolderQ(){},window:{ReviewSchedule:{select(){return[]}}}};
vm.createContext(s);
for(const name of ['customStat','wordStudyStatus','planWordBatch','folderModes','makeFolderItem','encodeStudySession','decodeStudySession','saveWordSession','startFolderTraining'])vm.runInContext(source(name),s);
s.startFolderTraining(false,'f');
assert.equal(s.session.initialIds.length,10);
assert.equal(s.session.items[0].mode,'studyWord');
assert.equal(s.session.items[1].v.id,s.session.items[0].v.id,'each introduction is followed by practice');
assert.ok(new Set(s.session.items.filter(q=>q.mode!=='studyWord').map(q=>q.mode)).size>=4,'exercise types alternate');
assert.ok(s.state.wordStudyV1.sessions.f,'the current batch survives exit');
s.session.index=3;s.session.answered=false;s.saveWordSession();s.session=null;s.startFolderTraining(false,'f');
assert.equal(s.session.index,3,'continuing restores the saved place');
const saved=JSON.stringify(s.state);assert.ok(saved.includes('wordStudyV1'));
assert.equal(words.length,23,'reference list remains intact');
for(const [wordStudy,nextMode,expected] of [[true,'studyWord',true],[true,'customEnToRu',true],[false,'enToRu',true]]){
  let playSpeech;
  const session={wordStudy,index:0,items:[{}, {mode:nextMode}]};
  const ctx={session,window:{TrainingUI:{showCorrect(){}},PageState:{checkpoint(){}}},document:{querySelector:()=>null,querySelectorAll:()=>[],getElementById:()=>({})},setPracticeActions(){},stopPronunciation(){},playFeedbackSound(){},setTimeout(fn){fn()},advanceTimer:null};
  vm.createContext(ctx);vm.runInContext(source('presentLegacyAnswer'),ctx);
  ctx.presentLegacyAnswer({},true,value=>{playSpeech=value});
  assert.equal(playSpeech,expected,'the next question should permit safe automatic pronunciation');
}
for(const [mode,expected] of [['customEnToRu','cat'],['customListen','cat'],['customRuToEn',null],['customRuToEnWrite',null]]){
  let spoken=null;const ctx={soundOn:true,autoSpeakCurrent:text=>{spoken=text}};
  vm.createContext(ctx);vm.runInContext(source('autoSpeakForQuestion'),ctx);ctx.autoSpeakForQuestion({mode,v:{word:'cat'}});
  assert.equal(spoken,expected,`${mode} should only speak when the answer is not revealed`);
}
console.log('Learning batches, statuses, review and old progress checks passed.');
