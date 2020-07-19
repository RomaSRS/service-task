export function showModalFeedback() {

  let btnShowModalFeedback = document.querySelector('.nav__btn-feedback');
  let btnOpenModalFeedback = document.querySelector('.feedback--modal');
  let btnOpenModalFeedbackHed = document.querySelector('.nav-btn__feedback');
  let btnCloseFeedback = document.querySelector('.feedback__btn--close');
  let btnOpenModalRequestCall = document.querySelector('.request-call--modal');
  let btnOpenMenu = document.querySelector('.dropdown-menu');
  let page = document.querySelector('.page-content');
  let doc = document.querySelector('.page');

  doc.addEventListener('click', function (e) {
    if (btnShowModalFeedback.contains(e.target) || btnOpenModalFeedbackHed.contains(e.target)) {
      btnOpenModalFeedback.classList.add('feedback--open');
      btnOpenModalFeedback.classList.remove('feedback__close');
      btnOpenMenu.classList.remove('dropdown-menu--open');
      btnOpenModalRequestCall.classList.add('request-call__close');
      page.classList.add('page-content--overlay');
      }
    });


  btnCloseFeedback.addEventListener('click', function() {
    btnOpenModalFeedback.classList.remove('feedback--open');
    btnOpenModalFeedback.classList.add('feedback__close');
    page.classList.remove('page-content--overlay');
  });

  page.addEventListener('click', function (e) {
    if (!btnCloseFeedback.contains(e.target) && !btnShowModalFeedback.contains(e.target)) {
      btnOpenModalFeedback.classList.remove('feedback--open');
      btnOpenModalFeedback.classList.add('feedback__close');
    }
  });
}
