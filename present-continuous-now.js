(() => {
  const cards = [{
    id:'PCN-R01', title:'Что происходит сейчас?',
    rule:'Чтобы сказать, что действие происходит прямо сейчас, используем am / is / are + глагол с окончанием -ing. Форму am ставим с I, is — с he, she, it, are — с you, we, they. Обычно добавляем -ing: play → playing. Если глагол оканчивается на немую e, убираем её: make → making. В некоторых коротких глаголах последняя согласная удваивается: sit → sitting.',
    figures:[{src:'assets/grammar/present-continuous-now/r01-v01.png',alt:'Котёнок спит на синем диване.',captions:[['The kitten is sleeping now.','Котёнок сейчас спит.'],['I am making tea.','Я сейчас готовлю чай.'],['They are playing.','Они сейчас играют.']]}]
  }];
  const exercises = [
    {id:'present-continuous-now-1',mode:'choice',instruction:'Выбери ответ',material:'The kitten ___ now.',translation:'Сейчас котёнок спит. Выбери правильную форму.',answer:'is sleeping',answers:['is sleeping'],options:['is sleeping','are sleeping','is sleep'],correct_sentence:'The kitten is sleeping now.',correct_display:'The kitten is sleeping now.',feedback_explanation:'С kitten (it) используем is и форму sleeping.',choice_feedback:{'are sleeping':'С kitten (it) нужна форма is.','is sleep':'После is для действия сейчас нужна форма sleeping.'}},
    {id:'present-continuous-now-2',mode:'gap',instruction:'Впиши ответ',material:'I ___ reading now.',translation:'Я сейчас читаю.',answer:'am',answers:['am'],correct_sentence:'I am reading now.',correct_display:'I am reading now.',feedback_explanation:'С I используется am; reading уже дано.'},
    {id:'present-continuous-now-3',mode:'full',instruction:'Переведи предложение на английский',material:'Они сейчас играют.',translation:'',answer:'They are playing now',answers:['They are playing now',"They're playing now"],full_translation_prompt:'Они сейчас играют.',full_translation_answer:'They are playing now',full_translation_accepted_answers:["They're playing now"],correct_sentence:'They are playing now.',correct_display:'They are playing now.',feedback_explanation:'С they используем are и добавляем -ing к play.'}
  ];
  exercises.forEach(q => { q.explain_skip = true; });
  window.TRAINING_TOPICS.push({id:'present-continuous-now',title:'Present Continuous — действие сейчас',description:'Что происходит прямо сейчас?',words:['am','is','are'],cards,exercises});
})();
