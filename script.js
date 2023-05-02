const c = (e) => document.querySelector(e);
const cs = (e) => document.querySelectorAll(e);

window.onload = () => {
    c('nav').classList.add('active');
    c('nav .top').classList.add('active');
}

c('.menu-toggle').onclick = () => {
    c('nav').classList.toggle('active');
    c('nav .top').classList.toggle('active');

    cs('nav .menu-toggle span')[0].classList.toggle('active');
    cs('nav .menu-toggle span')[1].classList.toggle('active');
    cs('nav .menu-toggle span')[2].classList.toggle('active');
}