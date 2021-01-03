var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var pageHeaderOuterWrapper = document.querySelector('.page-header__outer-wpapper');
var priceList = document.querySelector('.price__list');
var toggleBase = document.querySelector('price__toggle--base');
var toggleStandart = document.querySelector('price__toggle--standart');
var toggleUnlim = document.querySelector('price__toggle--unlim');

navMain.classList.remove('main-nav--nojs');
pageHeaderOuterWrapper.classList.remove('page-header__outer-wpapper--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    pageHeaderOuterWrapper.classList.remove('page-header__outer-wpapper--closed-menu');
    pageHeaderOuterWrapper.classList.add('page-header__outer-wpapper--opened-menu');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    pageHeaderOuterWrapper.classList.add('page-header__outer-wpapper--closed-menu');
    pageHeaderOuterWrapper.classList.remove('page-header__outer-wpapper--opened-menu');
  }
});

/**toggleBase.addEventListener('click', function() {
  if (toggleStandart.classList.contains('slider__toggle--current') || toggleUnlim.classList.contains('slider__toggle--current')) {
    if (toggleStandart.classList.contains('slider__toggle--current')) {
      toggleStandart.classList.remove('slider__toggle--current');
    } else {
      toggleUnlim.classList.remove('slider__toggle--current');
    }
    toggleBase.classList.add('slider__toggle--current');
    priceList.classList.add('price__list--base');
  }
});*/
