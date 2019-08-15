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


// Sticky Navbar && Arrow

// When the user scrolls the page, execute myFunction 
window.onscroll = () => { myFunction() };

// Get the navbar
const navbar = document.getElementById("navbar");
let arrow = document.getElementById("arrow-btn");

// Get the offset position of the navbar
const sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
myFunction = () => {

  // Is windows y-axis offset greater than or equal to navbar: true = add sticky class, false = remove sticky class 
  window.pageYOffset >= sticky ? (navbar.classList.add("sticky"), arrow.style.display = "block") 
  : (navbar.classList.remove("sticky"), arrow.style.display = "none");


};

const topFunction = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

// Animated Arrow Button

const refreshRate = 1000 / 60;
const maxYPosition = 100;
let speedY = 3;
let positionY = 0;
function step() {
  positionY = positionY + speedY;
  if (positionY > maxYPosition || positionY < 0) {
    speedY = speedY * (-1);
  }
  arrow.style.bottom = `${positionY}px`;
  window.requestAnimationFrame(step);
}
window.requestAnimationFrame(step);