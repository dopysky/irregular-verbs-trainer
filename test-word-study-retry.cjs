const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
for(const file of ['app.js','app-account-test.js']){
 const source=fs.readFileSync(file,'utf8'),start=source.indexOf('function checkFolderCurrent('),end=source.indexOf('\nfunction ',start+1);assert(start>=0&&end>start);
 const word={id:'word-1',word:'apple',translation:'яблоко'},q={v:word,mode:'customRuToEnWrite',custom:true},stats={'word-1':{level:2,wrong:4,attempts:9},'old-word':{level:3,wrong:2}};
 const session={items:[q],index:0,answered:false,score:0,wordStudy:true,folderId:'f',completedIds:new Set()};let saved=0,presented=0;
 const c={session,state:{wordStudyV1:{step:5,sessions:{}}},window:{},document:{querySelector:()=>null},currentAnswers:()=>({folder:'wrong'}),normalize:x=>String(x||'').toLowerCase(),legacyInputDispose:null,setPracticeActions(){},customStat:id=>stats[id],logActivity(){},save(){},saveWordSession(){saved++},makeFolderItem:(v,_f,mode)=>({v,mode,custom:true}),presentLegacyAnswer(){presented++},nextFolderQ(){},Math,Number};
 vm.createContext(c);vm.runInContext(source.slice(start,end),c);c.checkFolderCurrent();assert.equal(session.items.length,2,file+' repeats error');assert.equal(session.items[1].v.id,'word-1');assert.equal(stats['word-1'].wrong,5);assert.equal(stats['word-1'].level,0);assert.deepEqual(stats['old-word'],{level:3,wrong:2});assert.equal(c.state.wordStudyV1.step,6);assert.equal(saved,1);assert.equal(presented,1);
}
console.log('Failed word returns to the queue; unrelated progress remains intact');
