const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const handlers={},cacheItems=new Map(),fetches=[];let offline=false;
const cache={match:async r=>cacheItems.get(typeof r==='string'?r:r.url),put:async(r,v)=>cacheItems.set(r.url,v),addAll:async()=>{}};
const caches={open:async()=>cache,keys:async()=>[],delete:async()=>true,match:async r=>cache.match(r)};
const self={location:{origin:'https://example.com'},addEventListener:(n,f)=>handlers[n]=f,clients:{claim:async()=>{}},skipWaiting:async()=>{}};
async function fetch(r){fetches.push(r.url);if(offline)throw Error('offline');return {ok:true,marker:'network',clone(){return this;}};}
vm.runInNewContext(fs.readFileSync(__dirname+'/sw.js','utf8'),{self,location:self.location,caches,fetch,URL,Response,Promise});
async function request(url,mode='cors'){let answer;handlers.fetch({request:{url,method:'GET',mode},respondWith:p=>answer=p});return answer;}
(async()=>{
 const css='https://example.com/style.css?v=2';cacheItems.set(css,{marker:'cached'});
 assert.equal((await request(css)).marker,'cached');assert.equal(fetches.length,0);
 assert.equal((await request('https://example.com/index.html','navigate')).marker,'network');
 offline=true;cacheItems.set('./index.html',{marker:'offline-page'});
 assert.equal((await request('https://example.com/missing','navigate')).marker,'offline-page');
 const absent=await request('https://example.com/missing.js?v=2');assert.notEqual(absent.marker,'offline-page');
 console.log('Versioned assets load from cache; navigation checks network and offline files remain distinct');
})().catch(e=>{console.error(e);process.exitCode=1;});
