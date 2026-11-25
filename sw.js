const CACHE='english-practice-v54-73-continuous-plain';
const ASSETS=['./','./index.html','./privacy.html','./style.css?v=54.25','./account-entry.css?v=1','./account-redirect.js?v=2','./assets/fonts/Unbounded.ttf?v=54.17','./topics.html','./topics.css?v=54.22','./topics.js?v=54.25','./like-would-like.js?v=2','./present-continuous-now.js?v=6','./assets/grammar/present-continuous-now/r01-v02.png','./assets/grammar/present-continuous-now/r02-v03.png','./assets/grammar/present-continuous-now/r03-v03.png','./assets/grammar/present-continuous-now/r04-v03.png','./assets/grammar/like-would-like/r01-v01.png','./assets/grammar/like-would-like/r02-v01.png','./assets/grammar/like-would-like/r03-v03.png','./assets/grammar/like-would-like/r04-v02.png','./topics-core.js?v=54.0','./new-exercises.js?v=54.16','./topics-data.js?v=54.12','./assets/sounds/neutral.mp3','./assets/sounds/incorrect-270300.mp3','./sync-engine.js?v=3','./keyboard.js?v=54.20','./keyboard.css?v=54.20','./training-ui.js?v=54.16','./training-sound.js?v=54.16','./grammar-cards.js?v=54.10','./training.css?v=54.15','./vocabulary-data.js?v=54.16','./vocabulary-pronunciation.js?v=54.16','./vocabulary-import.js?v=54.16','./verb-vocabulary.js?v=54.16','./page-state.js?v=54.16','./review-schedule.js?v=54.16','./app.js?v=54.31','./card-speech.js?v=54.16','./audio-data.js?v=54.16','./manifest.webmanifest','./favicon-chick.png?v=54.21','./icon-192.png','./icon-512.png','./icon-180.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
// Только свои GET-файлы. Запросы к другим сайтам (будущий Supabase) и не-GET в кэш не попадают.
self.addEventListener('fetch',e=>{
  const r=e.request,u=new URL(r.url);
  if(r.method!=='GET'||u.origin!==location.origin)return;
  e.respondWith((async()=>{
    let cache;try{cache=await caches.open(CACHE);}catch{return fetch(r);}
    if(r.mode!=='navigate'&&u.searchParams.has('v')){const saved=await cache.match(r);if(saved)return saved;}
    try{
      const res=await fetch(r);
      if(res.ok)await cache.put(r,res.clone()).catch(()=>{});
      return res;
    }catch{
      const saved=await cache.match(r);if(saved)return saved;
      if(r.mode==='navigate'){const page=await cache.match('./index.html');if(page)return page;}
      return Response.error();
    }
  })());
});
