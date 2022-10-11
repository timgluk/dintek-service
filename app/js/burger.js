const button = document.querySelector('.burger');
const burger = document.querySelector('.burger-btn');
const nav = document.querySelector('.header__nav');
const body = document.querySelector('.body');

/* contacts template */

const contacts = document.createElement('div');
contacts.classList.add('contacts-nav');
contacts.innerHTML = `
          <a href="tel:" class="contacts-nav__tel">8(800)800-80-80</a>
          <a href="tel:" class="contacts-nav__tel">8(800)800-80-80</a>
          <a href="mailto:email@email.com" class="contacts-nav__mail">email@email.com</a>
          <a href="#" class="contacts-nav__button">Написать нам</a>
`;

/* burger animated */

button.addEventListener('click', () => {
  if (burger.classList.contains('active')) {
    burger.classList.remove('active');
    nav.classList.remove('header__nav_active');
    contacts.remove();
    body.style.overflow = 'visible';
    body.style.touchAction = 'auto';
  } else {
    burger.classList.toggle('active');
    nav.classList.toggle('header__nav_active');
    nav.append(contacts);
    body.style.overflow = 'hidden';
    body.style.touchAction = 'none';

    nav.style.overflow = 'visible';
    nav.style.touchAction = 'auto';
  }
});
