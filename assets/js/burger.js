const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
const body = document.querySelector('.body')

burger.addEventListener('click', () => {
    menu.classList.toggle('header__menu--open');
    burger.classList.toggle('header__burger--open');
    body.classList.toggle('body--no-scroll');
    burger.setAttribute('aria-expanded', menu.classList.contains('header__menu--open').toString());
})

document.addEventListener('click', (event) => {
    // console.log(event.target);
    if (!menu.contains(event.target) && !burger.contains(event.target)) {
        burger.classList.remove('header__burger--open');
        menu.classList.remove('header__menu--open');
        body.classList.remove('body--no-scroll');
        burger.setAttribute('aria-expanded', 'false');
    }
});