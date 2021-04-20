const hamburger = document.getElementById('hamburger-menu');
const nav = document.querySelector(".nav");
const header = document.getElementById('header');
const links = document.querySelectorAll('.main__projects__grid--link');

hamburger.addEventListener('click', () => nav.classList.toggle('show'));

links.forEach(link => {
    link.addEventListener('click', imageHover); //i don't think this is hover exactly
});

function imageHover() {
    //main__projects__grid--link 
    console.log('test');

}

imageHover();
/*
need to create these elements with their copy - somehow get it to activate on hover
                    <h6 class="main__projects__grid--desc-title">Project #1</h6>
                    <p class="main__projects__grid--desc">short description??</p>

*/