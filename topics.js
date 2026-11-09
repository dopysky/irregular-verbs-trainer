(() => {
  'use strict';
  const KEY = 'english-topic-trainer-v1';
  const topics = window.TRAINING_TOPICS;
  const defaultTopic = topics[0];
  const findTopic = id => topics.find(topic => topic.id === id);
  const legacyPrepositions = {
    id:'prepositions',
    title:'Предлоги места и времени',
    exercises:topics.filter(topic=>topic.id.startsWith('prepositions-')).flatMap(topic=>topic.exercises)
  };
  const app = document.querySelector('#practice');
  let page={kind:'home'},state = { results: {} }, session, nextTimer = null, inputDispose=null, hintDispose=null, selectedTopic = defaultTopic.id;
  const cancelNext = () => { window.clearTimeout(nextTimer); nextTimer = null; inputDispose?.();inputDispose=null;hintDispose?.();hintDispose=null; };
  const warn = () => { document.querySelector('#storage-warning').hidden = false; };
  try {
    const saved = JSON.parse(localStorage.getItem(KEY));
    if (saved && (saved.selectedTopic==='verbs' || findTopic(saved.selectedTopic))) selectedTopic=saved.selectedTopic;
    if (saved && saved.results && typeof saved.results === 'object' && !Array.isArray(saved.results)) {
      state={...saved,results:{...saved.results}};
    }
  } catch { warn(); }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify({...state,selectedTopic})); } catch { warn(); } };
  const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const { normalize, accepts, task, explanation } = window.TrainingAnswers;
  const views=t=>t.exercises.flatMap(q=>(q.available_modes||[q.mode]).map(mode=>task(q,mode)));
  const errors = t => views(t).filter(q => state.results[q.id]?.error);
  const completed = t => t.exercises.filter(q => state.results[q.id]?.attempts && !state.results[q.id].error).length;
  const labels = { choice:'Выбери ответ', input:'Впиши ответ', translation:'Переведи предложение', context:'Примени правило' };
  const taskCount = n => `${n} ${n%100>=11&&n%100<=14?'заданий':n%10===1?'задание':n%10>=2&&n%10<=4?'задания':'заданий'}`;
  const button = (text, action, primary = false) => `<button type="button" data-action="${action}" class="${primary ? 'primary' : ''}">${text}</button>`;
  const breadcrumb = t => `<div class="practice-breadcrumb">${button('← К блокам','home')}<span aria-hidden="true">/</span><span>${esc(t.title)}</span></div>`;
  function selectNav() {}
  function show(html) {
    cancelNext();
    window.legacyTrainer.open('practice');
    app.innerHTML = html;window.PageState?.activate('topics');
    const h = app.querySelector('h2');
    if(h){ h.tabIndex = -1; h.focus({preventScroll:true}); }
    window.scrollTo({top:0,behavior:'instant'});
  }
  function refreshGlobalStats() {
    const old=window.legacyTrainer.summary();
    const grammar=topics.flatMap(t=>t.exercises), correct=grammar.filter(q=>state.results[q.id]?.attempts&&!state.results[q.id].error).length;
    const total=old.total+grammar.length, mastered=old.mastered+correct;
    const percent=Math.round(((old.progressSum??old.progress/100*old.total)+correct)/total*100);
    const set=(id,text)=>{const el=document.getElementById(id);if(el)el.textContent=text;};
    set('home-mastered-count',mastered);set('home-total-count',total);set('home-progress-percent',percent+'%');
    window.legacyTrainer.paint?.('ring-total',percent);
    const pending=topics.reduce((n,t)=>n+errors(t).length,0)+(old.due||0);
    set('due-count',pending);const review=document.getElementById('review-btn');if(review){review.disabled=!pending;review.textContent=pending?'Повторить':'Всё повторено';}
  }
  function renderDashboard() {
    window.legacyTrainer.dashboard?.();
    const old=window.legacyTrainer.summary(),t=topics.find(t=>t.id===selectedTopic);
    const name=t?.title||'Неправильные глаголы',done=t?completed(t):old.mastered,total=t?t.exercises.length:old.total;
    const p=t?Math.round(done/total*100):old.progress;
    const set=(id,text)=>{const el=document.getElementById(id);if(el)el.textContent=text;};
    set('selected-title',name);set('selected-sub',t?t.description:'Три формы, перевод и произношение');set('selected-note','Закреплено: '+done+' из '+total);
    set('selected-progress-percent',p+'%');const bar=document.getElementById('selected-bar');if(bar)bar.style.width=p+'%';
    window.legacyTrainer.paint?.('ring-selected',p);
    const action=(id,text,fn)=>{const b=document.getElementById(id);if(b){b.textContent=text;b.onclick=fn;}};
    action('continue-btn','Начать тренировку',()=>t?start(t,false):window.legacyTrainer.start());
    action('study-btn',t?'Правила и примеры':'Посмотреть слова',()=>t?navigate(t.id):navigate('verbs'));
    action('errors-btn','Мои ошибки',()=>t?(errors(t).length?start(t,true):showEmptyErrors(t)):window.legacyTrainer.open('errors'));
    const blocks=document.getElementById('blocks');
    if(blocks){blocks.innerHTML=[...topics.map(t=>({id:t.id,title:t.title,sub:t.description,words:t.words,percent:Math.round(completed(t)/t.exercises.length*100)})),{id:'verbs',title:'Неправильные глаголы',sub:'Три формы, перевод и произношение',words:['drink','drank','drunk'],percent:old.progress}].map((card,i)=>'<button type="button" class="group-card '+(selectedTopic===card.id?'selected ':'')+'" data-action="select:'+card.id+'"><div class="group-card-top"><div><div class="block-title">'+esc(card.title)+'</div><div class="block-meta">'+esc(card.sub)+'</div></div><span class="badge">'+card.percent+'%</span></div><div class="topic-word-art" aria-hidden="true">'+card.words.map(w=>'<span>'+esc(w)+'</span>').join('')+'</div><div class="progress"><div class="bar" style="width:'+card.percent+'%"></div></div></button>').join('');}
    refreshGlobalStats();
  }
  function home() { session=null;cancelNext();window.legacyTrainer.open('home'); }
  function showEmptyErrors(t) { page={kind:'empty',topic:t.id};show(breadcrumb(t)+'<section class="exercise-panel"><h2>Ошибок пока нет</h2><p>После неверного ответа задание сохранится для повторения.</p>'+button('Начать тренировку','start:'+t.id,true)+'</section>'); }
  function verbOverview() { page={kind:'verbs'};selectedTopic='verbs';save();show('<div class="practice-breadcrumb">'+button('← К блокам','home')+'</div><section class="panel"><h2>Неправильные глаголы</h2><p class="muted">Выбери группу слов для изучения и тренировки.</p><div id="verb-blocks" class="block-grid"></div></section>');window.legacyTrainer.renderGroups?.(); }
  const exampleText = ([english,translation]) =>
    `<span lang="en">${esc(english)}</span><small>${esc(translation)}</small>`;
  const sceneImage = ({src,alt}) =>
    `<img class="grammar-scene" src="${esc(src)}" alt="${esc(alt)}" loading="lazy" decoding="async">`;
  function renderFigure(figure){
    const captions=figure.captions;
    return `<figure class="grammar-figure">${sceneImage(figure)}${captions.length
      ? `<figcaption class="scene-captions" style="--caption-count:${captions.length}">${captions.map(c=>`<div>${exampleText(c)}</div>`).join('')}</figcaption>`
      : ''}</figure>`;
  }
  function renderRule(card){
    const layout=card.id==='P16'?' dinner-rule':card.figures.length>1?' rule-with-gallery':'';
    const dinner=card.id==='P16'?'<div class="dinner-frames">'+window.GrammarCards.dinnerFeedback.map(renderFigure).join('')+'</div>':'';
    return `<article class="rule-card${layout}" data-rule="${esc(card.id)}">
      <h3>${esc(card.title)}</h3>
      <div class="rule-card-body">
        <div class="rule-figures">${card.figures.map(renderFigure).join('')}</div>${dinner}
        <div class="rule-copy">
          <p>${esc(card.rule)}</p>${card.note?`<p class="rule-card-note">${esc(card.note)}</p>`:''}
          ${card.examples.length?`<ul class="rule-examples">${card.examples.map(ex=>`<li>${exampleText(ex)}</li>`).join('')}</ul>`:''}
        </div>
      </div>
    </article>`;
  }
  function detail(t) {
    page={kind:'rules',topic:t.id};
    session=null;selectedTopic=t.id;save();
    show(breadcrumb(t)+'<div class="practice-heading"><div><h2>Правила и примеры</h2><p class="muted">'+esc(t.title)+' · '+t.cards.length+' карточек</p></div>'+button('Начать практику','start:'+t.id,true)+'</div><div class="rule-list">'+t.cards.map(renderRule).join('')+'</div><div class="practice-actions">'+button('Перейти к практике →','start:'+t.id,true)+'</div>');
  }
  function start(t, review) {
    navigateHash(t.id);
    selectNav(t.id);
    const shuffle=pool=>{for(let i=pool.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]];}return pool;};
    const all=views(t),full=shuffle(all.filter(v=>v.mode==='full'&&v.source.mode!=='full')).slice(0,4);
    const used=new Set(full.map(v=>v.source.id));
    const base=shuffle(all.filter(v=>v.mode===v.source.mode&&!used.has(v.source.id)));
    const queue=review?shuffle(errors(t)).slice(0,18):shuffle([...full,...base.slice(0,18-full.length)]);
    if (!queue.length) return detail(t);
    session = { topic:t, queue, index:0, correct:0, answered:false };
    question();
  }
  function promptWithHints(q){
    const hints=q.mode==='full' && q.source.word_hints;
    if(!hints?.length)return esc(q.material);
    const words=hints.map(([word],index)=>({word,index,start:q.material.indexOf(word)}))
      .filter(part=>part.start>=0).sort((a,b)=>a.start-b.start);
    let html='',end=0;
    for(const {word,index,start} of words){
      if(start<end)continue;
      html+=esc(q.material.slice(end,start));
      html+=`<button type="button" class="word-hint" data-word-hint="${index}" aria-expanded="false" aria-controls="word-hint-card">${esc(word)}</button>`;
      end=start+word.length;
    }
    return html+esc(q.material.slice(end));
  }
  function bindWordHints(q,s){
    const card=app.querySelector('#word-hint-card');
    const prompt=app.querySelector('.question');
    const closeButton=card.querySelector('button');
    let openButton=null;
    const close=({returnFocus=false}={})=>{
      if(!openButton)return;
      openButton.setAttribute('aria-expanded','false');
      if(returnFocus)openButton.focus({preventScroll:true});
      openButton=null;card.hidden=true;
    };
    const click=e=>{
      const target=e.target.closest('[data-word-hint]');
      if(target && prompt.contains(target)){
        if(session!==s||s.answered)return;
        if(target===openButton){close();return;}
        close();
        const [word,english,russian=word]=q.source.word_hints[Number(target.dataset.wordHint)];
        card.querySelector('strong').textContent=english;
        card.querySelector('span').textContent=russian;
        target.setAttribute('aria-expanded','true');
        openButton=target;card.hidden=false;s.wordHelp=true;
        window.PageState?.checkpoint();
      }else if(closeButton.contains(e.target)){
        close({returnFocus:document.activeElement===closeButton});
      }else if(!card.contains(e.target)){
        close();
      }
    };
    const key=e=>{
      if(e.key==='Escape' && openButton){
        e.preventDefault();
        close({returnFocus:card.contains(document.activeElement)});
      }
    };
    const keepCaret=e=>{
      if(document.activeElement?.matches('#answer-form input')
        && (e.target.closest('[data-word-hint]')||closeButton.contains(e.target)))e.preventDefault();
    };
    document.addEventListener('click',click);
    document.addEventListener('keydown',key);
    app.addEventListener('mousedown',keepCaret);
    return ()=>{
      close();
      document.removeEventListener('click',click);
      document.removeEventListener('keydown',key);
      app.removeEventListener('mousedown',keepCaret);
    };
  }
  function question() {
    page={kind:'question'};
    const s = session, q = s.queue[s.index]; s.answered = false;delete s.response;s.wordHelp=false;
    const fields = q.fields || [q.mode==='full'?'Твой перевод':'Твой ответ'];
    const textInputs = fields.map((label,i)=>`<label class="answer-label" for="answer${i||''}">${esc(label)}</label><input id="answer${i||''}" data-answer-part class="answer-input" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Напиши на английском…" required>`).join('');
    const hasHints=q.mode==='full' && q.source.word_hints?.length;
    const hintArea=hasHints?'<div class="word-hint-slot"><div id="word-hint-card" class="word-hint-card" hidden><div aria-live="polite"><strong lang="en"></strong><span></span></div><button type="button" aria-label="Закрыть подсказку">×</button></div></div>':'';
    show(`${breadcrumb(s.topic)}<section class="exercise-panel"><div class="exercise-top"><span>${esc(s.topic.title)}</span><span>${s.index+1} / ${s.queue.length}</span></div><progress value="${s.index}" max="${s.queue.length}" aria-label="Прогресс тренировки"></progress><span class="practice-eyebrow">${esc(q.instruction)}</span><h2 class="question${hasHints?' question-with-hints':''}" lang="${q.mode==='full'?'ru':'en'}">${promptWithHints(q)}</h2>${hintArea}${q.translation?'<p class="question-translation">'+esc(q.translation)+'</p>':''}<form id="answer-form">${q.options?.length ? `<div class="practice-options">${q.options.map(o=>`<button type="button" data-answer="${esc(o)}" lang="en">${esc(o)}</button>`).join('')}</div>` : textInputs}</form><div id="feedback" aria-live="polite"></div><div class="training-footer"><button type="button" class="exit-training" data-action="home">Закончить тренировку</button><div id="question-actions" class="practice-actions answer-controls">${button('Не знаю','skip')}${!q.options?.length?'<button type="button" class="primary" id="complete-answer" disabled>Готово</button>':''}</div></div></section>`);
    if(hasHints)hintDispose=bindWordHints(q,s);
    if(!q.options?.length)inputDispose=window.TrainingUI.bindReady(app.querySelectorAll('[data-answer-part]'),{button:app.querySelector('#complete-answer'),active:()=>session===s&&!s.answered,commit:values=>answer(q.fields?values:values[0])});
    app.querySelector('#answer')?.focus({preventScroll:true});
  }
  function answer(value) {
    const s = session; if (!s || s.answered) return;
    const q = s.queue[s.index], ok = accepts(q, value);
    if(window.PageState)s.draft=window.TrainingUI.captureDraft(app);s.response={ok,value};
    inputDispose?.();inputDispose=null;
    s.answered = true; if(ok) s.correct++;
    window.legacyTrainer.recordGrammarActivity?.();
    const previous = state.results[q.id] || { attempts:0,correct:0 };
    state.results[q.id] = { ...previous,attempts:previous.attempts+1,correct:previous.correct+Number(ok),error:!ok,lastAnswer:Array.isArray(value)?value.join(' / '):value,updatedAt:new Date().toISOString() };
    if(s.wordHelp)state.results[q.id].wordHelpAttempts=(previous.wordHelpAttempts||0)+1;
    save();
    window.TrainingSound?.result(ok);
    presentAnswer(value,ok);window.PageState?.checkpoint();
  }
  function presentAnswer(value,ok){
    const s=session,q=s.queue[s.index];
    hintDispose?.();hintDispose=null;
    app.querySelectorAll('#answer-form button, #answer-form input, [data-action="skip"], [data-word-hint]').forEach(el=>{
      el.disabled=true;
      if(el.matches?.('input'))el.classList.add(ok?'correct':'wrong');
      if(el.dataset.answer!==undefined){
        el.classList.toggle('is-correct',q.answers.some(a=>normalize(a)===normalize(el.dataset.answer)));
        el.classList.toggle('is-wrong',!ok && el.dataset.answer===value);
      }
    });
    const actions=app.querySelector('#question-actions');if(actions)actions.hidden=true;
    const f = app.querySelector('#feedback');
    if (ok) {
      f.innerHTML='';window.TrainingUI.showCorrect(app);
      nextTimer = window.setTimeout(() => { if(session===s && s.answered) next(); }, 650);
    } else {
      const scene=q.source.feedback_image;
      f.innerHTML=window.TrainingUI.reviewCard({material:q.correctSentence,translation:q.source.russian,explanation:explanation(q),audio:false,actions:false,detailsHTML:scene?`<div class="review-scene">${sceneImage(scene)}</div>`:''});
      actions.innerHTML=window.TrainingUI.reviewActions({audio:false,nextId:'topic-review-next'});actions.hidden=false;
      const advance=app.querySelector('#topic-review-next');
      advance.onclick=next;advance.focus({preventScroll:true});
    }
    if(!ok)f.scrollIntoView({behavior:'smooth',block:'nearest'});
  }
  function next() {
    if (!session?.answered) return;
    cancelNext();
    if (++session.index < session.queue.length) return question();
    summary();
  }
  function summary(){
    page={kind:'result'};
    const s=session;
    show(`${breadcrumb(s.topic)}<section class="exercise-panel result-summary"><span class="result-check" aria-hidden="true">✓</span><h2>Практика завершена</h2><p class="result-score">${s.correct}<span> / ${s.queue.length}</span></p><p>верных ответов</p><p class="result-errors">К повторению: ${errors(s.topic).length}</p><div class="practice-actions">${errors(s.topic).length?button('Повторить ошибки',`review:${s.topic.id}`,true):button('Ещё раз',`start:${s.topic.id}`,true)}${button('К блокам','home')}</div></section>`);
  }
  function navigateHash(id) {
    const hash = id==='all'?'':`#${id}`;
    if(location.hash!==hash) history.pushState(null,'',location.pathname+location.search+hash);
  }
  function navigate(id) { navigateHash(id); route(); }
  function route() {
    const id=location.hash.slice(1);
    if(id==='prepositions'){
      history.replaceState(null,'',location.pathname+location.search+'#'+defaultTopic.id);
      return detail(defaultTopic);
    }
    const t=topics.find(t=>t.id===id);
    session=null;
    if(t) return detail(t);
    if(id==='verbs') return verbOverview();
    if(id==='dictionary') {
      window.legacyTrainer.open('dictionary');
      selectNav(id); window.scrollTo({top:0,behavior:'instant'}); return;
    }
    home();
  }
  function onAction(e) {
    const b=e.target.closest('button'); if(!b || b.disabled) return;
    if(b.dataset.answer !== undefined) return answer(b.dataset.answer);
    const [action,id,lessonId]=(b.dataset.action || '').split(':'); const t=id==='prepositions'?defaultTopic:findTopic(id);
    if(action==='select'){selectedTopic=id;save();renderDashboard();document.querySelector('.home-main')?.scrollIntoView({behavior:'smooth',block:'start'});return;}
    if(action==='home') navigate('all');
    if(action==='verbs'||action==='dictionary') navigate(action);
    if(action==='topic' && t) {navigateHash(t.id);detail(t);}
    if(action==='lesson' && t) {detail(t,lessonId);app.querySelector(`#tab-${lessonId}`)?.focus({preventScroll:true});}
    if((action==='start'||action==='review') && t) start(t,action==='review');
    if(action==='skip') answer('');
    if(action==='next') next();
  }
  app.addEventListener('click',onAction);
  document.getElementById('blocks')?.addEventListener('click',onAction);
  document.querySelectorAll('[data-home]').forEach(b=>b.onclick=()=>navigate('all'));
  document.getElementById('review-btn').onclick=()=>{const t=topics.find(t=>errors(t).length);if(t)start(t,true);else window.legacyTrainer.review();};
  app.addEventListener('submit',e=>{
    e.preventDefault();
  });
  window.addEventListener('popstate',route);
  window.addEventListener('hashchange',route);
  window.addEventListener('trainer-view',e=>{
    if(e.detail==='practice') return;
    cancelNext(); session=null;
    if(e.detail==='home'){navigateHash('all');return;}
    const dictionary=e.detail==='dictionary'||(['quiz','result','cards'].includes(e.detail)&&location.hash==='#dictionary');
    const id=dictionary?'dictionary':'verbs';
    navigateHash(id); selectNav(id);
  });
  window.englishPractice = { navigate, renderDashboard, refreshGlobalStats };
  function captureTopicPage(){
    const data={page};
    if(session){data.session={topic:session.topic.id,queue:session.queue.map(q=>q.id),index:session.index,correct:session.correct,answered:session.answered,response:session.response,wordHelp:session.wordHelp};if(page.kind==='question')data.draft=session.answered?session.draft:window.TrainingUI.captureDraft(app);}
    return data;
  }
  function restoreTopicPage(data){
    if(!data?.page)return false;
    if(data.page.kind==='verbs'){verbOverview();return true;}
    const id=data.session?.topic||data.page.topic;
    const t=id==='prepositions'?(data.session?legacyPrepositions:defaultTopic):findTopic(id);if(!t)return false;
    if(data.page.kind==='rules'){detail(t);return true;}
    if(data.page.kind==='empty'){showEmptyErrors(t);return true;}
    const saved=data.session,bank=new Map(views(t).map(q=>[q.id,q]));
    if(!saved||!Array.isArray(saved.queue)||!saved.queue.length||saved.queue.length>1000||!Number.isInteger(saved.index)||saved.index<0||saved.index>saved.queue.length||saved.queue.some(id=>!bank.has(id)))return false;
    session={topic:t,queue:saved.queue.map(id=>bank.get(id)),index:saved.index,correct:Number(saved.correct)||0,answered:!!saved.answered,response:saved.response};
    if(data.page.kind==='result'){summary();return true;}
    if(data.page.kind!=='question'||!session.queue[session.index])return false;
    const response=saved.response;question();session.wordHelp=!!saved.wordHelp;window.TrainingUI.restoreDraft(app,data.draft);
    if(saved.answered){inputDispose?.();inputDispose=null;session.answered=true;session.response=response;session.draft=data.draft;presentAnswer(response?.value,response?.ok===true);}
    return true;
  }
  window.PageState?.register('topics',{capture:captureTopicPage,restore:restoreTopicPage});
  if(window.PageState)window.PageState.start(route);else route();
})();
