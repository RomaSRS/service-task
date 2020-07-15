export function showModalRequestCall() {

  let btnShowModalRequestCall = document.querySelector('.nav__btn-requestCall');
  let btnOpenModalRequestCall = document.querySelector('.request-call--modal');
  let btnOpenModalRequestCallHed = document.querySelector('.nav-btn__request-call');
  let btnCloseRequestCall = document.querySelector('.request-call__btn--close');
  let btnOpenMenu = document.querySelector('.dropdown-menu');
  let page = document.querySelector('.page-content');
  let doc = document.querySelector('.page');

  doc.addEventListener('click', function (e) {
    if (btnShowModalRequestCall.contains(e.target) || btnOpenModalRequestCallHed.contains(e.target)) {
      btnOpenModalRequestCall.classList.add('request-call--open');
      btnOpenModalRequestCall.classList.remove('request-call__close');
      btnOpenMenu.classList.remove('dropdown-menu--open');
      btnOpenMenu.classList.add('dropdown-menu--close');
      page.classList.add('page-content--overlay');
      console.log('fucking life');
      }
    });


  btnCloseRequestCall.addEventListener('click', function() {
    btnOpenModalRequestCall.classList.remove('request-call--open');
    btnOpenModalRequestCall.classList.add('request-call__close');
    page.classList.remove('page-content--overlay');
    console.log('FUCK');
  });

  page.addEventListener('click', function (e) {
    if (!btnCloseRequestCall.contains(e.target) && !btnShowModalRequestCall.contains(e.target)) {
      btnOpenModalRequestCall.classList.remove('request-call--open');
      btnOpenModalRequestCall.classList.add('request-call__close');
      console.log('shit dream');
    }
  });
}
