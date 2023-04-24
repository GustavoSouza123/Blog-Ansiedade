const c = (e) => document.querySelector(e);
const cs = (e) => document.querySelectorAll(e);

c('.menu-toggle').onclick = () => {
    cs('nav .menu-toggle span')[0].classList.toggle('active');
    cs('nav .menu-toggle span')[1].classList.toggle('active');
    cs('nav .menu-toggle span')[2].classList.toggle('active');

    c('nav').classList.toggle('active');
    c('nav header').classList.toggle('active');
    c('nav ul').classList.toggle('active');
    c('nav .menu-toggle').classList.toggle('active');
}