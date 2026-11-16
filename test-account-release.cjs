const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const {execFileSync}=require('node:child_process');
const root=__dirname;
execFileSync(process.execPath,[path.join(root,'scripts/build-account-release.cjs')],{cwd:root});
const page=fs.readFileSync(path.join(root,'account.html'),'utf8');
assert(page.includes('id="account-google"'));
assert(page.includes('id="account-form"'));
assert(!page.includes('Регистрация и восстановление по почте пока настраиваются.'));
assert(page.includes('id="account-switch-row" class="account-switch"'));
assert(!page.includes('id="account-switch-row" class="account-switch" hidden'));
assert(!page.includes('id="account-reset" class="account-link" type="button" hidden'));
assert(page.includes('href="./?guest=1">На главную</a>'));
assert(page.includes('assets/vendor/supabase-2.119.0.js'));
assert(!page.includes('fake-account-sdk.js'));
assert(!page.includes('Тестовая версия'));
for(const match of page.matchAll(/(?:src|data-account-src)="([^"?]+)(?:\?[^"]*)?"/g)){
  assert(fs.existsSync(path.join(root,match[1])),`missing ${match[1]}`);
}
console.log('Account release contains the real login form and all required scripts.');
