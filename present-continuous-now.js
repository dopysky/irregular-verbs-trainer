(() => {
  const cards = [
  {
    "id": "PCN-R01",
    "title": "Present Continuous: действие сейчас",
    "rule": "Представь фотографию происходящего в этот момент: Present Continuous показывает действие в процессе сейчас, в момент речи. Подсказки: now — сейчас, at the moment — в данный момент.\n\nУтверждение: подлежащее + am/is/are + глагол с -ing. С I — am; с he, she, it или одним человеком/предметом — is; с you, we, they и несколькими — are.\n\nОтрицание: am/is/are + not + глагол с -ing. В речи обычны сокращения I'm, she's, they're; isn't и aren't. Вместо I amn't в стандартном английском используем I'm not.",
    "figures": [
      {
        "src": "assets/grammar/present-continuous-now/r01-v02.png",
        "alt": "Кот спит на диване.",
        "captions": [
          [
            "The cat is sleeping now.",
            "Кот сейчас спит."
          ],
          [
            "I'm making tea at the moment.",
            "Я сейчас готовлю чай."
          ],
          [
            "They aren't playing now.",
            "Они сейчас не играют."
          ]
        ]
      }
    ]
  },
  {
    "id": "PCN-R02",
    "title": "Past Continuous: действие в прошлом",
    "rule": "Past Continuous показывает процесс в определённый момент прошлого: мы как будто рассматриваем кадр из прошлого, не сообщая формой, когда действие началось и закончилось. Можно указать момент: at three yesterday — вчера в три, или период: all morning — всё утро.\n\nУтверждение: I/he/she/it + was + -ing; you/we/they + were + -ing. Отрицание: was not / wasn't или were not / weren't + -ing.",
    "figures": [
      {
        "src": "assets/grammar/present-continuous-now/r02-v03.png",
        "alt": "Девушка читает; на часах три часа.",
        "captions": [
          [
            "She was reading at three yesterday.",
            "Вчера в три она читала."
          ],
          [
            "We were walking all morning.",
            "Мы гуляли всё утро."
          ],
          [
            "She wasn't working at six yesterday.",
            "Вчера в шесть она не работала."
          ]
        ]
      }
    ]
  },
  {
    "id": "PCN-R03",
    "title": "Вопросы и краткие ответы",
    "rule": "В общем вопросе вынеси am/is/are или was/were перед подлежащим, а смысловой глагол оставь в форме -ing. Для специального вопроса поставь вопросительное слово перед вспомогательным глаголом: What are you doing? / What were you doing?\n\nВ кратком ответе повтори соответствующую форму be: Yes, I am. / No, I'm not. Yes, she is. / No, she isn't. Yes, they were. / No, they weren't. После Yes с местоимением не сокращай is или are до 's / 're.",
    "figures": [
      {
        "src": "assets/grammar/present-continuous-now/r03-v03.png",
        "alt": "Девушка рисует цветок, рядом сидит кот.",
        "captions": [
          [
            "Is she painting? Yes, she is.",
            "Она рисует? Да."
          ],
          [
            "What were you doing at six yesterday?",
            "Что ты делал вчера в шесть?"
          ],
          [
            "Were they playing? No, they weren't.",
            "Они играли? Нет."
          ]
        ]
      }
    ]
  },
  {
    "id": "PCN-R04",
    "title": "Как писать -ing и глаголы состояния",
    "rule": "Обычно добавляем -ing: play → playing. После немой e убираем её: make → making; после -ie заменяем ie на y: lie → lying. Некоторые короткие глаголы с одной гласной и одной конечной согласной удваивают согласную: run → running, sit → sitting. Конечные w, x и y не удваиваются: snow → snowing, mix → mixing.\n\nГлаголы, называющие состояние, чувство или мысль, обычно не ставятся в Continuous в этих значениях: know, need, want, like. Например, I need help — «Мне нужна помощь». Некоторые глаголы могут иметь и значение действия: I'm thinking about the question — «Я обдумываю вопрос». Поэтому нельзя считать каждый такой глагол полностью запрещённым в Continuous.",
    "figures": [
      {
        "src": "assets/grammar/present-continuous-now/r04-v03.png",
        "alt": "Девушка бежит по дорожке в парке.",
        "captions": [
          [
            "She is running.",
            "Она бежит."
          ],
          [
            "I need help now.",
            "Мне сейчас нужна помощь."
          ]
        ]
      }
    ]
  }
];
  const intro = [{
    title:'Что такое Continuous?',
    text:'Continuous — это форма английского глагола, которая помогает показать действие в процессе. Чтобы её построить, перед глаголом ставим am, is, are, was или were, а к самому глаголу добавляем -ing. Например: She is reading — она сейчас читает; She was reading — она читала в какой-то момент в прошлом.'
  }, {
    title:'Состояние или действие?',
    text:'Один и тот же глагол может обозначать состояние или действие — в зависимости от смысла. Когда говорим о состоянии или мнении, обычно используем глагол без окончания -ing: I think this is a good idea — Я считаю, что это хорошая идея. Когда говорим о действии в процессе, можем поставить am / is / are или was / were перед глаголом и добавить к нему -ing: I’m thinking about your idea — Я обдумываю твою идею. Ниже ты увидишь другие примеры.'
  }];
  cards[0].sections = [
    {title:'Когда говорим о настоящем', text:'Present означает «настоящее». Present Continuous помогает сказать, что действие происходит прямо сейчас, в момент речи. Представь фотографию происходящего. Слова-подсказки: now — сейчас, at the moment — в данный момент.'},
    {title:'Как построить', formula:'кто? + am / is / are + действие с -ing', text:'Выбери am, is или are в зависимости от того, о ком или о чём говоришь. I — я; he — он; she — она; it — оно; you — ты или вы; we — мы; they — они. С одним человеком или предметом ставим is, с несколькими — are.', chips:[['I','am'],['he / she / it','is'],['you / we / they','are']]},
    {title:'Как сказать «не»', formula:'кто? + am / is / are + not + действие с -ing', text:'Чтобы сказать, что действие не происходит, поставь not после am, is или are.'}
  ];
  cards[1].sections = [
    {title:'Когда говорим о прошлом', text:'Past означает «прошедшее». Past Continuous показывает действие в процессе в определённый момент прошлого. Мы словно рассматриваем кадр из прошлого: сама форма не говорит, когда действие началось или закончилось. Можно назвать момент: at three yesterday — вчера в три, или период: all morning — всё утро.'},
    {title:'Как построить', formula:'кто? + was / were + действие с -ing', text:'Выбери was или were в зависимости от того, о ком или о чём говоришь.', chips:[['I / he / she / it','was'],['you / we / they','were']]},
    {title:'Как сказать «не»', formula:"кто? + was not / were not + действие с -ing", text:"Поставь not после was или were. Сокращённые формы: was not → wasn't, were not → weren't."}
  ];
  cards[2].sections = [
    {title:'Вопрос с ответом «да» или «нет»', text:'Поставь am, is, are, was или were перед тем, о ком спрашиваешь. Слово, обозначающее действие, оставь с -ing. Например: Is she painting? — Она рисует?', formula:'am / is / are / was / were + кто? + действие с -ing?'},
    {title:'Вопрос со словом «что», «где» или «почему»', text:'Сначала поставь вопросительное слово, затем am, is, are, was или were. Например: What are you doing? — Что ты сейчас делаешь? What were you doing? — Что ты делал в тот момент?', formula:'вопросительное слово + am / is / are / was / were + кто? + действие с -ing?'},
    {title:'Краткие ответы', text:"В коротком ответе повтори am, is, are, was или were из вопроса: Yes, I am. / No, I'm not. Yes, she is. / No, she isn't. Yes, they were. / No, they weren't. После Yes не сокращай is или are: говорим Yes, she is, а не Yes, she's."}
  ];
  cards[3].sections = [
    {title:'Как добавить -ing', text:'Обычно просто добавляем -ing: play → playing. Если слово заканчивается на e, которая не произносится, убираем её: make → making. Если слово заканчивается на ie, меняем ie на y: lie → lying. В некоторых коротких словах последняя согласная удваивается: run → running, sit → sitting. Буквы w, x и y в конце не удваиваются: snow → snowing, mix → mixing.'},
    {title:'Состояние или действие?', text:"Один и тот же глагол может обозначать состояние или действие — в зависимости от смысла. Слова know — знать, need — нуждаться, want — хотеть, like — нравиться обычно называют состояние. В таком значении мы обычно не добавляем к ним -ing и не строим с ними форму Continuous. Например: I need help — Мне нужна помощь. Некоторые глаголы могут обозначать действие: I'm thinking about the question — Я обдумываю вопрос. Поэтому один и тот же глагол может использоваться по-разному."},
    {title:'Сравни значения', pairs:[
      {left:['I think this is a good idea','Я считаю, что это хорошая идея'],right:['I’m thinking about your idea','Я обдумываю твою идею'],focus:['think','thinking'],note:'Здесь think выражает мнение, а thinking — процесс обдумывания.'},
      {left:['She has a car','У неё есть машина'],right:['She’s having lunch','Она сейчас обедает'],focus:['has','having'],note:'Has говорит о том, что машина ей принадлежит; having lunch — о действии: она обедает.'},
      {left:['I see a bird','Я вижу птицу'],right:['I’m seeing my doctor tomorrow','Завтра я встречаюсь с врачом'],focus:['see','seeing'],note:'See здесь означает «вижу»; seeing — «встречаюсь». Во втором примере форма с -ing показывает запланированную встречу в будущем.'},
      {left:['The soup tastes good','Суп вкусный'],right:['He’s tasting the soup','Он пробует суп'],focus:['tastes','tasting'],note:'Tastes описывает вкус супа; tasting — действие: он пробует суп.'},
      {left:['He is quiet','Он спокойный'],right:['He is being quiet today','Сегодня он ведёт себя тихо'],focus:['is','is being'],note:'Is quiet описывает человека; is being quiet today — то, как он ведёт себя сегодня.'}
    ], text:'Посмотри на смысл: слева речь о состоянии, мнении или признаке; справа — о действии, встрече или поведении. Состояние обычно выражаем без формы с -ing; действие или процесс можем показать с её помощью. Глагол be может встречаться и без -ing: например, He is quiet — Он спокойный.'}
  ];
  const exercises = [
  {
    "id": "present-continuous-now-C01",
    "mode": "choice",
    "instruction": "Выбери ответ",
    "material": "I ___ lunch right now.",
    "translation": "",
    "answer": "am eating",
    "explain_skip": true,
    "answers": [
      "am eating"
    ],
    "options": [
      "am eating",
      "is eating",
      "eating"
    ],
    "choice_feedback": {
      "is eating": "с I нужна am",
      "eating": "без am форма неполная"
    },
    "feedback_explanation": "Верный ответ: am eating.",
    "correct_sentence": "I am eating lunch right now.",
    "correct_display": "I am eating lunch right now."
  },
  {
    "id": "present-continuous-now-C02",
    "mode": "choice",
    "instruction": "Выбери ответ",
    "material": "The dogs ___ in the garden at the moment.",
    "translation": "",
    "answer": "are playing",
    "explain_skip": true,
    "answers": [
      "are playing"
    ],
    "options": [
      "are playing",
      "is playing",
      "are play"
    ],
    "choice_feedback": {
      "is playing": "dogs — множественное число, нужна are",
      "are play": "нужна форма playing"
    },
    "feedback_explanation": "Верный ответ: are playing.",
    "correct_sentence": "The dogs are playing in the garden at the moment.",
    "correct_display": "The dogs are playing in the garden at the moment."
  },
  {
    "id": "present-continuous-now-C03",
    "mode": "choice",
    "instruction": "Выбери ответ",
    "material": "My sister ___ TV now.",
    "translation": "",
    "answer": "isn't watching",
    "explain_skip": true,
    "answers": [
      "isn't watching"
    ],
    "options": [
      "isn't watching",
      "aren't watching",
      "isn't watch"
    ],
    "choice_feedback": {
      "aren't watching": "sister — единственное число, нужна is",
      "isn't watch": "после isn't нужна форма watching"
    },
    "feedback_explanation": "Верный ответ: isn't watching.",
    "correct_sentence": "My sister isn't watching TV now.",
    "correct_display": "My sister isn't watching TV now."
  },
  {
    "id": "present-continuous-now-C04",
    "mode": "choice",
    "instruction": "Выбери ответ",
    "material": "We ___ dinner right now.",
    "translation": "",
    "answer": "are cooking",
    "explain_skip": true,
    "answers": [
      "are cooking"
    ],
    "options": [
      "are cooking",
      "am cooking",
      "are cook"
    ],
    "choice_feedback": {
      "am cooking": "с we нужна are",
      "are cook": "после are нужна форма cooking"
    },
    "feedback_explanation": "Верный ответ: are cooking.",
    "correct_sentence": "We are cooking dinner right now.",
    "correct_display": "We are cooking dinner right now."
  },
  {
    "id": "present-continuous-now-C05",
    "mode": "choice",
    "instruction": "Выбери ответ",
    "material": "At 8 yesterday, I ___ breakfast.",
    "translation": "",
    "answer": "was having",
    "explain_skip": true,
    "answers": [
      "was having"
    ],
    "options": [
      "was having",
      "were having",
      "was have"
    ],
    "choice_feedback": {
      "were having": "с I в прошлом нужна was",
      "was have": "после was нужна форма having"
    },
    "feedback_explanation": "Верный ответ: was having.",
    "correct_sentence": "At 8 yesterday, I was having breakfast.",
    "correct_display": "At 8 yesterday, I was having breakfast."
  },
  {
    "id": "present-continuous-now-C06",
    "mode": "choice",
    "instruction": "Выбери ответ",
    "material": "At noon yesterday, the children ___ in the park.",
    "translation": "",
    "answer": "were running",
    "explain_skip": true,
    "answers": [
      "were running"
    ],
    "options": [
      "were running",
      "was running",
      "were run"
    ],
    "choice_feedback": {
      "was running": "children — множественное число, нужна were",
      "were run": "нужна форма running"
    },
    "feedback_explanation": "Верный ответ: were running.",
    "correct_sentence": "At noon yesterday, the children were running in the park.",
    "correct_display": "At noon yesterday, the children were running in the park."
  },
  {
    "id": "present-continuous-now-C07",
    "mode": "choice",
    "instruction": "Выбери ответ",
    "material": "At five yesterday, he ___; he was asleep.",
    "translation": "",
    "answer": "wasn't working",
    "explain_skip": true,
    "answers": [
      "wasn't working"
    ],
    "options": [
      "wasn't working",
      "weren't working",
      "wasn't work"
    ],
    "choice_feedback": {
      "weren't working": "с he нужна was",
      "wasn't work": "после wasn't нужна форма working"
    },
    "feedback_explanation": "Верный ответ: wasn't working.",
    "correct_sentence": "At five yesterday, he wasn't working; he was asleep.",
    "correct_display": "At five yesterday, he wasn't working; he was asleep."
  },
  {
    "id": "present-continuous-now-C08",
    "mode": "choice",
    "instruction": "Выбери ответ",
    "material": "Yesterday at six, we ___ on the bus.",
    "translation": "",
    "answer": "were sitting",
    "explain_skip": true,
    "answers": [
      "were sitting"
    ],
    "options": [
      "were sitting",
      "are sitting",
      "were sit"
    ],
    "choice_feedback": {
      "are sitting": "yesterday at six указывает на прошлое",
      "were sit": "нужна форма sitting"
    },
    "feedback_explanation": "Верный ответ: were sitting.",
    "correct_sentence": "Yesterday at six, we were sitting on the bus.",
    "correct_display": "Yesterday at six, we were sitting on the bus."
  },
  {
    "id": "present-continuous-now-C09",
    "mode": "choice",
    "instruction": "Выбери ответ",
    "material": "___ she sleeping now?",
    "translation": "",
    "answer": "Is",
    "explain_skip": true,
    "answers": [
      "Is"
    ],
    "options": [
      "Is",
      "Are",
      "Does"
    ],
    "choice_feedback": {
      "Are": "с she нужна is",
      "Does": "в Continuous вопрос строится с be"
    },
    "feedback_explanation": "Верный ответ: Is.",
    "correct_sentence": "Is she sleeping now?",
    "correct_display": "Is she sleeping now?"
  },
  {
    "id": "present-continuous-now-C10",
    "mode": "choice",
    "instruction": "Выбери ответ",
    "material": "Where ___ they going at the moment?",
    "translation": "",
    "answer": "are",
    "explain_skip": true,
    "answers": [
      "are"
    ],
    "options": [
      "are",
      "is",
      "do"
    ],
    "choice_feedback": {
      "is": "с they нужна are",
      "do": "для процесса нужна are"
    },
    "feedback_explanation": "Верный ответ: are.",
    "correct_sentence": "Where are they going at the moment?",
    "correct_display": "Where are they going at the moment?"
  },
  {
    "id": "present-continuous-now-C11",
    "mode": "choice",
    "instruction": "Выбери ответ",
    "material": "___ you working at 9 yesterday?",
    "translation": "",
    "answer": "Were",
    "explain_skip": true,
    "answers": [
      "Were"
    ],
    "options": [
      "Were",
      "Was",
      "Are"
    ],
    "choice_feedback": {
      "Was": "с you в прошлом нужна were",
      "Are": "yesterday задаёт прошлое"
    },
    "feedback_explanation": "Верный ответ: Were.",
    "correct_sentence": "Were you working at 9 yesterday?",
    "correct_display": "Were you working at 9 yesterday?"
  },
  {
    "id": "present-continuous-now-C12",
    "mode": "choice",
    "instruction": "Выбери ответ",
    "material": "Was he reading? — Yes, he ___.",
    "translation": "",
    "answer": "was",
    "explain_skip": true,
    "answers": [
      "was"
    ],
    "options": [
      "was",
      "were",
      "did"
    ],
    "choice_feedback": {
      "were": "с he нужна was",
      "did": "краткий ответ повторяет was"
    },
    "feedback_explanation": "Верный ответ: was.",
    "correct_sentence": "Was he reading? — Yes, he was.",
    "correct_display": "Was he reading? — Yes, he was."
  },
  {
    "id": "present-continuous-now-C13",
    "mode": "choice",
    "instruction": "Выбери ответ",
    "material": "Are the children playing? — No, they ___.",
    "translation": "",
    "answer": "aren't",
    "explain_skip": true,
    "answers": [
      "aren't"
    ],
    "options": [
      "aren't",
      "isn't",
      "don't"
    ],
    "choice_feedback": {
      "isn't": "с they нужна are",
      "don't": "краткий ответ повторяет are"
    },
    "feedback_explanation": "Верный ответ: aren't.",
    "correct_sentence": "Are the children playing? — No, they aren't.",
    "correct_display": "Are the children playing? — No, they aren't."
  },
  {
    "id": "present-continuous-now-C14",
    "mode": "choice",
    "instruction": "Выбери ответ",
    "material": "Выбери правильное написание: make + ing.",
    "translation": "",
    "answer": "making",
    "explain_skip": true,
    "answers": [
      "making"
    ],
    "options": [
      "making",
      "makeing",
      "makking"
    ],
    "choice_feedback": {
      "makeing": "немая e убирается",
      "makking": "согласная здесь не удваивается"
    },
    "feedback_explanation": "Верный ответ: making.",
    "correct_sentence": "Выбери правильное написание: make + ing.",
    "correct_display": "Выбери правильное написание: make + ing."
  },
  {
    "id": "present-continuous-now-C15",
    "mode": "choice",
    "instruction": "Выбери ответ",
    "material": "Выбери правильное написание: run + ing.",
    "translation": "",
    "answer": "running",
    "explain_skip": true,
    "answers": [
      "running"
    ],
    "options": [
      "running",
      "runing",
      "runeing"
    ],
    "choice_feedback": {
      "runing": "в run конечная n удваивается",
      "runeing": "лишняя e"
    },
    "feedback_explanation": "Верный ответ: running.",
    "correct_sentence": "Выбери правильное написание: run + ing.",
    "correct_display": "Выбери правильное написание: run + ing."
  },
  {
    "id": "present-continuous-now-C16",
    "mode": "choice",
    "instruction": "Выбери ответ",
    "material": "Как сказать «Я сейчас знаю ответ»?",
    "translation": "",
    "answer": "I know the answer now.",
    "explain_skip": true,
    "answers": [
      "I know the answer now."
    ],
    "options": [
      "I know the answer now.",
      "I am knowing the answer now",
      "I knowing the answer now"
    ],
    "choice_feedback": {
      "I am knowing the answer now": "know в этом значении выражает состояние",
      "I knowing the answer now": "форма неполная, а know здесь не ставится в Continuous"
    },
    "feedback_explanation": "Верный ответ: I know the answer now..",
    "correct_sentence": "Как сказать «Я сейчас знаю ответ»?",
    "correct_display": "Как сказать «Я сейчас знаю ответ»?"
  },
  {
    "id": "present-continuous-now-F01",
    "mode": "gap",
    "instruction": "Впиши ответ",
    "material": "She ___ drawing a flower now.",
    "translation": "",
    "answer": "is",
    "explain_skip": true,
    "answers": [
      "is"
    ],
    "feedback_explanation": "С she используется is.",
    "correct_sentence": "She is drawing a flower now.",
    "correct_display": "She is drawing a flower now."
  },
  {
    "id": "present-continuous-now-F02",
    "mode": "gap",
    "instruction": "Впиши ответ",
    "material": "I ___ listening to music at the moment.",
    "translation": "",
    "answer": "am",
    "explain_skip": true,
    "answers": [
      "am"
    ],
    "feedback_explanation": "С I используется am.",
    "correct_sentence": "I am listening to music at the moment.",
    "correct_display": "I am listening to music at the moment."
  },
  {
    "id": "present-continuous-now-F03",
    "mode": "gap",
    "instruction": "Впиши ответ",
    "material": "You ___ wearing a blue coat now.",
    "translation": "",
    "answer": "are",
    "explain_skip": true,
    "answers": [
      "are"
    ],
    "feedback_explanation": "С you используется are.",
    "correct_sentence": "You are wearing a blue coat now.",
    "correct_display": "You are wearing a blue coat now."
  },
  {
    "id": "present-continuous-now-F04",
    "mode": "gap",
    "instruction": "Впиши ответ",
    "material": "He is ___ a letter now. (write)",
    "translation": "",
    "answer": "writing",
    "explain_skip": true,
    "answers": [
      "writing"
    ],
    "feedback_explanation": "У write убираем немую e перед -ing.",
    "correct_sentence": "He is writing a letter now.",
    "correct_display": "He is writing a letter now."
  },
  {
    "id": "present-continuous-now-F05",
    "mode": "gap",
    "instruction": "Впиши ответ",
    "material": "I ___ cleaning my room at 10 yesterday.",
    "translation": "",
    "answer": "was",
    "explain_skip": true,
    "answers": [
      "was"
    ],
    "feedback_explanation": "С I в Past Continuous используется was.",
    "correct_sentence": "I was cleaning my room at 10 yesterday.",
    "correct_display": "I was cleaning my room at 10 yesterday."
  },
  {
    "id": "present-continuous-now-F06",
    "mode": "gap",
    "instruction": "Впиши ответ",
    "material": "The girls ___ dancing at the party at 8 yesterday.",
    "translation": "",
    "answer": "were",
    "explain_skip": true,
    "answers": [
      "were"
    ],
    "feedback_explanation": "Girls — множественное число, поэтому were.",
    "correct_sentence": "The girls were dancing at the party at 8 yesterday.",
    "correct_display": "The girls were dancing at the party at 8 yesterday."
  },
  {
    "id": "present-continuous-now-F07",
    "mode": "gap",
    "instruction": "Впиши ответ",
    "material": "She was ___ on the sofa at noon yesterday. (sit)",
    "translation": "",
    "answer": "sitting",
    "explain_skip": true,
    "answers": [
      "sitting"
    ],
    "feedback_explanation": "В sit конечная t удваивается перед -ing.",
    "correct_sentence": "She was sitting on the sofa at noon yesterday.",
    "correct_display": "She was sitting on the sofa at noon yesterday."
  },
  {
    "id": "present-continuous-now-F08",
    "mode": "gap",
    "instruction": "Впиши ответ",
    "material": "They were ___ lunch at one yesterday. (have)",
    "translation": "",
    "answer": "having",
    "explain_skip": true,
    "answers": [
      "having"
    ],
    "feedback_explanation": "У have убираем немую e перед -ing.",
    "correct_sentence": "They were having lunch at one yesterday.",
    "correct_display": "They were having lunch at one yesterday."
  },
  {
    "id": "present-continuous-now-F09",
    "mode": "gap",
    "instruction": "Впиши ответ",
    "material": "___ he cooking now?",
    "translation": "",
    "answer": "Is",
    "explain_skip": true,
    "answers": [
      "Is"
    ],
    "feedback_explanation": "В вопросе с he используется is перед подлежащим.",
    "correct_sentence": "Is he cooking now?",
    "correct_display": "Is he cooking now?"
  },
  {
    "id": "present-continuous-now-F10",
    "mode": "gap",
    "instruction": "Впиши ответ",
    "material": "What ___ you doing now?",
    "translation": "",
    "answer": "are",
    "explain_skip": true,
    "answers": [
      "are"
    ],
    "feedback_explanation": "С you в настоящем используется are.",
    "correct_sentence": "What are you doing now?",
    "correct_display": "What are you doing now?"
  },
  {
    "id": "present-continuous-now-F11",
    "mode": "gap",
    "instruction": "Впиши ответ",
    "material": "___ she sleeping at 11 last night?",
    "translation": "",
    "answer": "Was",
    "explain_skip": true,
    "answers": [
      "Was"
    ],
    "feedback_explanation": "С she в прошедшем нужна was перед подлежащим.",
    "correct_sentence": "Was she sleeping at 11 last night?",
    "correct_display": "Was she sleeping at 11 last night?"
  },
  {
    "id": "present-continuous-now-F12",
    "mode": "gap",
    "instruction": "Впиши ответ",
    "material": "Why ___ they laughing at that moment yesterday?",
    "translation": "",
    "answer": "were",
    "explain_skip": true,
    "answers": [
      "were"
    ],
    "feedback_explanation": "С they в прошедшем нужна were.",
    "correct_sentence": "Why were they laughing at that moment yesterday?",
    "correct_display": "Why were they laughing at that moment yesterday?"
  },
  {
    "id": "present-continuous-now-F13",
    "mode": "gap",
    "instruction": "Впиши ответ",
    "material": "Were you studying at 7? — Yes, I ___.",
    "translation": "",
    "answer": "was",
    "explain_skip": true,
    "answers": [
      "was"
    ],
    "feedback_explanation": "Краткий ответ с I в прошлом: Yes, I was.",
    "correct_sentence": "Were you studying at 7? — Yes, I was.",
    "correct_display": "Were you studying at 7? — Yes, I was."
  },
  {
    "id": "present-continuous-now-F14",
    "mode": "gap",
    "instruction": "Впиши ответ",
    "material": "It is ___ outside now. (snow)",
    "translation": "",
    "answer": "snowing",
    "explain_skip": true,
    "answers": [
      "snowing"
    ],
    "feedback_explanation": "Конечная w не удваивается.",
    "correct_sentence": "It is snowing outside now.",
    "correct_display": "It is snowing outside now."
  },
  {
    "id": "present-continuous-now-F15",
    "mode": "gap",
    "instruction": "Впиши ответ",
    "material": "The cook is ___ the sauce now. (mix)",
    "translation": "",
    "answer": "mixing",
    "explain_skip": true,
    "answers": [
      "mixing"
    ],
    "feedback_explanation": "Конечная x не удваивается.",
    "correct_sentence": "The cook is mixing the sauce now.",
    "correct_display": "The cook is mixing the sauce now."
  },
  {
    "id": "present-continuous-now-F16",
    "mode": "gap",
    "instruction": "Впиши ответ",
    "material": "The dog is ___ on the floor now. (lie)",
    "translation": "",
    "answer": "lying",
    "explain_skip": true,
    "answers": [
      "lying"
    ],
    "feedback_explanation": "В lie сочетание ie меняется на y перед -ing.",
    "correct_sentence": "The dog is lying on the floor now.",
    "correct_display": "The dog is lying on the floor now."
  },
  {
    "id": "present-continuous-now-T01",
    "mode": "full",
    "instruction": "Переведи предложение на английский",
    "material": "Она сейчас читает книгу.",
    "translation": "",
    "answer": "She is reading a book now",
    "explain_skip": true,
    "answers": [
      "She is reading a book now",
      "She's reading a book now"
    ],
    "full_translation_prompt": "Она сейчас читает книгу.",
    "full_translation_answer": "She is reading a book now",
    "full_translation_accepted_answers": [
      "She's reading a book now"
    ],
    "feedback_explanation": "She требует is, а read получает -ing.",
    "correct_sentence": "She is reading a book now.",
    "correct_display": "She is reading a book now."
  },
  {
    "id": "present-continuous-now-T02",
    "mode": "full",
    "instruction": "Переведи предложение на английский",
    "material": "Мы сейчас не смотрим телевизор.",
    "translation": "",
    "answer": "We are not watching TV now",
    "explain_skip": true,
    "answers": [
      "We are not watching TV now",
      "We aren't watching TV now",
      "We're not watching TV now"
    ],
    "full_translation_prompt": "Мы сейчас не смотрим телевизор.",
    "full_translation_answer": "We are not watching TV now",
    "full_translation_accepted_answers": [
      "We aren't watching TV now",
      "We're not watching TV now"
    ],
    "feedback_explanation": "Для отрицания с we используем are not + watching.",
    "correct_sentence": "We are not watching TV now.",
    "correct_display": "We are not watching TV now."
  },
  {
    "id": "present-continuous-now-T03",
    "mode": "full",
    "instruction": "Переведи предложение на английский",
    "material": "Я сейчас пишу письмо.",
    "translation": "",
    "answer": "I am writing a letter now",
    "explain_skip": true,
    "answers": [
      "I am writing a letter now",
      "I'm writing a letter now"
    ],
    "full_translation_prompt": "Я сейчас пишу письмо.",
    "full_translation_answer": "I am writing a letter now",
    "full_translation_accepted_answers": [
      "I'm writing a letter now"
    ],
    "feedback_explanation": "С I нужна am; write превращается в writing.",
    "correct_sentence": "I am writing a letter now.",
    "correct_display": "I am writing a letter now."
  },
  {
    "id": "present-continuous-now-T04",
    "mode": "full",
    "instruction": "Переведи предложение на английский",
    "material": "Вчера в три я готовила ужин.",
    "translation": "",
    "answer": "I was cooking dinner at three yesterday",
    "explain_skip": true,
    "answers": [
      "I was cooking dinner at three yesterday",
      "At three yesterday I was cooking dinner"
    ],
    "full_translation_prompt": "Вчера в три я готовила ужин.",
    "full_translation_answer": "I was cooking dinner at three yesterday",
    "full_translation_accepted_answers": [
      "At three yesterday I was cooking dinner"
    ],
    "feedback_explanation": "Момент в прошлом: I was + cooking.",
    "correct_sentence": "I was cooking dinner at three yesterday.",
    "correct_display": "I was cooking dinner at three yesterday."
  },
  {
    "id": "present-continuous-now-T05",
    "mode": "full",
    "instruction": "Переведи предложение на английский",
    "material": "Вчера в восемь они не спали.",
    "translation": "",
    "answer": "They were not sleeping at eight yesterday",
    "explain_skip": true,
    "answers": [
      "They were not sleeping at eight yesterday",
      "They weren't sleeping at eight yesterday",
      "At eight yesterday they weren't sleeping"
    ],
    "full_translation_prompt": "Вчера в восемь они не спали.",
    "full_translation_answer": "They were not sleeping at eight yesterday",
    "full_translation_accepted_answers": [
      "They weren't sleeping at eight yesterday",
      "At eight yesterday they weren't sleeping"
    ],
    "feedback_explanation": "С they в отрицании используем were not + sleeping.",
    "correct_sentence": "They were not sleeping at eight yesterday.",
    "correct_display": "They were not sleeping at eight yesterday."
  },
  {
    "id": "present-continuous-now-T06",
    "mode": "full",
    "instruction": "Переведи предложение на английский",
    "material": "Вчера в пять он работал.",
    "translation": "",
    "answer": "He was working at five yesterday",
    "explain_skip": true,
    "answers": [
      "He was working at five yesterday",
      "At five yesterday he was working"
    ],
    "full_translation_prompt": "Вчера в пять он работал.",
    "full_translation_answer": "He was working at five yesterday",
    "full_translation_accepted_answers": [
      "At five yesterday he was working"
    ],
    "feedback_explanation": "С he для процесса в прошлом нужна was.",
    "correct_sentence": "He was working at five yesterday.",
    "correct_display": "He was working at five yesterday."
  },
  {
    "id": "present-continuous-now-T07",
    "mode": "full",
    "instruction": "Переведи предложение на английский",
    "material": "Ты сейчас слушаешь?",
    "translation": "",
    "answer": "Are you listening now",
    "explain_skip": true,
    "answers": [
      "Are you listening now"
    ],
    "full_translation_prompt": "Ты сейчас слушаешь?",
    "full_translation_answer": "Are you listening now",
    "full_translation_accepted_answers": [],
    "feedback_explanation": "Вопрос с you начинается с are, затем подлежащее и listening.",
    "correct_sentence": "Are you listening now.",
    "correct_display": "Are you listening now."
  },
  {
    "id": "present-continuous-now-T08",
    "mode": "full",
    "instruction": "Переведи предложение на английский",
    "material": "Что она сейчас делает?",
    "translation": "",
    "answer": "What is she doing now",
    "explain_skip": true,
    "answers": [
      "What is she doing now",
      "What's she doing now"
    ],
    "full_translation_prompt": "Что она сейчас делает?",
    "full_translation_answer": "What is she doing now",
    "full_translation_accepted_answers": [
      "What's she doing now"
    ],
    "feedback_explanation": "После What используем is, затем she и doing.",
    "correct_sentence": "What is she doing now.",
    "correct_display": "What is she doing now."
  },
  {
    "id": "present-continuous-now-T09",
    "mode": "full",
    "instruction": "Переведи предложение на английский",
    "material": "Они играли вчера в шесть?",
    "translation": "",
    "answer": "Were they playing at six yesterday",
    "explain_skip": true,
    "answers": [
      "Were they playing at six yesterday"
    ],
    "full_translation_prompt": "Они играли вчера в шесть?",
    "full_translation_answer": "Were they playing at six yesterday",
    "full_translation_accepted_answers": [],
    "feedback_explanation": "В вопросе о прошлом were стоит перед they.",
    "correct_sentence": "Were they playing at six yesterday.",
    "correct_display": "Were they playing at six yesterday."
  },
  {
    "id": "present-continuous-now-T10",
    "mode": "full",
    "instruction": "Переведи предложение на английский",
    "material": "Что ты делала вчера в девять?",
    "translation": "",
    "answer": "What were you doing at nine yesterday",
    "explain_skip": true,
    "answers": [
      "What were you doing at nine yesterday"
    ],
    "full_translation_prompt": "Что ты делала вчера в девять?",
    "full_translation_answer": "What were you doing at nine yesterday",
    "full_translation_accepted_answers": [],
    "feedback_explanation": "Вопросительное слово, were, you и doing.",
    "correct_sentence": "What were you doing at nine yesterday.",
    "correct_display": "What were you doing at nine yesterday."
  },
  {
    "id": "present-continuous-now-T11",
    "mode": "full",
    "instruction": "Переведи предложение на английский",
    "material": "Мне сейчас нужна помощь.",
    "translation": "",
    "answer": "I need help now",
    "explain_skip": true,
    "answers": [
      "I need help now"
    ],
    "full_translation_prompt": "Мне сейчас нужна помощь.",
    "full_translation_answer": "I need help now",
    "full_translation_accepted_answers": [],
    "feedback_explanation": "Need в значении потребности обычно выражает состояние и не используется здесь в Continuous.",
    "correct_sentence": "I need help now.",
    "correct_display": "I need help now."
  },
  {
    "id": "present-continuous-now-T12",
    "mode": "full",
    "instruction": "Переведи предложение на английский",
    "material": "Он сейчас бежит.",
    "translation": "",
    "answer": "He is running now",
    "explain_skip": true,
    "answers": [
      "He is running now",
      "He's running now"
    ],
    "full_translation_prompt": "Он сейчас бежит.",
    "full_translation_answer": "He is running now",
    "full_translation_accepted_answers": [
      "He's running now"
    ],
    "feedback_explanation": "С he нужна is; в run удваивается n.",
    "correct_sentence": "He is running now.",
    "correct_display": "He is running now."
  }
];
  // В практике убираем только завершающую точку, не меняя данные для проверки ответов.
  const withoutFinalDot = value => typeof value === 'string' ? value.replace(/\.(?=\s*(?:\([^()]+\))?\s*$)/, '') : value;
  for (const q of exercises) {
    for (const key of ['material','translation','correct_sentence','correct_display','full_translation_prompt','feedback_explanation']) q[key] = withoutFinalDot(q[key]);
    if (q.options) q.options = q.options.map(withoutFinalDot);
    if (q.choice_feedback) q.choice_feedback = Object.fromEntries(Object.entries(q.choice_feedback).map(([key,value]) => [withoutFinalDot(key), withoutFinalDot(value)]));
  }
  // Варианты ответа расположены в разном порядке.
  let choiceIndex = 0;
  for (const q of exercises.filter(q => q.mode === 'choice')) {
    const n = choiceIndex++ % q.options.length;
    q.options = q.options.slice(n).concat(q.options.slice(0, n));
    if (!q.material.includes('___')) q.correct_display = q.correct_sentence = withoutFinalDot(q.answer);
  }
  // Допускаем распространённые порядки обстоятельства времени, числа и сокращения.
  for (const q of exercises.filter(q => q.mode === 'full')) {
    const variants = new Set([q.full_translation_answer, ...q.full_translation_accepted_answers]);
    for (const v of [...variants]) {
      if (v.endsWith(' now')) {
        const stem = v.slice(0, -4);
        for (const time of ['now', 'right now', 'at the moment']) {
          variants.add(stem + ' ' + time); variants.add(time + ', ' + stem); variants.add(time + ' ' + stem);
        }
      }
      const m = v.match(/^(.*) at (three|five|six|eight|nine) yesterday$/i);
      if (m) {
        const n = {three:'3',five:'5',six:'6',eight:'8',nine:'9'}[m[2].toLowerCase()];
        for (const time of [m[2], n]) for (const phrase of ['at '+time+' yesterday','yesterday at '+time]) {
          variants.add(m[1]+' '+phrase); variants.add(phrase+', '+m[1]); variants.add(phrase+' '+m[1]);
        }
      }
    }
    for (const v of [...variants]) {
      variants.add(v.replace(/\bI am\b/i, "I'm").replace(/\bShe is\b/i, "She's").replace(/\bHe is\b/i, "He's").replace(/\bWe are not\b/i, "We aren't").replace(/\bThey were not\b/i, "They weren't").replace(/\bWhat is\b/i, "What's"));
      variants.add(v.replace(/\bWe are not\b/i, "We're not"));
    }
    q.full_translation_accepted_answers = [...variants].filter(v => v !== q.full_translation_answer);
  }
  window.TRAINING_TOPICS.push({id:"present-continuous-now",title:"Present и Past Continuous",intro,description:"Действия сейчас и в прошлом",words:["am","is","are","was","were"],cards,exercises});
})();
