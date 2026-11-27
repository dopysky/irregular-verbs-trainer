const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const source=fs.readFileSync(__dirname+'/app.js','utf8');
function fn(name){const a=source.indexOf('function '+name+'('),b=source.indexOf('\nfunction ',a+1);assert(a>=0&&b>a);return source.slice(a,b)}
const verbs=[{n:7,inf:'begin',ru:'начинать',ipa:'x'}],groups=[{id:'meaning-action',name:'Действия',words:'begin'}];
const window={VerbSemanticGroups:{groups},VocabularyImport:{visibleWords:()=>[]},VerbVocabulary:{wordId:n=>'verb_vocabulary_'+n,resolve:(r,vs)=>{let v=vs.find(x=>x.n===r.verbNumber);return {...r,word:v.inf,translation:v.ru}}}};
let state={customStats:{verb_vocabulary_7:{level:2}},v:{7:{level:1}}};
const c={window,state,verbs};vm.createContext(c);vm.runInContext(fn('semanticGroup')+'\n'+fn('visibleFolderWords')+'\n'+fn('customStat')+'\n'+fn('folderPercent'),c);
assert.equal(c.visibleFolderWords('meaning-action')[0].word,'begin');assert.equal(c.folderPercent('meaning-action'),67);
state.customStats.verb_vocabulary_7.level=3;assert.equal(state.v[7].level,1,'dictionary progress must not change general training');
assert.match(source,/startMixed\(groupPercent\('mixed'\)>=100\?'groupRepeat':'new','mixed'\)/);
console.log('Semantic groups use dictionary progress and main training uses all verbs.');
