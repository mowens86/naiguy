// external js: flickity.pkgd.js
// jshint esversion:6

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