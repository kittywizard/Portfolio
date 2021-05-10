//click the hamburger, get a menu
const hamburger = document.getElementById('hamburger-menu');
const nav = document.querySelector('.nav');
hamburger.addEventListener('click', closeNav); // for the menu to work

//close the navigation when you click any of the links
const navLinks = document.querySelectorAll('.nav__link');
console.log(navLinks);
navLinks.forEach(link => {
    link.addEventListener('click', closeNav);
});

function closeNav() {
    nav.classList.toggle('nav-open');
}

//need to create the hover effect
const links = document.querySelectorAll('.main__projects__grid--link');

links.forEach(link => {
    link.addEventListener('click', () => {
        //function
    }); 
});

