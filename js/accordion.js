'use strict';
document.addEventListener('DOMContentLoaded', () => {
  const featureElem = document.querySelector('.feature-list');
  const featureLinkElems = document.querySelectorAll('.feature__link');
  const featureSubElems = document.querySelectorAll('.feature-sub');

  const featureElems = (index) => {
    featureLinkElems.forEach((featureLinkElem, i) => {
      if (index === i) {
        featureLinkElem.classList.add('feature__link_active');
        featureLinkElem.nextElementSibling.classList.remove('hidden');
      } else {
        featureLinkElem.classList.remove('feature__link_active');
        featureLinkElem.nextElementSibling.classList.add('hidden');
      }
    });
  };

  featureElem.addEventListener('click', (event) => {
    featureLinkElems.forEach((btn, index) => {
      const target = event.target.closest('.feature__link');
      if (btn.classList.contains('feature__link_active') && btn === target) {
        featureSubElems[index].classList.add('hidden');
        btn.classList.remove('feature__link_active');
      } else if (!btn.classList.contains('feature__link_active') && btn === target) {
        featureElems(index);
      }
    });
  });
});
