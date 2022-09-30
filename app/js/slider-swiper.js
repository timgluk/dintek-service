/* eslint-disable */
const swiper = new Swiper('.swiper', {
// цикличность слайдераа
  loop: true,
// включение стрелок
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
// эффект сладера
  effect: 'slide',
// перекючение слайдов стрелками
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
// курсор - рука
  grabCursor: true,
});