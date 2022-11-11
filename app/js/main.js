/* анимация header при скролле */

const header = document.querySelector('.header__nav');
let prevScrollpos = window.pageYOffset;
const headerBlock = document.querySelector('.header__block1-wrapper');
const mediaQuery = window.matchMedia('(max-width: 768px)');

window.addEventListener('scroll', () => {
  const currentScrollPos = window.pageYOffset;
  if (!mediaQuery.matches) {
    if (prevScrollpos > currentScrollPos) {
      header?.classList.add('header__nav_fixed');
    } else {
      header?.classList.remove('header__nav_fixed');
    }
    prevScrollpos = currentScrollPos;

    if (window.pageYOffset >= 200) {
      header?.classList.add('header__nav_hidden');
    }

    if (window.pageYOffset <= 5) {
      header?.classList.remove('header__nav_hidden');
      header?.classList.remove('header__nav_fixed');
    }
  }

  if (mediaQuery.matches) {
    if (prevScrollpos > currentScrollPos) {
      headerBlock?.classList.add('header__block1-wrapper_fixed');
    } else {
      headerBlock?.classList.remove('header__block1-wrapper_fixed');
    }
    prevScrollpos = currentScrollPos;

    if (window.pageYOffset >= 200) {
      headerBlock?.classList.add('header__block1-wrapper_hidden');
    }

    if (window.pageYOffset <= 5) {
      headerBlock?.classList.remove('header__block1-wrapper_hidden');
      headerBlock?.classList.remove('header__block1-wrapper_fixed');
    }
  }
});

/* выпадающее меню */

const list = [...document.querySelectorAll('.list__item')];

list.forEach((item) => {
  item.onmouseover = () => {
    if (mediaQuery.matches) return;
    item?.classList.add('list__item_hover');
    const subMenu = item.querySelector('.sub-menu');
    subMenu?.classList.add('sub-menu_active');
  };

  item.onmouseout = () => {
    if (mediaQuery.matches) return;
    item?.classList.remove('list__item_hover');
    const subMenu = item.querySelector('.sub-menu');
    subMenu?.classList.remove('sub-menu_active');
  };
});
