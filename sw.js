const CACHE='english-practice-v54-13-haptic';
const ASSETS=['./','./index.html','./style.css?v=54.11','./topics.html','./topics.css?v=54.12','./topics.js?v=54.12','./topics-core.js?v=54.0','./new-exercises.js','./topics-data.js?v=54.11','./assets/sounds/neutral.mp3','./assets/sounds/incorrect.mp3','./keyboard.js?v=54.13','./keyboard.css?v=54.12','./training-ui.js?v=54.12','./training-sound.js?v=54.3','./grammar-cards.js?v=54.8','./training.css?v=54.12','./vocabulary-data.js','./vocabulary-pronunciation.js','./vocabulary-import.js','./verb-vocabulary.js','./page-state.js','./review-schedule.js','./app.js?v=54.12','./card-speech.js','./audio-data.js','./manifest.webmanifest','./icon-192.png','./icon-512.png','./icon-180.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
// Только свои GET-файлы. Запросы к другим сайтам (будущий Supabase) и не-GET в кэш не попадают.
self.addEventListener('fetch',e=>{
  const r=e.request,u=new URL(r.url);
  if(r.method!=='GET'||u.origin!==location.origin)return;
  e.respondWith(fetch(r).then(res=>{if(res.ok){const c=res.clone();caches.open(CACHE).then(x=>x.put(r,c))}return res}).catch(()=>caches.match(r).then(m=>m||caches.match('./index.html'))));
});
