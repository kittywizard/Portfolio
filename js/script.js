//click the hamburger, get a menu
const hamburger = document.getElementById('hamburger-menu');
const nav = document.querySelector('.nav');
hamburger.addEventListener('click', closeNav); // for the menu to work

//close the navigation when you click any of the links
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(link => {
    link.addEventListener('click', closeNav);
});

function closeNav() {
    nav.classList.toggle('nav-open');
    hamburger.classList.toggle('rotate');
}

//need to create the hover effect
const links = document.querySelectorAll('.main__projects__grid--link');
const desc = document.querySelectorAll('.main__projects__grid--desc');
console.log(links)
links.forEach((link, index) => {
    link.addEventListener('click', () => {

       desc[index].classList.toggle('hidden');
       links[index].classList.add('absolute');
    }); 
});

const toggleBtn = document.getElementById('nav__toggle-btn');
toggleBtn.addEventListener('click', changeMode);

const lighten = document.getElementById('toggleLight');
const darken = document.getElementById('toggleDark');

function changeMode() {
    toggleBtn.classList.toggle('toggled');
    lighten.classList.toggle('unselected');
    darken.classList.toggle('unselected');
}