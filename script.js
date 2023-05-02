const c = (e) => document.querySelector(e);
const cs = (e) => document.querySelectorAll(e);

window.onload = () => {
    c('nav').classList.add('active');
}

c('.menu-toggle').onclick = () => {
    c('nav').classList.toggle('active');
}