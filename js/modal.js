'use strict';
const moreElem = document.querySelector('.design-block');
const modalElem = document.querySelector('.modal');

const openModal = (target) => {
  if (target.classList.contains('more')) modalElem.classList.remove('hidden');
};

const closeModal = () => {
  modalElem.classList.add('hidden');
};

moreElem.addEventListener('click', (event) => {
  openModal(event.target);
});

modalElem.addEventListener('click', (event) => {
  const target = event.target;
  if (target.classList.contains('overlay') ||
    target.classList.contains('modal__close')) {
    closeModal();
  }
});
