'use strict';

  // export function showContentText() {
  //   const btns = document.querySelectorAll('.expand-btn--text');

  //   for (let btn of btns) {

  //     const frame = btn.parentElement.querySelector('.article__article-wrapper');

  //     function toggleVisibility() {

  //       if (!frame.classList.contains('shown-block')) {

  //         if (btn.innerText === 'Читать далее') btn.innerText = 'Свернуть';

  //       } else {

  //         if (btn.innerText === 'Свернуть') btn.innerText = 'Читать далее';
  //       }

  //       frame.classList.toggle('shown-block');
  //     };

  //      btn.addEventListener('click', () => toggleVisibility(btn))
  //   }
  // }

  export function showContentText() {
    const btns = document.querySelectorAll('.expand-btn--text')

    const toggleVisibility = btn => {
      const frame = btn.parentElement.querySelector('.article__article-wrapper')

      btn.textContent = (!frame.classList.contains('shown-block') && btn.textContent === 'Читать далее') ? 'Свернуть' : 'Читать далее'

      frame.classList.toggle('shown-block')
    }

    for (let btn of btns) { btn.addEventListener('click', () => toggleVisibility(btn)) }
  }
