const hamburger = document.getElementById('hamburger-menu');
hamburger.addEventListener('click', () => nav.classList.toggle('nav-open')); // for the menu to work

//need to create the hover effect
const links = document.querySelectorAll('.main__projects__grid--link');

links.forEach(link => {
    link.addEventListener('click', () => {
        //function
    }); 
});



