$(document).ready(function () {
  $('.main-slider').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 6500,
  });
});
document.addEventListener('DOMContentLoaded', () => {

  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.menu-block');


  // **********[ANY CLICK ON PAGE]*************
  document.addEventListener('click', (event) => {


    //! ***********[BURGER]*********** 
    if (event.target.closest('.burger')) {
      burger.classList.toggle('active');
      if (burger.classList.contains('active')) {
        menu.style.display = 'block';
        setTimeout(() => {
          menu.classList.add('active');
        }, 1); //* чтобы анимация появления не слетала
      } else {
        console.log(1);
        menu.classList.remove('active');
        setTimeout(() => {
          menu.style.display = 'none';
        }, 300);
      }
    } else if (burger.classList.contains('active') && !event.target.closest('.menu-block')) {
      console.log(2);
      event.preventDefault();
      burger.classList.remove('active');
      menu.classList.remove('active');
      setTimeout(() => {
        menu.style.display = 'none';
      }, 300); //! таймаут должен совпадать с transition
    }
    //! ***********[BURGER END]***********

    //! **************[TABS]**************
    if (event.target.classList.contains('tab-nav')) {
      const currentTabNav = event.target;
      const parent = event.target.parentElement;
      const tabNav = parent.querySelectorAll('.tab-nav');
      const tabNavID = currentTabNav.getAttribute('data-tab-nav-id');
      const tabContent = parent.parentElement.parentElement.querySelector('.tab-content-wrapper').querySelectorAll('.tab-content');
      //console.log(tabContent);
      tabNav.forEach((item) => {
        item.classList.remove('tab-nav-active');
      });
      currentTabNav.classList.add('tab-nav-active');
      tabContent.forEach((item) => {
        item.classList.remove('tab-content-active');
        if (item.getAttribute('data-tab-content-id') === tabNavID) {
          item.classList.add('tab-content-active');
        }
      });
    }
    //! ************[TABS END]************


  });
  /* ***************[возврат меню в хедер при изминении ширины окна]************ */
  window.addEventListener('resize', (event) => {
    width = event.target.innerWidth;
    if (width > 1080) {
      menu.style.display = 'block';
    } else if (width == 1080) {
      menu.classList.remove('active');
    }
  });



})