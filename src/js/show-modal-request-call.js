export function showModalRequestCall() {

  let btnShowModalRequestCall = document.querySelector('.nav__btn-requestCall');
  let btnOpenModalRequestCall = document.querySelector('.request-call--modal');
  let btnOpenModalRequestCallHed = document.querySelector('.nav-btn__request-call');
  let btnCloseRequestCall = document.querySelector('.request-call__btn--close');
  let btnOpenModalFeedback = document.querySelector('.feedback--modal');
  let btnOpenMenu = document.querySelector('.dropdown-menu');
  let page = document.querySelector('.page-content');
  let doc = document.querySelector('.page');

  doc.addEventListener('click', function (e) {
    if (btnShowModalRequestCall.contains(e.target) || btnOpenModalRequestCallHed.contains(e.target)) {
      btnOpenModalRequestCall.classList.add('request-call--open');
      btnOpenModalRequestCall.classList.remove('request-call__close');
      btnOpenModalFeedback.classList.add('feedback__close');
      btnOpenMenu.classList.remove('dropdown-menu--open');
      page.classList.add('page-content--overlay');
      }
    });


  btnCloseRequestCall.addEventListener('click', function() {
    btnOpenModalRequestCall.classList.remove('request-call--open');
    btnOpenModalRequestCall.classList.add('request-call__close');
    page.classList.remove('page-content--overlay');
  });

  page.addEventListener('click', function (e) {
    if (!btnCloseRequestCall.contains(e.target) && !btnShowModalRequestCall.contains(e.target)) {
      btnOpenModalRequestCall.classList.remove('request-call--open');
      btnOpenModalRequestCall.classList.add('request-call__close');
    }
  });
}
