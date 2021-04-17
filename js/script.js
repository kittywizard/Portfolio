const hamburger = document.getElementById('hamburger-menu');
const nav = document.querySelector(".nav");

hamburger.addEventListener('click', e => {
    nav.classList.toggle('show');
});