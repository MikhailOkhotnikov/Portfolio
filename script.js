const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.hamburger');
    const navLinks = document.querySelectorAll('.hamburger li');

    burger.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle('toggle');
    });
};

navSlide();

const openWindowButtons = document.querySelectorAll('[data-window-target]');
const closeWindowButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openWindowButtons.forEach(button => {
    button.addEventListener('click', () => {
        const window = document.querySelector(button.dataset.windowTarget)
        openWindow(window)
    })
})

closeWindowButtons.forEach(button => {
    button.addEventListener('click', () => {
        const window = button.closest('.window')
        closeWindow(window)
    })
})

function openWindow(window) {
    if (window == null) return
    window.classList.add('active')
    overlay.classList.add('active')
}

function closeWindow(window) {
    if (window == null) return
    window.classList.remove('active')
    overlay.classList.remove('active')
}