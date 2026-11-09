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
      correctSentence:full?(question.full_translation_answer||question.correct_display||question.correct_sentence)
        :(question.correct_display||question.correct_sentence)};
  }
  function explanation(view){
    const q=view.source;
    return (view.mode==='full' && q.full_feedback_explanation) || q.feedback_explanation;
  }
  const api = { normalize, accepts, task, explanation };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.TrainingAnswers = api;
})(typeof window !== 'undefined' ? window : globalThis);
