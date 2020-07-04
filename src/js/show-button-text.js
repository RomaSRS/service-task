'use strict';

  export function showContentText() {
    let btns = document.querySelectorAll('.expand-btn--text');

    for (let btn of btns) {

      let frame = btn.parentElement.querySelector('div');

      function toggleVisibility() {

        if (!frame.classList.contains('shown-block')) {

          if (btn.innerText === 'Читать далее') btn.innerText = 'Свернуть';

        } else {

          if (btn.innerText === 'Свернуть') btn.innerText = 'Читать далее';
        }

        frame.classList.toggle('shown-block');
      };

      btn.addEventListener('click', toggleVisibility);
    }
  }

