// Build an isolated local test page; the existing public page stays unchanged.
const fs=require('node:fs');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const read=name=>fs.readFileSync(path.join(root,name),'utf8');
const write=(name,data)=>fs.writeFileSync(path.join(root,name),data,'utf8');
function replaceOnce(source,from,to){if(!source.includes(from)||source.indexOf(from)!==source.lastIndexOf(from))throw Error('Unexpected source: '+from.slice(0,80));return source.replace(from,to);}
let app=read('app.js');
app=replaceOnce(app,"localStorage.getItem(KEY)||localStorage.getItem('irregular_trainer_v16')||localStorage.getItem('irregular_trainer_v15')","window.KokoraActiveStorage.get('legacy')");
app=replaceOnce(app,"localStorage.setItem(KEY+'_backup',raw)","void raw");
app=replaceOnce(app,"localStorage.setItem(KEY,JSON.stringify(state))","window.KokoraActiveStorage.set('legacy',JSON.stringify(state))");
app=replaceOnce(app,"if('serviceWorker' in navigator && location.protocol!=='file:'){window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}))}","/* No service worker in this isolated test. */");
write('app-account-test.js',app);
let topics=read('topics.js');
topics=replaceOnce(topics,'localStorage.getItem(KEY)',"window.KokoraActiveStorage.get('grammar')");
topics=replaceOnce(topics,'localStorage.setItem(KEY, JSON.stringify({...state,selectedTopic}))',"window.KokoraActiveStorage.set('grammar', JSON.stringify({...state,selectedTopic}))");
write('topics-account-test.js',topics);
const demoTopics=replaceOnce(topics,'  function route() {',`  function route() {
    const demoMode=new URLSearchParams(location.search).get('demo');
    if(demoMode==='heavy'||demoMode==='bag'){
      const t=findTopic('comparison');
      const id=demoMode==='heavy'?'comparison-context-28':'comparison-context-18::full';
      const q=views(t).find(item=>item.id===id);
      session={topic:t,queue:[q],index:0,correct:0,answered:false};
      return question();
    }`);
write('topics-demo.js',demoTopics);
let page=read('page-state.js');
page=replaceOnce(page,"const KEY='english-current-page-v1',owners", "const KEY='english-current-page-v1:'+encodeURIComponent(root.KokoraAccountId),owners");
write('page-state-account-test.js',page);
let html=read('index.html');
const keyboardSrc=html.match(/<script src="(keyboard\.js\?[^\"]+)"/)[1];
html=html.replace(/<script>try\{const raw=localStorage[\s\S]*?<\/script>/,'<script>document.documentElement.dataset.theme="light";</script>');
html=replaceOnce(html,'<body class="unified-site">','<body class="unified-site account-locked account-checking">'+read('account-test-gate.html'));
html=html.replace('</head>','<link rel="stylesheet" href="account-test.css?v=5"></head>');
html=html.replace('Прогресс сохраняется в этом браузере.','Прогресс сохраняется в аккаунте.');
html=html.replace(/<script src="([^"?]+)(?:\?[^"]*)?"><\/script>/g,(_,src)=>'<script type="text/plain" data-account-src="'+({'app.js':'app-account-test.js','topics.js':'topics-account-test.js','page-state.js':'page-state-account-test.js'}[src]||src)+'"></script>');
html=html.replace('data-account-src="keyboard.js"','data-account-src="'+keyboardSrc+'"');
html=html.replace('</body>','<script src="assets/vendor/supabase-2.119.0.js"></script><script src="account-session.js"></script><script src="account-profile.js"></script><script src="account-profile-ui.js?v=3"></script><script src="cloud-progress.js"></script><script src="sync-engine.js"></script><script src="account-storage.js"></script><script src="account-test.js"></script></body>');
write('account-test.html',html);
const demoStorage=replaceOnce(read('account-storage.js'),"catch(error){if(error?.code==='CONFLICT')","catch(error){console.warn('Test fixture conflict:',error.message);if(error?.code==='CONFLICT')");
write('account-storage-demo.js',demoStorage);
write('account-demo.html',html.replace('assets/vendor/supabase-2.119.0.js','scripts/fake-account-sdk.js').replace('account-storage.js','account-storage-demo.js').replace('topics-account-test.js','topics-demo.js').replace('Тестовая версия</p>','Имитация входа — данные тестовые</p>'));
console.log('Built isolated account test page.');
