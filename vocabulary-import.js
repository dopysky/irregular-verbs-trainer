/* Повторяемое подключение готового Vocabulary. Пользовательские поля не перезаписываются. */
(function(root){
  'use strict';
  const normalize=s=>String(s??'').normalize('NFKC').trim().toLowerCase().replace(/\s+/g,' ');
  const excludedNames=new Set('january february march april may june july august september october november december monday tuesday wednesday thursday friday saturday sunday halloween helloween'.split(' '));
  const excludedRussian=new Set('январь февраль март апрель май июнь июль август сентябрь октябрь ноябрь декабрь понедельник вторник среда четверг пятница суббота воскресенье хеллоуин хэллоуин'.split(' '));
  const excludedBlock='хеллоуин и страшные истории';
  const isExcludedFolder=folder=>normalize(folder.sourceBlock||folder.name)===excludedBlock;
  function isExcluded(word){
    if(normalize(word.block)===excludedBlock)return true;
    const english=normalize(word.word??word.english),russian=normalize(word.translation??word.russian);
    if(excludedRussian.has(russian))return true;
    // May как модальный глагол, march «марш» и august «почтенный» не являются месяцами.
    if(['may','march','august'].includes(english)&&russian)return false;
    return excludedNames.has(english);
  }
  const visibleWords=(state,folderId)=>(isExcludedFolder(state.customFolders?.[folderId]||{})?[]:state.customFolders?.[folderId]?.words||[]).filter(word=>!isExcluded(word)&&state.vocabularyImport?.entries[word.sourceCardId]?.status!=='excluded');
  const isPresetWord=(state,word)=>!!word?.preset||!!word?.verbNumber||!!word?.sourceCardId||Object.values(state.vocabularyImport?.entries||{}).some(e=>e.kind==='word'&&e.status!=='merged'&&e.targetId===word?.id);
  function canManageWord(state,id){const words=Object.values(state.customFolders||{}).flatMap(f=>f.words||[]).filter(w=>w.id===id);return words.length>0&&words.every(w=>!isPresetWord(state,w));}
  const canDeleteFolder=(state,id)=>id!=='irregular'&&id!==state.myWordsFolder&&!!state.customFolders?.[id]&&!state.customFolders[id].managed&&!state.customFolders[id].sourceBlock&&!(state.customFolders[id].words||[]).some(w=>isPresetWord(state,w));
  function blockId(name){let hash=2166136261;for(const c of name)hash=Math.imul(hash^c.charCodeAt(0),16777619);return 'vocabulary_'+(hash>>>0).toString(16);}
  function apply(state,verbs,cards){
    state.customFolders=state.customFolders||{};
    state.vocabularyImport=state.vocabularyImport||{version:'2026-11-06',entries:{}};
    const entries=state.vocabularyImport.entries||(state.vocabularyImport.entries={});
    const folders=state.customFolders;
    for(const card of cards){
      if(isExcluded(card)){
        if(entries[card.id]?.status!=='excluded')entries[card.id]={...entries[card.id],status:'excluded',reason:'Исключено Алиной: месяцы, дни недели и Halloween'};
        continue;
      }
      const key=normalize(card.english);
      // В готовом наборе sink и cost — существительные, а не значения глаголов.
      const noun=(key==='sink'&&card.russian==='раковина')||(key==='cost'&&card.russian==='стоимость');
      const verb=!noun&&verbs.find(v=>normalize(v.inf)===key.replace(/^to /,''));
      if(verb){verb.catalogTranslation=verb.catalogTranslation||verb.ru;verb.ru=card.russian;if(!entries[card.id])entries[card.id]={status:'merged',kind:'irregular',targetId:verb.n,folderId:'irregular',reason:'Уже есть в неправильных глаголах; выбран основной перевод готового набора'};continue;}
      if(entries[card.id])continue; // Сохраняем также удаления, перемещения и правки после импорта.
      let match;
      for(const [folderId,folder]of Object.entries(folders)){
        const word=(folder.words||[]).find(w=>normalize(w.word)===key);
        if(word){match={folderId,word};break;}
      }
      if(match){entries[card.id]={status:'merged',kind:'word',folderId:match.folderId,targetId:match.word.id,reason:'Уже есть в словаре; пользовательский вариант сохранён'};continue;}
      let folderId=Object.keys(folders).find(id=>normalize(folders[id].name)===normalize(card.block));
      if(!folderId){folderId=blockId(card.block);if(folders[folderId]&&folders[folderId].sourceBlock!==card.block)folderId+='_'+card.id;folders[folderId]=folders[folderId]||{name:card.block,sourceBlock:card.block,managed:true,words:[]};}
      const id='vocabulary_'+card.id;
      folders[folderId].words=folders[folderId].words||[];
      folders[folderId].words.push({id,word:card.english,translation:card.russian,sourceCardId:card.id});
      entries[card.id]={status:'imported',kind:'word',folderId,targetId:id};
    }
    return report(state,cards);
  }
  function report(state,cards){
    const entries=state.vocabularyImport?.entries||{};
    return cards.flatMap(card=>card.sources.map(source=>({cardId:card.id,inventoryRow:source.inventory_row,...entries[card.id],source})));
  }
  const api={apply,report,blockId,isExcluded,isExcludedFolder,canDeleteFolder,isPresetWord,canManageWord,visibleWords};
  if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.VocabularyImport=api;
})(typeof window!=='undefined'?window:globalThis);
