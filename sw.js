const CACHE='english-practice-v54-21-icon';
const ASSETS=['./','./index.html','./style.css?v=54.18','./assets/fonts/Unbounded.ttf?v=54.17','./topics.html','./topics.css?v=54.14','./topics.js?v=54.17','./topics-core.js?v=54.0','./new-exercises.js?v=54.16','./topics-data.js?v=54.11','./assets/sounds/neutral.mp3','./assets/sounds/incorrect-270300.mp3','./keyboard.js?v=54.19','./keyboard.css?v=54.19','./training-ui.js?v=54.14','./training-sound.js?v=54.15','./grammar-cards.js?v=54.8','./training.css?v=54.14','./vocabulary-data.js?v=54.16','./vocabulary-pronunciation.js?v=54.16','./vocabulary-import.js?v=54.16','./verb-vocabulary.js?v=54.16','./page-state.js?v=54.16','./review-schedule.js?v=54.16','./app.js?v=54.17','./card-speech.js?v=54.16','./audio-data.js?v=54.16','./manifest.webmanifest','./favicon-chick.png?v=54.21','./icon-192.png','./icon-512.png','./icon-180.png'];
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
