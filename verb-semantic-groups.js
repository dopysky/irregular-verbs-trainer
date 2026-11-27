(function(root){
  const groups=[
    {id:'meaning-motion',name:'Движение и положение',words:'come creep drive fall flee fly go kneel lean leap leave lie overtake ride rise run sit slide stand swim swing hide'},
    {id:'meaning-speech',name:'Общение и язык',words:'broadcast forbid let mean read ring say show speak spell swear tell write rewrite send uphold'},
    {id:'meaning-mind',name:'Мысли и чувства',words:'dream feel foresee forget forgive hear know learn misunderstand mistake prove see smell think understand weep upset withstand overcome'},
    {id:'meaning-daily',name:'Дом и повседневные дела',words:'build burn cut dig draw hang keep light put set shut spill spread stick sweep tear wind wring bend lay split spoil'},
    {id:'meaning-people',name:'Люди и тело',words:'awake bear beat bite bleed breed eat drink feed get grow hurt meet sleep wake wear spit sting undergo'},
    {id:'meaning-trade',name:'Деньги и обмен',words:'bet bring buy cost lend pay sell spend steal take withdraw lose'},
    {id:'meaning-world',name:'Природа и изменения',words:'arise become blow burst freeze shine sink be stink forecast'},
    {id:'meaning-action',name:'Действия и работа',words:'begin bind break catch choose deal do fight find give have hold lead make retake seek shoot sing teach throw win hit quit shake spin strike overthrow overdo redo remake undertake'}
  ];
  const api={groups};if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.VerbSemanticGroups=api;
})(typeof window!=='undefined'?window:globalThis);
