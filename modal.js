const modal = document.querySelector('.backdrop')
const modalBtnOpen = document.querySelector('.modal-btn-open');
const modalBtnOpe = document.querySelector('.modal-btn-ope');
const modalBtnClose = document.querySelector('.modal-button-close')
const body = document.querySelector('.body')

const toggleModal = () => modal.classList.toggle('is-hidden')
const toggleBody = () => body.classList.toggle('overflow-hidden')

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnOpen.addEventListener('click', toggleBody);
modalBtnOpe.addEventListener('click', toggleBody);
modalBtnOpe.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleBody);