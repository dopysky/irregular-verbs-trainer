(() => {
  const cards = [
    ['R01','Like — нравится вообще','Like используем, когда говорим, что нам что-то нравится в целом. С he, she и it в утверждении используем likes. После like может стоять предмет или действие с -ing; также возможно to + глагол.','r01-v01.png','Девушка читает книгу.',[['She likes reading.','Ей нравится читать.'],['I like tea.','Мне нравится чай.']]],
    ['R02','Would like — хотел(а) бы','Would like используем, когда говорим, чего хотели бы сейчас или в будущем. Для всех лиц форма одинаковая; would часто сокращают до ’d. После неё ставим существительное или to + глагол.','r02-v01.png','Котёнок ждёт молока.',[['The kitten would like some milk.','Котёнок хотел бы молока.'],['She’d like to travel this summer.','Она хотела бы путешествовать этим летом.']]],
    ['R03','Вопросы и предложения','Чтобы спросить о предпочтениях, используем Do / Does + подлежащее + like. После does глагол остаётся без -s. Для вопроса о желании и вежливого предложения используем Would + подлежащее + like. Вопросительное слово, например what, ставим перед вспомогательным глаголом.','r03-v03.png','Котёнок предлагает чай цыплёнку.',[['Do you like tea?','Тебе нравится чай?'],['Would you like some tea?','Хочешь чаю?'],['What would you like to do?','Что вы хотели бы сделать?']]],
    ['R04','Отрицания','Если что-то не нравится вообще, используем don’t like или doesn’t like (с he, she, it). Wouldn’t like выражает нежелание в конкретной ситуации или то, чего не хотелось бы в предполагаемых обстоятельствах; полная форма — would not like.','r04-v02.png','Котёнок не хочет заходить в бассейн.',[['The kitten doesn’t like swimming.','Котёнку не нравится плавать.'],['The kitten wouldn’t like to swim today.','Котёнок не хотел бы плавать сегодня.']]]
  ].map(([id,title,rule,file,alt,captions])=>({id:'LWL-'+id,title,rule,figures:[{src:'assets/grammar/like-would-like/'+file,alt,captions}]}));
  cards[0].figures[0].captions.push(['She likes to read.','Ей нравится читать.']);
  cards[0].sections = [
    {title:'Когда используем', text:'Like означает «нравится». Используй его, когда говоришь о том, что нравится в целом: I like tea — Мне нравится чай.'},
    {title:'Кто?', formula:'I / you / we / they + like · he / she / it + likes', text:'Когда говорим о нём, о ней или об одном предмете, добавляем к like букву s: She likes reading — Ей нравится читать.'},
    {title:'Если нравится какое-то действие', formula:'like + действие с -ing  /  like + to + действие', text:'Оба варианта часто подходят, когда говорим о том, что нравится делать вообще: She likes reading и She likes to read — Ей нравится читать. Иногда форма с to также подчёркивает привычный выбор: I like to walk to work — Я предпочитаю ходить на работу пешком.'}
  ];
  cards[1].sections = [
    {title:'Когда используем', text:'Would like означает «хотел(а) бы». Используй его, когда говоришь о желании сейчас или в будущем. Для всех лиц форма одинаковая; would часто сокращают до ’d.'},
    {title:'Чего хочется?', formula:'would like + предмет', text:'The kitten would like some milk — Котёнок хотел бы молока.'},
    {title:'Что хочется сделать?', formula:'would like + to + действие', text:'She’d like to travel this summer — Она хотела бы путешествовать этим летом. Перед действием после would like ставим to.'}
  ];
  cards[2].sections = [
    {title:'Спросить, что нравится', formula:'Do / Does + кто? + like?', text:'Do you like tea? — Тебе нравится чай? С he, she, it и одним человеком используем does: Does she like tea? После does слово like остаётся без -s.'},
    {title:'Вежливо предложить', formula:'Would + кто? + like?', text:'Would you like some tea? — Хочешь чаю? Так можно спросить о желании или вежливо что-то предложить.'},
    {title:'Спросить «что?»', formula:'What + would + кто? + like?', text:'Вопросительное слово what ставим в начало: What would you like to do? — Что вы хотели бы сделать?'}
  ];
  cards[3].sections = [
    {title:'Не нравится вообще', formula:'don’t like / doesn’t like', text:'Если что-то не нравится в целом, используй don’t like. С he, she, it и одним человеком — doesn’t like: The kitten doesn’t like swimming — Котёнку не нравится плавать.'},
    {title:'Не хотелось бы', formula:'wouldn’t like = would not like', text:'Wouldn’t like выражает нежелание в конкретной ситуации или то, чего не хотелось бы в предполагаемых обстоятельствах: The kitten wouldn’t like to swim today — Котёнок не хотел бы плавать сегодня.'}
  ];

  const rows = [
    ['choice','I ___ cooking.','Мне нравится готовить вообще','like',['like','likes','would'],'I like cooking.','Like используется с I.',{likes:'Likes не согласуется с I.',would:'Would отдельно не передаёт «нравится».'}],
    ['choice','I ___ some tea now.','Сейчас я хотел(а) бы выпить чаю','would like',['would like','like','likes'],'I would like some tea now.','Would like выражает желание в конкретной ситуации.',{like:'Like выражает предпочтение в целом, а здесь речь о желании сейчас.',likes:'Likes не согласуется с I и выражает предпочтение в целом.'}],
    ['choice','My brother ___ cats.','','likes',['likes','like','liking'],'My brother likes cats.','С he в утверждении нужно -s.',{like:'Like без -s не согласуется с подлежащим.',liking:'Liking не является сказуемым само по себе.'}],
    ['choice','___ your sister like dogs?','Твоей сестре нравятся собаки?','Does',['Does','Do','Would'],'Does your sister like dogs?','В вопросе о предпочтениях с she используем does; после does ставим like без -s.',{Do:'Do не согласуется с your sister (she).',Would:'Would спрашивает, понравились бы ей собаки в предполагаемой ситуации; здесь речь о предпочтении в целом.'}],
    ['choice','___ some coffee?','Вежливо предложите кофе','Would you like',['Would you like','Do you likes','Would you liking'],'Would you like some coffee?','Для предложения используем would you like.',{'Do you likes':'После do используется like без -s.','Would you liking':'После would нужна форма like.'}],
    ['choice','He ___ like dancing.','','doesn’t',['doesn’t','don’t','isn’t'],'He doesn’t like dancing.','С he используется doesn’t.',{'don’t':'Don’t не согласуется с he.','isn’t':'Isn’t не образует такое отрицание с like.'}],
    ['choice','I would like ___ a doctor.','','to be',['to be','being','be'],'I would like to be a doctor.','После would like действие выражается через to + глагол.',{being:'После would like нужен инфинитив с to.',be:'Перед глаголом после would like нужно to.'}],
    ['choice','Я бы не хотел(а) жить в холодной стране','','I wouldn’t like to live in a cold country',['I wouldn’t like to live in a cold country','I don’t like living in a cold country','I like cold countries'],'I wouldn’t like to live in a cold country.','Wouldn’t like выражает отрицательное желание.',{'I don’t like living in a cold country':'Это описывает существующее предпочтение.','I like cold countries':'Это говорит об обратном.'}],
    ['gap','Emma ___ playing chess.','Форма like','likes',[],'Emma likes playing chess.','С Emma (she) используется likes.'],
    ['gap','___ you like some cake?','Вежливо предложите пирог','Would',[],'Would you like some cake?','Would you like…? используется, когда мы что-то предлагаем.'],
    ['gap','Tom ___ like running.','Вставьте сокращённое отрицание','doesn’t',[],'Tom doesn’t like running.','С Tom используем doesn’t + like.'],
    ['gap','We would like ___ travel next year.','','to',[],'We would like to travel next year.','Перед действием после would like нужно to.'],
    ['gap','___ he like pizza?','','Does',[],'Does he like pizza?','В вопросе о предпочтениях с he используется does.'],
    ['gap','I ___ like to live there.','Вставьте would с отрицанием','wouldn’t',['would not'],'I wouldn’t like to live there.','Это отрицание желания; после него остаётся like.'],
    ['gap','They like ___ (dance).','','dancing',['to dance'],'They like dancing.','Обе формы возможны после like в этом общем контексте.'],
    ['gap','My friend would like ___ (learn) French.','','to learn',[],'My friend would like to learn French.','После would like нужен инфинитив с to.'],
    ['full','Мне нравится играть в теннис.','','I like playing tennis',['I like to play tennis'],'I like playing tennis.','Обе формы возможны для общего предпочтения.'],
    ['full','Я хотел(а) бы сыграть в теннис.','','I would like to play tennis',["I'd like to play tennis"],'I would like to play tennis.','Желание выражает would like to.'],
    ['full','Ему нравится шоколад.','','He likes chocolate',[],'He likes chocolate.','С he в утверждении используем likes.'],
    ['full','Ей не нравится бегать.','','She doesn’t like running',['She does not like running','She doesn’t like to run','She does not like to run'],'She doesn’t like running.','С she используем doesn’t like; допустимы running и to run.'],
    ['full','Хотите немного воды?','','Would you like some water',['Would you like a little water','Would you like a bit of water'],'Would you like some water?','Для предложения используем would you like.'],
    ['full','Ему нравятся собаки?','','Does he like dogs',[],'Does he like dogs?','После does используем like без -s.'],
    ['full','Она не хотела бы жить здесь.','','She wouldn’t like to live here',['She would not like to live here'],'She wouldn’t like to live here.','Отрицательное желание — wouldn’t like to.'],
    ['full','Что ты хотел(а) бы купить?','','What would you like to buy',[],'What would you like to buy?','What ставится перед would, затем подлежащее и like to buy.']
  ];
  const exercises=rows.map(([mode,material,translation,answer,alternatives,correct,explanation,choice_feedback],i)=>({id:'like-would-like-'+(i+1),mode,instruction:mode==='choice'?'Выбери ответ':mode==='gap'?'Впиши ответ':'Переведи предложение на английский',material,translation:mode==='full'?'':translation,answer,answers:mode==='choice'?[answer]:[answer,...alternatives],options:mode==='choice'?alternatives:[],correct_sentence:correct,correct_display:correct,feedback_explanation:explanation,choice_feedback,full_translation_prompt:mode==='full'?material:undefined,full_translation_answer:mode==='full'?answer:undefined,full_translation_accepted_answers:mode==='full'?alternatives:undefined}));
  const hintData = [
    ['', [['готовить','cook','готовить']]],
    ['', [['чаю','tea','чай']]],
    ['Моему брату ___ кошки', [['брату','brother','брат'],['кошки','cat','кошка']]],
    ['', [['сестре','sister','сестра'],['собаки','dog','собака']]],
    ['', [['кофе','coffee']]],
    ['Он ___ танцевать', [['танцевать','dance','танцевать']]],
    ['Я хотел(а) бы ___ врачом', [['врачом','doctor','врач']]],
    ['', [['жить','live','жить'],['холодной','cold','холодный'],['стране','country','страна']], true],
    ['Эмме ___ играть в шахматы', [['играть','play','играть'],['шахматы','chess']]],
    ['', [['пирог','cake']]],
    ['Тому ___ бегать. Вставьте сокращённое отрицание', [['бегать','run','бегать']]],
    ['Мы хотели бы ___ путешествовать в следующем году', [['путешествовать','travel','путешествовать'],['году','year','год']]],
    ['___ ему нравится пицца?', [['пицца','pizza']]],
    ['Я ___ хотела бы жить там. Вставьте would с отрицанием', [['жить','live','жить'],['там','there']]],
    ['Им нравится ___ (dance)', [['нравится','like','нравиться']]],
    ['Мой друг хотел бы ___ (learn) французский', [['друг','friend'],['французский','French']]],
    ['', [['играть','play','играть'],['теннис','tennis']]],
    ['', [['сыграть','play','играть'],['теннис','tennis']]],
    ['', [['шоколад','chocolate']]],
    ['', [['бегать','run','бегать']]],
    ['', [['воды','water','вода']]],
    ['', [['собаки','dogs','собаки']]],
    ['', [['жить','live','жить'],['здесь','here']]],
    ['', [['купить','buy','покупать']]]
  ];
  exercises.forEach((q,i)=>{const [translation,hints,onPrompt]=hintData[i];if(translation)q.translation=translation;q.word_hints=hints;if(onPrompt)q.hints_on_prompt=true;});

  window.TRAINING_TOPICS.push({id:'like-would-like',title:'Like и would like',description:'Что нравится и чего хотелось бы?',words:['like','would like','to'],cards,exercises});
})();
