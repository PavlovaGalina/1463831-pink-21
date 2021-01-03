var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var pageHeaderOuterWrapper = document.querySelector('.page-header__outer-wpapper');

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
