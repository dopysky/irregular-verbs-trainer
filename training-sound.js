/* Единые сигналы интерфейса. Произношение работает отдельно. */
(function(root){
  'use strict';
  const signals={
    correct:{volume:.32,length:.52,type:'sine',tones:[[784,0,.22],[1046.5,.07,.30],[1318.5,.14,.32]]}
  };
  function bind(document,isEnabled){
    let context,pendingClick;
    const effects={};
    for(const [kind,src] of Object.entries({
      click:'assets/sounds/neutral.mp3',
      wrong:'assets/sounds/incorrect.mp3'
    })){
      try{const audio=new root.Audio(src);audio.preload='auto';effects[kind]=audio;}catch{}
    }
    function unlock(){
      const Audio=root.AudioContext||root.webkitAudioContext;
      if(!Audio)return;
      context ||= new Audio();
      if(context.state==='suspended')context.resume()?.catch(()=>{});
      return context;
    }
    function play(kind){
      if(!isEnabled())return;
      if(kind!=='correct'){
        const audio=effects[kind];
        if(!audio)return;
        try{
          audio.pause();
          audio.currentTime=0;
          audio.play()?.catch(()=>{});
        }catch{}
        return;
      }
      try{
        const c=unlock();
        if(!c)return;
        const {volume,length,type,tones}=signals[kind],now=c.currentTime;
        const master=c.createGain();
        master.gain.setValueAtTime(.0001,now);
        master.gain.exponentialRampToValueAtTime(volume,now+.012);
        master.gain.exponentialRampToValueAtTime(.0001,now+length);
        master.connect(c.destination);
        let active=tones.length;
        for(const [frequency,delay,duration] of tones){
          const start=now+delay,oscillator=c.createOscillator(),gain=c.createGain();
          oscillator.type=type;
          oscillator.frequency.setValueAtTime(frequency,start);
          gain.gain.setValueAtTime(.0001,start);
          gain.gain.exponentialRampToValueAtTime(.72,start+.012);
          gain.gain.exponentialRampToValueAtTime(.0001,start+duration);
          oscillator.connect(gain);gain.connect(master);
          oscillator.onended=()=>{
            oscillator.disconnect();gain.disconnect();
            if(--active===0)master.disconnect();
          };
          oscillator.start(start);oscillator.stop(start+duration+.02);
        }
      }catch{}
    }
    document.addEventListener('click',event=>{
      if(!event.isTrusted)return;
      const button=event.target.closest?.('button, [role="button"], summary');
      if(!button||button.matches(':disabled,[aria-disabled="true"]'))return;
      if(isEnabled()||button.id==='sound-toggle')try{unlock();}catch{}
      // Проверка ответа выполняется в том же событии. Её сигнал заменяет клик.
      const click={event,hasResult:false};
      pendingClick=click;
      root.setTimeout(()=>{
        if(pendingClick===click)pendingClick=null;
        // Нейтральный звук при нажатиях отключён; сигналы ответа остаются.
      },0);
    },true);
    return {
      result(ok){
        if(pendingClick?.event.eventPhase)pendingClick.hasResult=true;
        play(ok?'correct':'wrong');
      },
      click(){}
    };
  }
  root.bindTrainingSound=bind;
})(window);
