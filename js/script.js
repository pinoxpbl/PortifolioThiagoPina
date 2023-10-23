const btnMenu = document.querySelector(".btn-abrir-menu");
const menu = document.querySelector(".menu-mobile");
const overlay = document.querySelector(".overlay-menu")


btnMenu.addEventListener('click',() => {
    menu.classList.add('abrir');
})

menu.addEventListener('click',() => {
    menu.classList.remove('abrir');
})

overlay.addEventListener('click',() => {
    menu.classList.remove('abrir');
})


