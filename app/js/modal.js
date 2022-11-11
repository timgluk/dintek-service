const buttonModal = [...document.querySelectorAll('.contacts__button-wrapper__button')];
const modal = document.querySelector('.modal-wrapper');

buttonModal.forEach((button) => {
  button.onclick = (e) => {
    e.preventDefault();
    modal.classList.add('modal-wrapper_active');
  };
});

modal?.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-wrapper') || e.target.classList.contains('modal__close')) {
    modal.classList.remove('modal-wrapper_active');
  }
});
