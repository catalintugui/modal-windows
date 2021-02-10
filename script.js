'use strict';

const modal = document.querySelector('.modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const addClasses = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

const removeClasses = () => {
    modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
}

for(let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', removeClasses)
}

btnCloseModal.addEventListener('click', addClasses);

overlay.addEventListener('click', addClasses)



