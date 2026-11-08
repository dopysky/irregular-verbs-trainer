/* Проверка только явно заданных ответов. Без приблизительного совпадения,
   которое могло бы принять ошибочную грамматику. */
(function(root) {
  'use strict';
  function normalize(value) {
    return String(value ?? '').normalize('NFKC').toLowerCase()
      .replace(/[’‘`]/g, "'").trim().replace(/[.!?]+$/g, '').trim().replace(/\s+/g, ' ');
  }
  function accepts(question, value) {
    if (question.fields) {
      if (!Array.isArray(value) || value.length !== question.fields.length) return false;
      return question.answers.some(answer => {
        const parts = answer.split('/').map(normalize);
        return parts.length === value.length && parts.every((part, i) => part === normalize(value[i]));
      });
    }
    if (Array.isArray(value)) return false;
    return question.answers.some(answer => normalize(answer) === normalize(value));
  }
  function task(question,mode=question.mode){
    const full=mode==='full';
    const answers=full?[question.full_translation_answer||question.answer,...(question.full_translation_accepted_answers||question.accepted_alternatives||[])]:question.answers;
    let translation=full?'':question.translation;
    if(mode==='forms'&&translation){const parts=question.material.split('→');translation=translation.split('→').map((part,i)=>parts[i]?.includes('___')?'…':part.trim()).join(' → ');}
    return {source:question,id:question.id+(mode!==question.mode?'::'+mode:''),mode,
      instruction:full?(question.full_translation_instruction||question.instruction):question.instruction,
      material:full?(question.full_translation_prompt||question.russian):question.material,
      translation,answers,fields:full?undefined:question.fields,
      options:mode==='choice'?question.options:undefined,
      correctSentence:full?(question.full_translation_answer||question.correct_sentence):question.correct_sentence};
  }
  function explanation(view,value){
    const q=view.source,text=normalize(Array.isArray(value)?value.join(' '):value);
    if(view.mode==='full'&&/\b(is|are)\b/.test(normalize(view.correctSentence))&&!/\b(is|are)\b|\w'(s|re)\b/.test(text))
      return 'В английском предложении нужна связка '+(/\bare\b/.test(normalize(view.correctSentence))?'are':'is')+': она соединяет предмет с описанием или указанием места. В русском настоящем времени эту связку обычно пропускают. '+q.explanation.replace(/\s*В полном предложении нужна связка.*$/s,'');
    if(view.mode==='full'&&/\b(have|has) (lived|worked|known)\b/.test(normalize(view.correctSentence))&&!/\b(have|has)\b|\w'(ve|s)\b/.test(text))
      return 'Состояние или действие началось раньше и продолжается сейчас. В этом образце нужен Present Perfect: have или has + третья форма глагола. '+q.explanation;
    if(view.mode==='full'&&q.id==='comparison-9'){
      if(!/\bthan\b/.test(text))return 'После better нужен than («чем»): он вводит того, с кем сравниваем. Well означает «хорошо», better — «лучше». После she в Present Simple используем sings. Than me — короткий вариант; в than I do слово do заменяет повторение sing.';
      if(!/\bsings\b/.test(text))return 'После she в Present Simple к sing добавляем -s: sings. '+q.explanation;
    }
    if(view.mode==='full'&&/\bthan\b/.test(normalize(view.correctSentence))&&!/\bthan\b/.test(text))return 'При сравнении нужен than («чем»): он вводит того или то, с чем сравниваем. '+q.explanation;
    return q.explanation;
  }
  const api = { normalize, accepts, task, explanation };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.TrainingAnswers = api;
})(typeof window !== 'undefined' ? window : globalThis);
