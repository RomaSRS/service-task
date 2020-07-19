 export function showContentText() {
  const btns = document.querySelectorAll('.expand-btn--text')

  const toggleVisibility = btn => {
    const frame = btn.parentElement.querySelector('.article__article-wrapper')

      btn.textContent = (!frame.classList.contains('shown-block') && btn.textContent === 'Читать далее') ? 'Свернуть' : 'Читать далее'

      frame.classList.toggle('shown-block')
  }

  for (let btn of btns) { btn.addEventListener('click', () => toggleVisibility(btn)) }
}
