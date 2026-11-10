(function(root){
  'use strict';
  function edit(value,start,end,text){return {value:value.slice(0,start)+text+value.slice(end),position:start+text.length};}
  function erase(value,start,end){if(start===end&&start>0){const previous=Array.from(value.slice(0,start)).pop();start-=previous.length;}return edit(value,start,end,'');}
  function layout(symbols,language='en'){return symbols?[['1','2','3','4','5','6','7','8','9','0'],['@','#','$','%','&','*','(',')','+','='],['-','/',';',':',"'",'"',',','.','?','!']]:language==='ru'?['йцукенгшщзхъ'.split(''),'фывапролджэ'.split(''),'ячсмитьбюё'.split('')]:['qwertyuiop'.split(''),'asdfghjkl'.split(''),'zxcvbnm'.split('')];}
  function attach(inputs,ready,language='en'){
    const doc=root.document,media=root.matchMedia?.('(pointer: coarse)');
    const fields=[...inputs].filter(el=>el.type!=='hidden'&&!el.disabled&&'inputMode' in el&&typeof el.setSelectionRange==='function');
    if(!doc||!media?.matches||!fields.length)return ()=>{};
    let target=null,shift=false,symbols=false,native=false,repeat=null,hold=null;
    const panel=doc.createElement('section');panel.className='english-keyboard';panel.hidden=true;panel.setAttribute('aria-label',language==='ru'?'Русская клавиатура':'Английская клавиатура');
    const original=fields.map(el=>el.getAttribute('inputmode'));fields.forEach(el=>el.setAttribute('inputmode','none'));
    const listeners=[];function on(el,event,fn,opts){el.addEventListener(event,fn,opts);listeners.push(()=>el.removeEventListener(event,fn,opts));}
    function close(){panel.hidden=true;doc.body.classList.remove('english-keyboard-open');doc.documentElement.style.removeProperty('--keyboard-height');}
    function fit(){if(!panel.hidden){doc.documentElement.style.setProperty('--keyboard-height',panel.offsetHeight+'px');target?.scrollIntoView({block:'nearest',behavior:'smooth'});}}
    function update(){
      const active=panel.contains(doc.activeElement)?doc.activeElement?.dataset?.keyId:null;
      panel.replaceChildren();
      layout(symbols,language).forEach((keys,row)=>{const line=doc.createElement('div');line.className='english-keyboard-row';
        if(!symbols&&row===2)add(line,'⬆','shift','Заглавные буквы');
        keys.forEach(key=>add(line,shift&&!symbols?key.toUpperCase():key,'text',key));
        if(row===2)add(line,'⌫','backspace','Удалить символ');panel.appendChild(line);
      });
      const bottom=doc.createElement('div');bottom.className='english-keyboard-row';add(bottom,symbols?'ABC':'123','symbols','Буквы и символы');add(bottom,'','space','Пробел');add(bottom,'↵','submit','Готово');panel.appendChild(bottom);if(active)panel.querySelector?.(`[data-key-id="${active}"]`)?.focus();fit();
    }
    function perform(action,text){if(!target||target.disabled||!target.isConnected)return;
      try{root.navigator?.vibrate?.(8);}catch{}
      if(action==='shift'){shift=!shift;update();return;}if(action==='symbols'){symbols=!symbols;shift=false;update();return;}if(action==='submit'){if(!ready.disabled)ready.click();return;}
      const start=target.selectionStart??target.value.length,end=target.selectionEnd??start;
      const result=action==='backspace'?erase(target.value,start,end):edit(target.value,start,end,action==='space'?' ':text);
      target.value=result.value;target.setSelectionRange(result.position,result.position);target.dispatchEvent(new root.Event('input',{bubbles:true}));
      if(shift&&action==='text'){shift=false;update();}
    }
    function add(line,label,action,text){const key=doc.createElement('button');key.type='button';key.textContent=label;key.className='english-key english-key-'+action;key.dataset.keyId=action==='text'?`text-${String(text).charCodeAt(0)}`:action;key.setAttribute('aria-label',action==='text'?label:text);if(action==='shift')key.setAttribute('aria-pressed',String(shift));if(action==='space'){const mark=doc.createElement('span');mark.textContent='KOKORA';mark.setAttribute('aria-hidden','true');key.appendChild(mark);}
      let pressed=false;on(key,'pointerdown',e=>{e.preventDefault();pressed=true;perform(action,action==='text'?label:text);if(action==='backspace')hold=root.setTimeout(()=>{repeat=root.setInterval(()=>perform(action,text),70);},400);});
      function stop(){root.clearTimeout(hold);root.clearInterval(repeat);hold=repeat=null;}on(key,'pointerup',stop);on(key,'pointercancel',stop);on(key,'pointerleave',stop);on(key,'contextmenu',e=>e.preventDefault());
      on(key,'click',e=>{if(pressed){pressed=false;return;}perform(action,action==='text'?label:text);});line.appendChild(key);
    }
    fields.forEach(el=>{on(el,'focus',()=>{target=el;if(!native){panel.hidden=false;doc.body.classList.add('english-keyboard-open');update();}});on(el,'keydown',e=>{if(e.isTrusted&&!e.isComposing&&e.key!=='Tab'&&e.key!=='Shift'&&e.key!=='Control'&&e.key!=='Alt'&&e.key!=='Meta'){native=true;fields.forEach(f=>f.setAttribute('inputmode','text'));close();}});});
    on(doc,'keydown',e=>{if(e.key==='Tab')doc.body.classList.add('keyboard-navigation');});on(doc,'pointerdown',()=>doc.body.classList.remove('keyboard-navigation'));
    on(root,'resize',fit);on(root,'orientationchange',fit);doc.body.appendChild(panel);target=fields[0];panel.hidden=false;doc.body.classList.add('english-keyboard-open');update();
    return ()=>{close();root.clearTimeout(hold);root.clearInterval(repeat);listeners.forEach(off=>off());fields.forEach((el,i)=>original[i]===null?el.removeAttribute('inputmode'):el.setAttribute('inputmode',original[i]));panel.remove();};
  }
  const api={edit,erase,layout,attach};if(typeof module!=='undefined'&&module.exports)module.exports=api;else{root.EnglishKeyboard=api;root.document.addEventListener('contextmenu',event=>{if(event.target.closest?.('button,[role="button"],summary'))event.preventDefault();});}
})(typeof window!=='undefined'?window:globalThis);
