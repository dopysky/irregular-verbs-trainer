(() => {
  const base='assets/grammar/future-will-going-to/';
  const cards=[
    {id:'FW-R01',title:'Will: говорим о будущем',sections:[
      {title:'Как построить',text:'Will помогает сказать о будущем. После will ставим действие в начальной форме без to. Will одинаково для I, you, he, she, it, we и they.',formula:'кто? + will + действие'},
      {title:'Как сказать «не»',text:"Поставь not после will: will not обычно сокращается до won't. She will not work tomorrow / She won't work tomorrow — Она не будет работать завтра."},
      {title:'Вопрос и короткий ответ',text:"Поставь will перед тем, о ком спрашиваешь: Will they come later? — Они придут позже? Yes, they will / No, they won't. Вопросительное слово ставим первым: When will they arrive? — Когда они приедут?"}
    ],figures:[{src:base+'r01-v01.png',alt:'Женщина собирается ответить на звонок',captions:[['I will call you tomorrow / I’ll call you tomorrow','Я позвоню тебе завтра'],["I’ll answer the phone",'Я отвечу на звонок']]}]},
    {id:'FW-R02',title:'Be going to: намерение и план',sections:[
      {title:'Когда используем',text:'Be going to с действием часто показывает намерение, которое появилось до разговора. Вместо be выбираем am, is или are в зависимости от того, о ком говорим.',formula:'кто? + am / is / are + going to + действие',chips:[['I','am'],['he / she / it','is'],['you / we / they','are']]},
      {title:'Утверждение и отрицание',text:"I am going to visit my friend — Я собираюсь навестить подругу. She is going to take the train — Она собирается поехать на поезде. They are going to cook dinner — Они собираются приготовить ужин. Сокращения: I'm, she's, they're. Для отрицания добавь not: I am not going to drive — Я не собираюсь ехать за рулём; He isn't going to cook — Он не собирается готовить; We aren't going to stay — Мы не собираемся оставаться."},
      {title:'Вопрос и короткий ответ',text:"Поставь am, is или are перед тем, о ком спрашиваешь: Are you going to travel? — Ты собираешься путешествовать? Yes, I am / No, I'm not. Is she going to work? — Она собирается работать? Yes, she is / No, she isn't. Where are they going to stay? — Где они собираются остановиться?"}
    ],figures:[{src:base+'r02-v06.png',alt:'Хрюшка и коровка собирают чемодан, рядом билеты',captions:[["I'm going to travel",'Я собираюсь путешествовать']]}]},
    {id:'FW-R03',title:'Решение сейчас и план заранее',sections:[
      {title:'Решение в момент разговора',text:"The phone is ringing. I'll answer it — Телефон звонит. Я отвечу. Так можно выразить решение, которое возникло сейчас. Will также подходит для предложения помощи или обещания: I'll carry your bag — Я понесу твою сумку; I'll call you tonight — Я позвоню тебе сегодня вечером."},
      {title:'Намерение появилось раньше',text:"I've decided to take a holiday. I'm going to visit my sister — Я решила взять отпуск. Я собираюсь навестить сестру."},
      {title:'Учитывай смысл',text:'Это полезная подсказка, а не жёсткий запрет: обе формы могут быть возможны при разном смысле или дополнительном контексте.'}
    ],figures:[{src:base+'r03-v01.png',alt:'Человек предлагает помощь с сумкой; рядом заранее собранный чемодан',captions:[["I'll help you",'Я помогу тебе'],["I'm going to travel",'Я собираюсь путешествовать']]}]},
    {id:'FW-R04',title:'Прогноз: мнение или видимые признаки',sections:[
      {title:'Мнение или предположение',text:'I think it will rain tomorrow — Думаю, завтра будет дождь.'},
      {title:'Признаки перед глазами',text:"Look at those dark clouds! It's going to rain — Посмотри на эти тёмные тучи! Сейчас пойдёт дождь."},
      {title:'Выбор зависит от смысла',text:'Обе формы возможны для предсказаний. Слова tomorrow и next week сами по себе не определяют единственный вариант: важно, что хочет подчеркнуть говорящий.'}
    ],figures:[{src:base+'r04-v02.png',alt:'Жирафик смотрит на дождевые тучи',captions:[["It's going to rain",'Собирается дождь']]}]}
  ];
  const choices=[
    ['She ___ call tomorrow',['will','wills','will to'],'После will используется начальная форма без to и окончания -s',['У will нет окончания -s','После will частица to не нужна']],
    ["I ___ be late",["won't","amn't will","don't will"],"Won't — сокращение will not",['Здесь am не используется','Отрицание образуется с помощью will not']],
    ['___ they arrive soon?',['Will','Do','Are going'],'Вопрос с will начинается с Will',['Для вопроса с will не нужно do','В форме are going отсутствует to']],
    ['When ___ he call?',['will','does will','will to'],'После вопросительного слова стоит will',['Does перед will не используется','После will частица to не нужна']],
    ['Will you help? — Yes, I ___',['will','do','am'],'В кратком ответе повторяем will',['Повтори will из вопроса','Повтори will из вопроса']],
    ["Will she be there? — No, she ___",["won't","doesn't","isn't going"],"Краткое отрицание с will — won't",['Это ответ на вопрос с does','Это не краткий ответ на вопрос с will']],
    ['I ___ going to cook',['am','is','are'],'С I используется am',['С I нужна am','С I нужна am']],
    ['He ___ going to leave',['is','are','am'],'С he используется is',['С he нужна is','С he нужна is']],
    ['They ___ going to move',['are','is','am'],'С they используется are',['С they нужна are','С they нужна are']],
    ['___ you going to walk?',['Are','Do','Will'],'В вопросе форма be стоит перед you',['В вопросе с going to нужна форма be','Нельзя построить вопрос как will you going']],
    ["She isn't going to ___",['drive','drives','driving'],'После going to нужна начальная форма',['После going to нужна начальная форма без -s','После going to нужна начальная форма без -ing']],
    ['Are they going to stay? — Yes, they ___',['are','do','will'],'В кратком ответе повторяем are',['Повтори are из вопроса','Повтори are из вопроса']]
  ];
  const gaps=[
    ['I ___ call you tonight (will)','will','Will стоит перед действием'],['She ___ not work tomorrow (will)','will','Not уже дано; перед ним ставим will'],['___ you visit us next week? (will)','Will','Вопрос начинается с will'],['Where ___ they meet? (will)','will','После вопросительного слова ставим will'],['He ___ going to buy tickets (be)','is','С he используется is'],['We ___ going to take a taxi (be)','are','С we используется are'],['I ___ not going to stay (be)','am','С I используется am'],['___ she going to come? (be)','Is','В вопросе is стоит перед she'],['What ___ they going to do? (be)','are','С they используется are'],['He is going to ___ a ticket (buy)','buy','После going to нужна начальная форма']
  ];
  const meaning=[
    ['The doorbell rings. I ___ open it',['will','am going to'],'Условие просит решение в момент разговора; going to возможно при ином контексте намерения',['Going to обычно подчёркивает намерение, возникшее раньше; здесь требуется решение сейчас']],
    ['You decided yesterday to study tonight. I ___ study tonight',['am going to','will to'],'Намерение уже существует',['После will не ставят to']],
    ['Look at the dark clouds! It ___ rain',['is going to','going','are going'],'Облака — видимый признак; с it используется is',['Нет is и to','С it нужна is и отсутствует to']],
    ['I promise: I ___ call you tonight',['will','am will','will to'],'Will естественно для обещания',['Am перед will не употребляется','После will не ставят to']],
    ['I think people ___ travel more in the future',['will','wills','will to'],'Will подходит для мнения о будущем',['К will не добавляют -s','После will не ставят to']],
    ['You offer to carry a bag: I ___ carry that for you',['will','am will','will to'],'Will подходит для предложения помощи',['Am перед will не употребляется','После will не ставят to']],
    ['They have already decided. They ___ move next month',['are going to','going to','is going to'],'Для решения заранее подходит going to; с they нужно are',['Пропущено are','С they нужно are']],
    ['She sees a glass fall off the table. It ___ break!',['is going to','going to','are going to'],'Прогноз основан на видимом событии',['Пропущено is','С it используется is']]
  ];
  const translations=[
    ['Я позвоню тебе завтра (используй will)',['I will call you tomorrow',"I'll call you tomorrow",'Tomorrow I will call you',"Tomorrow I'll call you",'Tomorrow, I will call you',"Tomorrow, I'll call you"],'Will + начальная форма',[['позвоню','call','звонить']]],
    ['Она не будет работать завтра (используй will)',['She will not work tomorrow',"She won't work tomorrow", "She'll not work tomorrow",'Tomorrow she will not work',"Tomorrow she won't work",'Tomorrow, she will not work',"Tomorrow, she won't work"],"Отрицание: will not / won't",[['работать','work']]],
    ['Они придут позже? (используй will)',['Will they come later?','Will they come later on?','Will they arrive later?'],'В вопросе will стоит перед they',[['придут','come','приходить']]],
    ['Когда он позвонит? (используй will)',['When will he call?'],'Вопросительное слово + will + кто?',[['позвонит','call','звонить']]],
    ['Я собираюсь приготовить ужин',['I am going to cook dinner',"I'm going to cook dinner",'I am going to make dinner',"I'm going to make dinner"],'С I нужна am',[['ужин','dinner']]],
    ['Она собирается купить билет',['She is going to buy a ticket',"She's going to buy a ticket"],'С she нужна is',[['билет','ticket']]],
    ['Мы не собираемся оставаться',['We are not going to stay',"We aren't going to stay","We're not going to stay"],'Отрицание с are not',[['оставаться','stay']]],
    ['Ты собираешься путешествовать?',['Are you going to travel?'],'Are стоит перед you',[['путешествовать','travel']]],
    ['Где они собираются остановиться?',['Where are they going to stay?'],'После where идут are и they',[['остановиться','stay','останавливаться']]],
    ['Посмотри на тучи! Сейчас пойдёт дождь',['Look at the clouds! It is going to rain',"Look at the clouds! It's going to rain",'Look at those clouds! It is going to rain',"Look at those clouds! It's going to rain",'Look at the clouds! It will rain',"Look at the clouds! It'll rain",'Look at those clouds! It will rain',"Look at those clouds! It'll rain"],'Видимые тучи дают основание для прогноза с going to; will также возможно в зависимости от смысла',[['тучи','clouds','тучи']]]
  ];
  for(const prefix of ['Look at the clouds','Look at those clouds','Look at clouds']) for(const separator of ['! ','. ']) for(const future of ['It is going to rain',"It's going to rain",'It will rain',"It'll rain"]) translations[9][1].push(prefix+separator+future);
  const exercises=[];
  function addChoice(row,number){const [material,options,explanation,wrong]=row; const answer=options[0];const feedback=Object.fromEntries(options.slice(1).map((o,i)=>[o,wrong[i]]));const n=number%options.length;exercises.push({id:`future-will-going-to-F${String(number).padStart(2,'0')}`,mode:'choice',instruction:number===23?'Выбери форму для решения, принятого в момент разговора':number===24?'Выбери форму для уже существующего плана':'Выбери ответ',material,answer,answers:[answer],options:options.slice(n).concat(options.slice(0,n)),choice_feedback:feedback,feedback_explanation:explanation,explain_skip:true,correct_sentence:material.includes('___')?material.replace('___',answer):answer,correct_display:material.includes('___')?material.replace('___',answer):answer});}
  choices.forEach((q,i)=>addChoice(q,i+1));
  gaps.forEach(([material,answer,feedback],i)=>exercises.push({id:`future-will-going-to-F${String(i+13).padStart(2,'0')}`,mode:'gap',instruction:'Впиши ответ',material,answer,answers:[answer],feedback_explanation:feedback,explain_skip:true,correct_sentence:material.replace('___',answer).replace(/ \((will|be|buy)\)$/,''),correct_display:material.replace('___',answer).replace(/ \((will|be|buy)\)$/,'')}));
  meaning.forEach((q,i)=>addChoice(q,i+23));
  translations.forEach(([material,answers,feedback,word_hints],i)=>exercises.push({id:`future-will-going-to-F${String(i+31).padStart(2,'0')}`,mode:'full',instruction:'Переведи предложение на английский',material,answer:answers[0],answers,full_translation_prompt:material,full_translation_answer:answers[0],full_translation_accepted_answers:answers.slice(1),feedback_explanation:feedback,correct_sentence:answers[0],correct_display:answers[0],word_hints,explain_skip:true}));
  const hints={
    1:['Она ___ позвонит завтра',[['позвонит','call','звонить']]],2:['Я не опоздаю',[['опоздаю','be late','опоздать']]],3:['Они ___ прибудут скоро?',[['прибудут','arrive','прибывать']]],4:['Когда он ___ позвонит?',[['позвонит','call','звонить']]],
    7:['Я ___ собираюсь готовить',[['готовить','cook']]],8:['Он ___ собирается уходить',[['уходить','leave']]],9:['Они ___ собираются переехать',[['переехать','move']]],10:['Ты ___ собираешься идти пешком?',[['пешком','walk','идти пешком']]],
    13:['Я ___ позвоню тебе сегодня вечером',[['позвоню','call','звонить']]],14:['Она ___ не будет работать завтра',[['работать','work']]],15:['Ты ___ навестишь нас на следующей неделе?',[['навестишь','visit','навещать']]],16:['Где они ___ встретятся?',[['встретятся','meet','встречаться']]],17:['Он ___ собирается купить билеты',[['билеты','tickets','билеты']]],18:['Мы собираемся взять такси',[]],19:['Я ___ не собираюсь оставаться',[['оставаться','stay']]],20:['Она ___ собирается прийти?',[['прийти','come']]],21:['Что они ___ собираются делать?',[['делать','do']]],22:['Он собирается купить билет',[['билет','ticket']]],
    23:['Звонит дверной звонок. Я ___ открою',[['звонок','doorbell','дверной звонок']]],24:['Вчера ты решил позаниматься сегодня вечером. Я собираюсь позаниматься сегодня вечером',[['позаниматься','study','заниматься']]],25:['Посмотри на тёмные тучи! Скоро пойдёт дождь',[['тучи','clouds','тучи']]],26:['Я обещаю: я ___ позвоню сегодня вечером',[['обещаю','promise','обещать']]],27:['Думаю, люди будут путешествовать больше в будущем',[['путешествовать','travel']]],28:['Ты предлагаешь понести сумку: я ___ понесу её за тебя',[['сумку','bag','сумка']]],29:['Они уже решили. Они собираются переехать в следующем месяце',[['переехать','move']]],30:['Она видит, как стакан падает со стола. Он ___ разобьётся!',[['стакан','glass'],['стола','table','стол']]]
  };
  Object.entries(hints).forEach(([n,[translation,word_hints]])=>Object.assign(exercises[Number(n)-1],{translation:translation.replace(/___\s*/g,''),word_hints}));
  window.TRAINING_TOPICS.push({id:'future-will-going-to',title:'Будущее: will и be going to',description:'Решения, планы и прогнозы',words:['will','going to'],cards,exercises});
})();
