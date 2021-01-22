const menu = document.querySelector('.menu')
const btnMenuOpen = document.querySelector(".btnMenu_open");
const btnMenuClose = document.querySelector(".btnMenu_close");

btnMenuOpen.addEventListener('click', function() {
    menu.classList.add('menu__open');

})

btnMenuClose.addEventListener('click', function() {
    menu.classList.remove('menu__open');
})