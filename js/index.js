// jshint esversion:6


// external js: flickity.pkgd.js

const carousel = document.querySelector('.carousel');
const flkty = new Flickity( carousel, {
  imagesLoaded: true,
  percentPosition: false,
  autoPlay: 5000,
});

const imgs = carousel.querySelectorAll('.carousel-cell img');
// get transform property
const docStyle = document.documentElement.style;
const transformProp = typeof docStyle.transform == 'string' ?
  'transform' : 'WebkitTransform';

flkty.on( 'scroll', () => {
  flkty.slides.forEach( ( slide, i ) => {
    const img = imgs[i];
    let x = ( slide.target + flkty.x ) * -1/4;
    img.style[ transformProp ] = 'translateX(' + x  + 'px)';
  });
});


// Sticky Navbar

// When the user scrolls the page, execute myFunction 
window.onscroll = () => { myFunction() };

// Get the navbar
const navbar = document.getElementById("navbar");

// Get the offset position of the navbar
const sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
myFunction = () => {
  window.pageYOffset >= sticky ? navbar.classList.add("sticky") : navbar.classList.remove("sticky")
}