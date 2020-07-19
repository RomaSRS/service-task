
export function showContent() {

  const btn = document.querySelector('.expand-btn');
  const frame = document.querySelector('.slide');

  btn.addEventListener('click', switchVisibility);
  btn.addEventListener('keydown', keyDetect);

  function switchVisibility() {
      frame.classList.toggle('slide_maxHeight--none');
      btn.classList.toggle('expand-btn_rotated');

      if (frame.classList.contains('slide_maxHeight--none')) {
        btn.innerText = 'Скрыть';
      } else btn.innerText = 'Показать все';
  };

  function keyDetect(evt) {
      if (evt.code === 'space') switchVisibility();
  }
};
