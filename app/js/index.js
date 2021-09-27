window.onload = function() {
  document.querySelector('.header__burger').addEventListener('click', function() {
    document.querySelector('.header__burger-inner').classList.toggle('header__burger-inner--active');
    document.querySelector('.header__menu').classList.toggle('header__menu--active');
    document.querySelector('.modal-bg').classList.toggle('modal-bg--active');
    document.querySelector('.header__burger-title').innerHTML = document.querySelector('.header__burger-title').innerHTML === 'МЕНЮ' ? 'Закрыть' : 'МЕНЮ';
  });

  document.querySelector('.header__user').addEventListener('click', function() {
    let panel = document.querySelector('.header__user-list');
    panel.classList.toggle('header__user-list--active');
    
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
};