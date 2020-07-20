export function showMenu() {

  let btnShow = document.querySelector('.nav-btn__burger');
  let btnOpenMenu = document.querySelector('.dropdown-menu');
  let btnCloseMenu = document.querySelector('.header-content__btn-close');
  let page = document.querySelector('.page-content');

  btnShow.addEventListener('click', function() {
    btnOpenMenu.classList.add('dropdown-menu--open');
    btnOpenMenu.classList.remove('dropdown-menu--close');
    page.classList.add('page-content--overlay');
  });

  btnCloseMenu.addEventListener('click', function() {
    btnOpenMenu.classList.remove('dropdown-menu--open');
    btnOpenMenu.classList.add('dropdown-menu--close');
    page.classList.remove('page-content--overlay');
  });

  page.addEventListener('click', function (e) {
    if (!btnCloseMenu.contains(e.target) && !btnShow.contains(e.target)) {
      page.classList.remove('page-content--overlay');
      btnOpenMenu.classList.remove('dropdown-menu--open');
      btnOpenMenu.classList.add('dropdown-menu--close');
    }
  });
}
