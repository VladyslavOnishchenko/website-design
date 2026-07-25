const counter = document.querySelector ('.header__counter');
const counterBtn = document.querySelector('.header__button');
let count = 0;

// console.log(counter, counterBtn);

counterBtn.addEventListener('click', () =>{
    count = count + 1;
    counter.textContent = count;
});
