const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav');
menuBtn?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(open));});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuBtn?.setAttribute('aria-expanded','false');}));
const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));

// CTA flutuante no mobile: surge quando os botões principais saem da tela.
const heroActions=document.querySelector('.hero-actions');
if(heroActions){
  const floatingWhats=document.createElement('a');
  floatingWhats.className='floating-whatsapp';
  floatingWhats.href='#contato';
  floatingWhats.setAttribute('aria-label','Falar pelo WhatsApp');
  floatingWhats.innerHTML='<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3.2a12.5 12.5 0 0 0-10.8 18.8L3.6 28.8l7-1.8A12.5 12.5 0 1 0 16 3.2Zm0 22.7c-1.9 0-3.7-.5-5.3-1.4l-.4-.2-4.1 1.1 1.1-4-.3-.4A10.1 10.1 0 1 1 16 25.9Zm5.5-7.6c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-1.7-.8-2.8-1.5-3.9-3.4-.3-.5.3-.5.9-1.5.1-.2 0-.4 0-.6-.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.3 1.4 3.5c.2.2 2.4 3.7 5.9 5.2.8.4 1.5.6 2 .7.8.3 1.6.2 2.2.1.7-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.2-.6-.4Z"/></svg>';
  document.body.appendChild(floatingWhats);

  const ctaObserver=new IntersectionObserver(([entry])=>{
    const mobile=window.matchMedia('(max-width: 760px)').matches;
    floatingWhats.classList.toggle('visible',mobile&&!entry.isIntersecting);
  },{threshold:.25});
  ctaObserver.observe(heroActions);

  window.addEventListener('resize',()=>{
    if(!window.matchMedia('(max-width: 760px)').matches){floatingWhats.classList.remove('visible');}
  });
}
