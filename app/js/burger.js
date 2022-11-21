const button = document.querySelector('.burger');
const burger = document.querySelector('.burger-btn');
const nav = document.querySelector('.header__nav');
const body = document.querySelector('.body');

/* burger animated */

button?.addEventListener('click', () => {
  if (burger.classList.contains('active')) {
    burger.classList.remove('active');
    nav.classList.remove('header__nav_active');
    body.style.overflow = 'visible';
    body.style.touchAction = 'none';
  } else {
    burger.classList.toggle('active');
    nav.classList.toggle('header__nav_active');
    body.style.overflow = 'hidden';
    body.style.touchAction = 'none';
    nav.style.overflowX = 'scroll';
    nav.style.touchAction = 'pan-y';
  }
});
