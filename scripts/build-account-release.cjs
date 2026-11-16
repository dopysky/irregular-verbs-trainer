// Prepare the public account page from the same UI used in the account tests.
const fs=require('node:fs');
const path=require('node:path');
const {execFileSync}=require('node:child_process');
const root=path.resolve(__dirname,'..');
execFileSync(process.execPath,[path.join(__dirname,'build-account-test.cjs')],{cwd:root});
const test=fs.readFileSync(path.join(root,'account-test.html'),'utf8');
const notice='<p class="account-test-note">Тестовая версия</p>';
if(!test.includes(notice))throw new Error('Account test notice not found');
const entry='<a class="account-entry" href="./account.html">Войти</a>';
if(!test.includes(entry))throw new Error('Account entry not found');
const reset='id="account-reset" class="account-link" type="button"';
const signup='id="account-switch-row" class="account-switch"';
if(!test.includes(reset)||!test.includes(signup))throw new Error('Account controls not found');
const release=test.replace(notice,'')
  .replace(entry,'')
  .replace('<a class="account-link" href="./">На главную</a>','<a class="account-link" href="./?guest=1">На главную</a>')
  .replace('<script src="sync-engine.js"></script>','<script src="sync-engine.js?v=3"></script>')
  .replace('<script src="account-test.js"></script>','<script src="account-test.js?v=5"></script>')
  .replace(/^[\t ]+$/gm,'');
fs.writeFileSync(path.join(root,'account.html'),release,'utf8');
console.log('Account page prepared.');
