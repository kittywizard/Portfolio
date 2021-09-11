/* NAV SECTION */ 

//click the hamburger, get a menu
const hamburger = document.getElementById('hamburger-menu');
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


/* MODAL SECTION  */
//creates the modal click on / off 
const links = document.querySelectorAll('.main__projects__grid--link'); //the image itself
const desc = document.querySelectorAll('.main__projects__grid--desc'); // the description modal
links.forEach((link, index) => {
    link.addEventListener('click', () => {

       desc[index].classList.toggle('hidden'); // base.scss display: none;
       links[index].classList.toggle('hidden');
    }); 
});
desc.forEach((modal, index) => {
    modal.addEventListener('click', () => {

        desc[index].classList.toggle('hidden'); // base.scss display: none;
        links[index].classList.toggle('hidden');
    });
});

//** figure out which ones aren't necessary, later */
const nav = document.querySelector('.nav');
const main = document.querySelector("main");
const header = document.getElementById('header');
const body = document.getElementById('body');
const li = document.querySelectorAll('.nav__item');


/* DARK/LIGHT MODE TOGGLE */

const toggleBtn = document.getElementById('nav__toggle-btn');
toggleBtn.addEventListener('click', changeMode);

const lighten = document.getElementById('toggleLight');
const darken = document.getElementById('toggleDark');

console.log(document.body.classList)

function changeMode() {

    if(document.body.classList.contains('darkmode')) {
        document.body.classList.remove('darkmode');
        document.body.classList.add('lightmode');

    } else {
        document.body.classList.remove('lightmode');
        document.body.classList.add("darkmode");
    }

    //this controls the button itself - makes the moon or sun light up!
    toggleBtn.classList.toggle('toggled');
    lighten.classList.toggle('unselected');
    darken.classList.toggle('unselected');
    
    // switchClass(nav, )
}

// function switchClass(element, classRemove, classAdd) {
//     element.classList.toggle(classRemove);
//     element.classList.toggle(classAdd);
// }
