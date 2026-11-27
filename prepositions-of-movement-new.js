(() => {
  const base = 'assets/grammar/prepositions-of-movement-new/';
  const data = [
    ['Внутрь и наружу: into / out of', 'Предлог связывает движение с местом: показывает, куда или откуда направлено действие. Into означает движение снаружи внутрь, out of — изнутри наружу.', 'In обычно описывает положение внутри: The kitten is in the room — Котёнок находится в комнате. Into показывает пересечение границы.', 'Котёнок входит в комнату', 'The kitten walks into the room', 'Котёнок входит в комнату', 'The kitten walks out of the room — Котёнок выходит из комнаты'],
    ['К цели и от неё: to / from / towards', 'To указывает пункт назначения, from — исходную точку. Towards (toward — вариант написания) показывает направление; мы не утверждаем, что человек дошёл. To само по себе тоже не гарантирует прибытия.', 'She walks to the café — Она идёт к кафе. She walks from the café — Она идёт от кафе. Обычно говорят go home без to: I go home — Я иду домой.', 'Девушка идёт в сторону кафе', 'She walks towards the café', 'Она идёт в сторону кафе', ''],
    ['Вверх и вниз: up / down', 'Up обозначает движение вверх по поверхности или пути, down — вниз по нему.', '', 'Мужчина поднимается по лестнице', 'He walks up the stairs', 'Он поднимается по лестнице', 'He walks down the stairs — Он спускается по лестнице'],
    ['На поверхность и с неё: onto / off', 'Onto показывает движение на поверхность, off — движение с поверхности. On обычно описывает положение на ней.', 'The kitten is on the sofa — Котёнок находится на диване.', 'Котёнок запрыгивает на диван', 'The kitten jumps onto the sofa', 'Котёнок запрыгивает на диван', 'The kitten jumps off the sofa — Котёнок спрыгивает с дивана'],
    ['Пересекая и вдоль: across / along', 'Across — поперёк пространства, с одной стороны на другую. Along — вдоль дороги, реки или другого протяжённого объекта.', 'Across the bridge показывает переход с одной стороны на другую; along the bridge подчёркивает движение вдоль моста, поэтому иногда подходят оба варианта при разном фокусе.', 'Котёнок переходит мост', 'The kitten walks across the bridge', 'Котёнок переходит мост', 'She walks along the river — Она идёт вдоль реки'],
    ['Сквозь, мимо и вокруг: through / past / around', 'Through показывает путь внутри пространства или через отверстие; past — движение мимо объекта; around — движение вокруг объекта.', 'She walks past the café — Она проходит мимо кафе. He walks around the tree — Он обходит дерево по кругу. Around может означать движение в окрестностях, но здесь речь о пути вокруг объекта.', 'Котёнок проходит через тоннель', 'The kitten runs through the tunnel', 'Котёнок пробегает через тоннель', '']
  ];
  const cards=data.map(([title,text,extra,alt,en,ru,example],i)=>({id:`PM-R0${i+1}`,title,sections:[{title:'Когда используем',text},...(extra?[{title:'Обрати внимание',text:extra}]:[]),...(example?[{title:'Ещё пример',text:example}]:[])],figures:[{src:base+`r0${i+1}.png`,alt,captions:[[en,ru]]}]}));
  const rows=[
    ['choice','Котёнок снаружи и входит в комнату','The kitten walks ___ the room',['into'],['into','out of','past'],'Into показывает движение внутрь',['Out of означает движение наружу','Past означает движение мимо']],
    ['gap','Котёнок выходит из коробки','The kitten climbs ___ the box',['out of'],null,'Out of показывает движение изнутри наружу'],
    ['choice','Котёнок уже сидит внутри комнаты','The kitten is ___ the room',['in'],['in','into','out of'],'In показывает положение внутри',['Into показывает движение внутрь','Out of показывает движение наружу']],
    ['choice','Девушка идёт от кафе, её исходная точка — кафе','She walks ___ the café',['from'],['from','into','onto'],'From указывает исходную точку',['Into означает движение внутрь','Onto означает движение на поверхность']],
    ['gap','Девушка движется в сторону кафе, неизвестно, дойдёт ли она','She walks ___ the café',['towards','toward','to'],null,'Towards выделяет направление, to — пункт назначения; ни один не гарантирует прибытия'],
    ['full','Я иду домой','',['I am going home',"I'm going home",'I go home'],null,'Перед home в значении «домой» to не ставится'],
    ['choice','Мужчина поднимается по лестнице','He walks ___ the stairs',['up'],['up','down','out of'],'Up показывает движение вверх',['Down означает движение вниз','Out of означает движение изнутри наружу']],
    ['gap','Девушка спускается по лестнице','She walks ___ the stairs',['down'],null,'Down показывает движение сверху вниз'],
    ['full','Он поднимается по лестнице','',['He is walking up the stairs',"He's walking up the stairs",'He walks up the stairs'],null,'Up показывает движение вверх'],
    ['choice','Котёнок спрыгивает с дивана','The kitten jumps ___ the sofa',['off'],['off','onto','into'],'Off показывает движение с поверхности',['Onto означает движение на поверхность','Into означает движение внутрь']],
    ['gap','Котёнок прыгает на сиденье дивана','The kitten jumps ___ the sofa',['onto','on'],null,'Onto подчёркивает движение на поверхность; on также встречается после jump в таком значении'],
    ['choice','Котёнок сидит на диване','The kitten is ___ the sofa',['on'],['on','onto','off'],'On показывает положение на поверхности',['Onto показывает перемещение на поверхность','Off означает положение вне поверхности']],
    ['choice','Девушка переходит реку по мосту с одного берега на другой','She walks ___ the bridge to the other side',['across'],['across','past','out of'],'Across показывает путь с одной стороны на другую',['Past означает движение мимо','Out of означает движение изнутри наружу']],
    ['gap','Девушка идёт вдоль реки','She walks ___ the river',['along'],null,'Along показывает путь вдоль реки'],
    ['full','Она идёт вдоль реки','',['She is walking along the river',"She's walking along the river",'She walks along the river'],null,'Along означает движение вдоль'],
    ['choice','Котёнок входит в тоннель, движется внутри и выходит с другой стороны','The kitten runs ___ the tunnel',['through'],['through','past','onto'],'Through показывает путь через внутреннее пространство',['Past означает движение мимо','Onto означает движение на поверхность']],
    ['gap','Девушка проходит мимо кафе, не заходя в него','She walks ___ the café',['past'],null,'Past показывает движение мимо'],
    ['choice','Мужчина идёт по кругу вокруг дерева','He walks ___ the tree in a circle',['around'],['around','into','off'],'Around здесь показывает движение вокруг',['Into означает движение внутрь','Off означает движение с поверхности']],
    ['full','Котёнок пробегает через тоннель','',['The kitten runs through the tunnel','The kitten is running through the tunnel',"The kitten's running through the tunnel"],null,'Through показывает путь через внутреннее пространство']
  ];
  const hints={1:[['Котёнок','kitten']],2:[['Котёнок','kitten'],['коробки','box','коробка']],3:[['Котёнок','kitten']],6:[['иду','go','идти']],7:[['лестнице','stairs','лестница']],8:[['лестнице','stairs','лестница']],9:[['поднимается','walk','идти пешком'],['лестнице','stairs','лестница']],10:[['Котёнок','kitten']],11:[['Котёнок','kitten']],12:[['Котёнок','kitten']],13:[['мосту','bridge','мост'],['берега','side','сторона']],14:[['реки','river','река']],15:[['идёт','walk','идти пешком'],['реки','river','река']],16:[['Котёнок','kitten']],18:[['дерева','tree','дерево']],19:[['Котёнок','kitten'],['пробегает','run','бежать']]};
  const exercises=rows.map(([mode,context,material,answers,options,explanation,wrong],i)=>{
    const answer=answers[0], n=i+1, sentence=mode==='full'?answer:material.replace('___',answer);
    const item={id:`prepositions-of-movement-new-${n}`,mode,instruction:mode==='full'?'Переведи предложение на английский':mode==='choice'?'Выбери ответ':'Впиши ответ',material:mode==='full'?context:material,answer,answers,feedback_explanation:explanation,correct_sentence:sentence,correct_display:sentence,word_hints:hints[n]||[],explain_skip:true};
    if(mode!=='full')item.translation=context;
    if(mode==='choice'){const offset=i%options.length;item.options=options.slice(offset).concat(options.slice(0,offset));item.choice_feedback=Object.fromEntries(options.slice(1).map((option,j)=>[option,wrong[j]]));}
    if(mode==='full')Object.assign(item,{full_translation_prompt:context,full_translation_answer:answer,full_translation_accepted_answers:answers.slice(1)});
    return item;
  });
  window.TRAINING_TOPICS.push({id:'prepositions-of-movement-new',title:'Предлоги движения',description:'Направление и путь',words:['into','out of','towards','across','through'],cards,exercises});
})();
