/* Ссылки на существующие глаголы в смысловых коллекциях словаря.
   Формы остаются в verbs; здесь нет второй копии учебного слова.
   Категории — редакционное распределение по основному значению. */
(function(root){
  'use strict';
  const Import=typeof module!=='undefined'&&module.exports?require('./vocabulary-import'):root.VocabularyImport;
  const groups={
    'Движение и положение':'bring come creep drive fall flee fly go kneel lay lead lean leap leave lie overtake put ride rise run set sit slide stand swim swing take',
    'Общение и готовые фразы':'forbid forgive let meet ring say show speak swear tell uphold',
    'Учёба и язык':'know learn mean mistake prove read spell teach understand write rewrite retake misunderstand',
    'Чувства и характер':'dream feel forget hear see smell think weep upset foresee withstand overcome',
    'Дом и вещи':'hang keep light shut sweep spill spread stick tear wind wring',
    'Еда и отдых':'bite drink eat feed draw sing',
    'Деньги и покупки':'bet buy cost lend pay sell spend steal withdraw',
    'Природа и изменения':'arise become blow burn burst freeze grow shine sink',
    'Тело и самочувствие':'awake bear bleed hurt sleep wake undergo',
    'Работа и профессии':'broadcast build deal dig forecast undertake',
    'Семья и люди':'breed',
    'Одежда':'wear'
  };
  const categories={};for(const [category,words]of Object.entries(groups))for(const word of words.split(' '))categories[word]=category;
  const categoryFor=verb=>categories[verb.inf]||'Действия';
  const wordId=number=>'verb_vocabulary_'+number;
  function apply(state,verbs){
    const folders=state.customFolders||(state.customFolders={}),stats=state.customStats||(state.customStats={});
    const migration=state.verbVocabulary||(state.verbVocabulary={version:1,entries:{}});
    for(const verb of verbs){
      if(migration.entries[verb.n])continue;
      const name=categoryFor(verb);
      let folderId=Object.keys(folders).find(id=>folders[id].managed&&folders[id].sourceBlock===name);
      if(!folderId){folderId=Import.blockId(name);if(folders[folderId])folderId+='_verbs';folders[folderId]={name,sourceBlock:name,managed:true,words:[]};}
      const id=wordId(verb.n);
      if(!folders[folderId].words.some(w=>w.id===id))folders[folderId].words.push({id,verbNumber:verb.n,preset:true});
      // Прежний прогресс был смешанным. Один раз сохраняем его как начальный,
      // затем словарный навык и формы меняются независимо.
      if(!stats[id])stats[id]=JSON.parse(JSON.stringify(state.v?.[verb.n]||{level:0,wrong:0}));
      migration.entries[verb.n]={folderId,targetId:id,seededFromLegacy:!!state.v?.[verb.n]};
    }
  }
  function resolve(record,verbs,pronunciation){
    if(!record.verbNumber)return record;
    const verb=verbs.find(v=>v.n===record.verbNumber);if(!verb)return null;
    return {...record,word:verb.inf,translation:verb.ru,ipa:pronunciation?.get(verb.inf)||verb.ipa||''};
  }
  function defaultFolder(state){return Object.keys(state.customFolders||{}).find(id=>state.customFolders[id].sourceBlock==='Действия')||state.myWordsFolder||'my';}
  const api={apply,resolve,defaultFolder,categoryFor,wordId};
  if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.VerbVocabulary=api;
})(typeof window!=='undefined'?window:globalThis);
