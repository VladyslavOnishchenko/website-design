const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');

burger.addEventListener('click', () => {
    menu.classList.toggle('header__menu--open')
})

burger.addEventListener('click', () => {
    burger.classList.toggle('header__burger--open')
    burger.setAttribute('aria-expanded', menu.classList.contains('header__menu--open').toString());})

document.addEventListener('click', (event) => {
    console.log(event.target);
    if (!menu.contains(event.target) && !burger.contains(event.target)) {
        burger.classList.remove('header__burger--open')
        menu.classList.remove('header__menu--open')
        burger.setAttribute('aria-expanded', 'false')
    }
});