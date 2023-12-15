// NAVBAR
window.onscroll = function() {
    const header = document.querySelector('header')
    const navFix = header.offsetTop

    if(window.pageYOffset > navFix) {
        header.classList.add('fixed-navbar')
    } else {
        header.classList.remove('fixed-navbar')
    }
}

// Menus Line
const Menus = document.querySelector('#menus');
const navMenu = document.querySelector('#nav-menu')

Menus.addEventListener('click', function() {
    Menus.classList.toggle('menus-active')
    navMenu.classList.toggle('hidden')
})