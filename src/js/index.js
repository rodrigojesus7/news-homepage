const openMenuButton = document.querySelector('.header__menu-button')

const overlayMenu = document.querySelector('.overlay-menu')

const closeMenuButton = document.querySelector('.overlay-menu__close-button')

openMenuButton.addEventListener('click', () => {
    overlayMenu.classList.remove('hidden')
})


closeMenuButton.addEventListener('click', () => {
    overlayMenu.classList.add('hidden')
})