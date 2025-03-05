const mobileMenu = document.querySelector('.mobile-menu')
const menuBtnOpen = document.querySelector('.menu-btn-open')
const menuBtnClose = document.querySelector('.menu-btn-close')
const menuBody = document.querySelector('.body')

const toggleMenu = () => mobileMenu.classList.toggle('is-open')
const toggleMenuBody = () => menuBody.classList.toggle('overflow-hidden')

menuBtnOpen.addEventListener('click', toggleMenu);
menuBtnOpen.addEventListener('click', toggleMenuBody);
menuBtnClose.addEventListener('click', toggleMenu);
menuBtnClose.addEventListener('click', toggleMenuBody);