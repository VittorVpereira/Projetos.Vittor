const nav = document.getElementById('nav');
const toggle = document.getElementById('nav-toggle');
if(toggle){
toggle.addEventListener('click', ()=>{
nav.classList.toggle('show');
});
}


// Smooth scroll for links
document.querySelectorAll('a[href^="#"]').forEach(link=>{
link.addEventListener('click', (e)=>{
const href = link.getAttribute('href');
if(href.startsWith('#')){
e.preventDefault();
const el = document.querySelector(href);
if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
nav.classList.remove('show');
}
});
});

const nav = document.getElementById('nav');
const toggle = document.getElementById('nav-toggle');

// Abrir/fechar menu mobile
if (toggle) {
    toggle.addEventListener('click', () => {
        nav.classList.toggle('show');
    });
}

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const el = document.querySelector(href);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            nav.classList.remove('show');
        }
    });
});
