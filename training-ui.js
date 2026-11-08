/* Общие состояния практики для грамматики, глаголов и словаря. */
(function(root){
  'use strict';
  const escape=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const icon=name=>'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+(name==='key'?'<circle cx="8" cy="8" r="4"/><path d="m11 11 9 9m-3-3 3-3m-6 0 3-3"/>':'<path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5H4z"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a8 8 0 0 1 0 11"/>')+'</svg>';
  function bindReady(elements,{button,read,commit,active=()=>true}){
    const inputs=[...elements],composing=new Set();let disposed=false,submitted=false;
    const values=read||(()=>inputs.map(e=>e.value.trim()));
    function valid(){const parts=values();return !disposed&&!submitted&&!composing.size&&active()&&parts.length>0&&parts.every(v=>String(v).trim());}
    function refresh(){button.disabled=!valid();}
    function submit(event){event?.preventDefault();if(event?.isComposing||!valid())return;submitted=true;refresh();commit(values());}
    const bindings=[];
    for(const input of inputs){
      for(const [event,handler]of [['input',refresh],['compositionstart',()=>{composing.add(input);refresh();}],['compositionend',()=>{composing.delete(input);refresh();}],['keydown',event=>{if(event.key==='Enter')submit(event);}]] ){
        input.addEventListener(event,handler);bindings.push([input,event,handler]);
      }
    }
    button.addEventListener('click',submit);refresh();
    const dispose=()=>{disposed=true;for(const [input,event,handler]of bindings)input.removeEventListener(event,handler);button.removeEventListener('click',submit);};
    dispose.refresh=refresh;return dispose;
  }
  function showCorrect(container){
    const targets=[...container.querySelectorAll('.option.selected, .practice-options .is-correct, input:not([type="hidden"]), #built')];
    const target=targets[targets.length-1];if(!target)return;
    const doc=target.ownerDocument,overlay=doc.createElement('span');overlay.className='answer-confirmation';overlay.textContent='✓ Верно';overlay.setAttribute('role','status');
    if(target.tagName==='INPUT'){
      const wrap=doc.createElement('div');wrap.className='confirmed-answer';target.parentNode.insertBefore(wrap,target);wrap.appendChild(target);wrap.appendChild(overlay);
    }else{target.classList.add('confirmed-answer');target.appendChild(overlay);}
  }
  function reviewActions({soundId='review-sound',nextId='review-next',audio=true}={}){
    return (audio?'<button type="button" class="icon-btn" id="'+escape(soundId)+'" aria-label="Прослушать правильный ответ">'+icon('sound')+'</button>':'')+'<button type="button" class="primary" id="'+escape(nextId)+'">Далее</button>';
  }
  function reviewCard({material,language='en',translation='',explanation='',detailsHTML='',soundId='review-sound',nextId='review-next',audio=true,outsideActions=false,neutral=false,actions=true}){
    const buttons=actions?'<div class="practice-actions review-actions">'+reviewActions({soundId,nextId,audio})+'</div>':'';
    return '<section class="review-card'+(neutral?' review-neutral':' feedback-box wrong')+'"><div class="correct-material" lang="'+escape(language)+'">'+escape(material)+'</div>'+(translation?'<div class="question-translation">'+escape(translation)+'</div>':'')+detailsHTML+(explanation?'<p class="review-explanation">'+escape(explanation)+'</p>':'')+(outsideActions?'':buttons)+'</section>'+(outsideActions?buttons:'');
  }
  function captureDraft(container){
    const active=container.ownerDocument.activeElement;
    return {inputs:[...container.querySelectorAll('input[id]')].map(e=>({id:e.id,value:e.value,start:e.selectionStart,end:e.selectionEnd})),activeId:container.contains(active)?active?.id:'',
      options:[...container.querySelectorAll('.option')].map(e=>({value:e.dataset.option,correct:e.dataset.correct==='1'})),
      selected:container.querySelector('.option.selected')?.dataset.option,
      letterOrder:[...container.querySelectorAll('.letters .letter')].map(e=>e.dataset.i),selectedLetters:[...container.querySelectorAll('.built-letter')].map(e=>e.dataset.i),
      pattern:container.querySelector('.cloze-pattern')?.textContent};
  }
  function restoreDraft(container,draft){
    if(!draft)return;
    const list=container.querySelector('.option-list');
    if(list&&Array.isArray(draft.options)&&draft.options.length)list.innerHTML=draft.options.map(o=>'<button class="option" data-option="'+escape(o.value)+'" data-correct="'+(o.correct?'1':'0')+'">'+escape(o.value)+'</button>').join('');
    const bank=container.querySelector('.letters');if(bank&&draft.letterOrder?.length){const buttons=[...bank.querySelectorAll('.letter')];for(const id of draft.letterOrder){const b=buttons.find(e=>e.dataset.i===id);if(b)bank.appendChild(b);}}
    const pattern=container.querySelector('.cloze-pattern');if(pattern&&typeof draft.pattern==='string')pattern.textContent=draft.pattern;
    for(const field of draft.inputs||[]){const e=[...container.querySelectorAll('input[id]')].find(e=>e.id===field.id);if(e){e.value=String(field.value||'');e.dispatchEvent(new container.ownerDocument.defaultView.Event('input',{bubbles:true}));}}
    if(draft.selected!==undefined){const selected=[...container.querySelectorAll('.option')].find(e=>e.dataset.option===draft.selected);if(selected){selected.classList.add('selected');let hidden=container.querySelector('#selected-option');if(!hidden){hidden=container.ownerDocument.createElement('input');hidden.type='hidden';hidden.id='selected-option';container.appendChild(hidden);}hidden.value=draft.selected;}}
    const focus=[...container.querySelectorAll('input[id]')].find(e=>e.id===draft.activeId);if(focus){focus.focus({preventScroll:true});const field=draft.inputs.find(e=>e.id===focus.id);if(field?.start!=null)try{focus.setSelectionRange(field.start,field.end);}catch{}}
  }
  function removeTile(selected,id){return selected.filter(tileId=>tileId!==id);}
  const api={escape,icon,bindReady,showCorrect,reviewActions,reviewCard,captureDraft,restoreDraft,removeTile};
  if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.TrainingUI=api;
})(typeof window!=='undefined'?window:globalThis);
