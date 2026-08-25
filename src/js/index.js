const openMenuButton = document.querySelector('.header__menu-button')

const overlayMenu = document.querySelector('.overlay-menu')

const closeMenuButton = document.querySelector('.overlay-menu__close-button')

const overlayEffect = document.querySelector('.overlay-effect')

openMenuButton.addEventListener('click', () => {
    overlayMenu.classList.remove('hidden')
    overlayEffect.classList.remove('hidden')

    openMenuButton.setAttribute('aria-expanded', 'true')

    closeMenuButton.focus()
})


closeMenuButton.addEventListener('click', () => {
    overlayMenu.classList.add('hidden')
    overlayEffect.classList.add('hidden')

    openMenuButton.setAttribute('aria-expanded', 'false')

    openMenuButton.focus()
})

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        overlayMenu.classList.add('hidden')
        overlayEffect.classList.add('hidden')

        openMenuButton.setAttribute('aria-expanded', 'false')
        openMenuButton.focus()
    }
})