const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
const pageHeaderOuterWrapper = document.querySelector('.page-header__outer-wpapper');

const priceList = document.querySelector('.price__list');
const toggleBase = document.querySelector('.price__toggle--base');
const toggleStandart = document.querySelector('.price__toggle--standart');
const toggleUnlim = document.querySelector('.price__toggle--unlim');

const editorForm = document.querySelector('.editor__tool-wrapper');
const resetButton = document.querySelector('.editor__cancel-button');

const contestForm = document.querySelector('.contest__form');
const secondName = document.querySelector('.contest__data--second-name');
const firstName = document.querySelector('.contest__data--first-name');
const email = document.querySelector('.contest__data--email');
const modalFailure = document.querySelector('.modal__failure-wrapper');
const failureButton = document.querySelector('.modal__button--failure');
const modalSuccess = document.querySelector('.modal__success-wrapper');
const successButton = document.querySelector('.modal__button--success');

// Menu

navMain.classList.remove('main-nav--nojs');
pageHeaderOuterWrapper.classList.remove('page-header__outer-wpapper--nojs');

document.addEventListener('DOMContentLoaded',function() {
  navMain.classList.remove('main-nav--opened');
  navMain.classList.add('main-nav--closed');
  pageHeaderOuterWrapper.classList.remove('page-header__outer-wpapper--opened-menu');
});

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

// Form

if (contestForm) {
  contestForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    if (!firstName.value || !secondName.value || !email.value) {
      // show modal failure
      modalFailure.style.display = 'block';
      failureButton.addEventListener('click', function() {
        modalFailure.style.display = 'none';
      });
    } else {
      // show modal success
      modalSuccess.style.display = 'block';
      successButton.addEventListener('click', function() {
        modalSuccess.style.display = 'none';
      });
    }
  });
}

// Editor

if (editorForm) {
  resetButton.addEventListener('click', function() {
    editorForm.reset();
  });
}

// Price table

if (priceList) {
  toggleBase.addEventListener('click', function() {
    if (toggleStandart.classList.contains('slider__toggle--current') || toggleUnlim.classList.contains('slider__toggle--current')) {
      if (toggleStandart.classList.contains('slider__toggle--current')) {
        toggleStandart.classList.remove('slider__toggle--current');
        priceList.classList.remove('price__list--standart');
      } else {
        toggleUnlim.classList.remove('slider__toggle--current');
        priceList.classList.remove('price__list--unlim');
      }
      toggleBase.classList.add('slider__toggle--current');
      priceList.classList.add('price__list--base');
    }
  });

  toggleStandart.addEventListener('click', function() {
    if (toggleBase.classList.contains('slider__toggle--current') || toggleUnlim.classList.contains('slider__toggle--current')) {
      if (toggleBase.classList.contains('slider__toggle--current')) {
        toggleBase.classList.remove('slider__toggle--current');
        priceList.classList.remove('price__list--base');
      } else {
        toggleUnlim.classList.remove('slider__toggle--current');
        priceList.classList.remove('price__list--unlim');
      }
      toggleStandart.classList.add('slider__toggle--current');
      priceList.classList.add('price__list--standart');
    }
  });

  toggleUnlim.addEventListener('click', function() {
    if (toggleBase.classList.contains('slider__toggle--current') || toggleStandart.classList.contains('slider__toggle--current')) {
      if (toggleBase.classList.contains('slider__toggle--current')) {
        toggleBase.classList.remove('slider__toggle--current');
        priceList.classList.remove('price__list--base');
      } else {
        toggleStandart.classList.remove('slider__toggle--current');
        priceList.classList.remove('price__list--standart');
      }
      toggleUnlim.classList.add('slider__toggle--current');
      priceList.classList.add('price__list--unlim');
    }
  });
}
