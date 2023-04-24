const c = (e) => document.querySelector(e);
const cs = (e) => document.querySelectorAll(e);

c('nav .menu-toggle').onclick = () => {
    cs('nav .menu-toggle span')[0].classList.toggle('active');
    cs('nav .menu-toggle span')[1].classList.toggle('active');
    cs('nav .menu-toggle span')[2].classList.toggle('active');
}