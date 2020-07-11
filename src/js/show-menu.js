export function showMenu() {

  let btnShow = document.querySelector('.nav-btn__burger');
  let btnOpenMenu = document.querySelector('.dropdown-menu');
  let btnCloseMenu = document.querySelector('.header-content__btn-close');

  btnShow.addEventListener('click', function() {
    btnOpenMenu.classList.add('dropdown-menu--open');
    btnOpenMenu.classList.remove('dropdown-menu--close');
    console.log('fuck');
  });

  btnCloseMenu.addEventListener('click', function() {
    btnOpenMenu.classList.remove('dropdown-menu--open');
    btnOpenMenu.classList.add('dropdown-menu--close');
    console.log('fuck off');
  });
}
