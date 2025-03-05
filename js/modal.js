const modal = document.querySelector('.backdrop')
const modalBtnOpen = document.querySelector('.modal-btn-open');
const modalBtnOpe = document.querySelector('.modal-btn-ope');
const modalBtnClose = document.querySelector('.modal-button-close')
const body = document.querySelector('.body')

const toggleModal = () => modal.classList.toggle('is-hidden')
const toggleBody = () => body.classList.toggle('overflow-hidden')

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnOpe.addEventListener('click', toggleModal);
modalBtnOpe.addEventListener('click', toggleBody);
modalBtnOpen.addEventListener('click', toggleBody);
modalBtnClose.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleBody);