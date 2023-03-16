(function () {

  // const carousel = document.querySelector('.carousel');
  // const carouselWrapper = document.querySelector('.carousel-wrapper');
  // const mediaQuery = window.matchMedia('(max-width: 1503.98px)');

  // if (mediaQuery.matches) {
  //   carousel.classList.toggle('swiper');
  //   carouselWrapper.classList.toggle('swiper-wrapper');
  // }


// function handleTabletChange(e) {
//   if (e.matches) {
//     carousel.classList.add('swiper');
//     carouselWrapper.classList.add('swiper-wrapper');
//   }
// }
// mediaQuery.addListener(handleTabletChange);
// handleTabletChange(mediaQuery);

const mediaQueryList = window.matchMedia("screen and (min-width: 600px)");

mediaQueryList.addEventListener('change', foo);
foo(mediaQuery);

function activateSwiper(mq) {
  const carousel = document.querySelector('.carousel');
  const carouselWrapper = document.querySelector('.carousel-wrapper');
  const mediaQuery = window.matchMedia('(max-width: 1503.98px)');
    document.body.style.backgroundColor = mq.matches ? '#f00' : '#060';
}

})();
