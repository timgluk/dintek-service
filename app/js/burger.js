const button = document.querySelector('.burger');
const burger = document.querySelector('.burger-btn');
const nav = document.querySelector('.header__nav');

// const headerBlock = document.querySelector('.header__block1-wrapper');

// const body = document.querySelector('.body');

/* burger animated */

button.addEventListener('click', () => {
  if (burger.classList.contains('active')) {
    burger.classList.remove('active');
    nav.classList.remove('header__nav_active');
  } else {
    burger.classList.toggle('active');
    nav.classList.toggle('header__nav_active');
    headerBlock.classList.add('header__block1-wrapper_fixed');
  }
});
