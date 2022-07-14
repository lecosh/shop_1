const specialSlider = new Swiper('.special-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  // Navigation arrows
  navigation: {
    nextEl: '.special-btn-prev',
    prevEl: '.special-btn-next',
  },
});
const reviewslSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 2,
  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider-btn-next',
    prevEl: '.reviews-slider-btn-prev',
  },
  breakpoints: {
    576:
    slidesPerView: 1
  }
});