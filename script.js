const nav=document.getElementById('nav');
document.getElementById('burger').onclick=()=>nav.classList.toggle('open');
nav.querySelectorAll('a').forEach(a=>a.onclick=()=>nav.classList.remove('open'));
const c=document.getElementById('cookie');
try{if(!localStorage.getItem('lcm_cookie'))c.style.display='block'}catch(e){c.style.display='block'}
function setCookie(v){try{localStorage.setItem('lcm_cookie',v)}catch(e){}c.style.display='none'}
document.getElementById('acc').onclick=()=>setCookie('all');
document.getElementById('dec').onclick=()=>setCookie('essential');
const f=document.getElementById('form');
if(f)f.onsubmit=e=>{e.preventDefault();const s=f.querySelector('button');
location.href='mailto:admin@lcm-design.click?subject='+encodeURIComponent('Inquiry from LCM DESIGN website')+'&body='+encodeURIComponent('Name: '+f.name.value+'\nEmail: '+f.email.value+'\n\n'+f.msg.value);
s.textContent='Opening your email app…'};
