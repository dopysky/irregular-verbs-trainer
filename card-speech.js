/* Текст открытой учебной карточки. Не применяется к скрытым ответам теста. */
(function(root) {
  function formsText(verb) {
    return [verb.inf, verb.past, verb.part].map(form => String(form || '')
      .split('/').map(word => word.trim()).filter(Boolean).join(', ')).join('. ');
  }
  function chooseVoice(voices){
    const american=voices.filter(v=>/^en[-_]US$/i.test(v.lang));
    const score=v=>(/natural|neural|premium|enhanced/i.test(v.name)?100:0)+(/Google US English/i.test(v.name)?80:0)+(v.localService===false?10:0)+(v.default?5:0);
    return american.map((voice,index)=>({voice,index,score:score(voice)})).sort((a,b)=>b.score-a.score||a.index-b.index)[0]?.voice||null;
  }
  if (typeof module !== 'undefined' && module.exports) module.exports = { formsText, chooseVoice };
  else root.CardSpeech = { formsText, chooseVoice };
})(typeof window !== 'undefined' ? window : globalThis);
