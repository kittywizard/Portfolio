const hamburger = document.getElementById('hamburger-menu');
const nav = document.querySelector(".nav");
const header = document.getElementById('header');

hamburger.addEventListener('click', e => {
    nav.classList.toggle('show');
    //header.classList.toggle('bg-color');

});