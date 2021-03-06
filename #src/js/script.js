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
  const body = document.querySelector('body');
  const bodyWrapper = document.querySelector('.body-wrapper');
  let lastDocWidth = 0;
  lastDocWidth = window.innerWidth;
  //console.log(main);


  // **********[ANY CLICK ON PAGE]*************
  document.addEventListener('click', (event) => {
    //console.log(event.target);
    //! ***********[BURGER]***********
    if (event.target.closest('.burger')) {
      burger.classList.toggle('active');
      if (burger.classList.contains('active')) {
        let menuWidth = menu.offsetWidth;
        burger.style.right = `-${menuWidth - 20}px`;
        bodyWrapper.style.left = `-${menuWidth}px`;
        document.querySelector('body').style.overflow = 'hidden';
        document.querySelector('.header-wrapper').style.overflow = 'visible';
        document.querySelector('.body-wrapper').classList.add('on-menu-open');

      } else {
        bodyWrapper.style.left = 0;
        burger.style.right = `65px`;
        document.querySelector('body').style.overflow = 'visible';
        document.querySelector('.body-wrapper').classList.remove('on-menu-open');
        document.querySelector('.header-wrapper').style.overflow = 'hidden';
      }
    } else if (burger.classList.contains('active') && !event.target.closest('.menu-block')) {
      bodyWrapper.style.left = 0;
      burger.style.right = `65px`;
      document.querySelector('body').style.overflow = 'visible';
      document.querySelector('.body-wrapper').classList.remove('on-menu-open');
      document.querySelector('.header-wrapper').style.overflow = 'hidden';
      burger.classList.remove('active');
    }
    //! **************[Quantity select in cart]***********
    if (event.target.closest('.quantity-select')) {
      const wrapper = event.target.closest('.quantity-select');
      const input = wrapper.querySelector('.quantity');
      if (event.target.classList.contains('q-more')) {
        input.value++;
      }
      if (event.target.classList.contains('q-less') && input.value > 1) {
        input.value--;
      }
    }
    //! ***********[MENU SIDEBAR]***********
    if (document.documentElement.offsetWidth <= 1080) {

      if (event.target.closest('li.menu-item') && !event.target.closest('ul.sub-menu>li')) {
        const clicked_item = event.target.closest('li.menu-item');
        if (clicked_item.querySelector('.drop-down')) {
          event.preventDefault();
          const sub_menu = clicked_item.querySelector('.drop-down');
          let height = sub_menu.querySelector('li.sub-menu-item').offsetHeight;
          let arr = sub_menu.querySelectorAll('li.sub-menu-item');
          height *= arr.length;

          sub_menu.classList.toggle('opened');
          if (sub_menu.classList.contains('opened')) {
            sub_menu.style.height = `${height}px`;
            clicked_item.classList.add('has-opened-sub-menu');
          }
          else {
            sub_menu.style.height = 0;
            sub_menu.querySelector('.sub-sub-menu').classList.remove('opened');
            sub_menu.querySelectorAll('.sub-menu>li').forEach((item) => {
              item.classList.remove('has-opened-sub-menu');
            });
            sub_menu.querySelector('.sub-sub-menu').style.height = 0;
            clicked_item.classList.remove('has-opened-sub-menu');
          }

        }
      }
      if (event.target.closest('ul.sub-menu>li')) {
        const clicked_item = event.target.closest('ul.sub-menu>li');
        if (clicked_item.querySelector('.sub-sub-menu')) {
          event.preventDefault();
          const sub_menu = clicked_item.querySelector('.sub-sub-menu');
          let height = sub_menu.querySelector('.sub-sub-menu>li').offsetHeight;
          let arr = sub_menu.querySelectorAll('.sub-sub-menu>li');
          height *= arr.length;

          sub_menu.classList.toggle('opened');
          if (sub_menu.classList.contains('opened')) {
            sub_menu.style.height = `${height}px`;
            let parentHeight = sub_menu.closest('.drop-down').offsetHeight;
            (parentHeight);
            parentHeight += height;
            sub_menu.closest('.drop-down').style.height = `${parentHeight}px`;
            clicked_item.classList.add('has-opened-sub-menu');
          }
          else {
            sub_menu.style.height = 0;
            let parentHeight = sub_menu.closest('.drop-down').offsetHeight;
            parentHeight -= height;
            sub_menu.closest('.drop-down').style.height = `${parentHeight}px`;
            clicked_item.classList.remove('has-opened-sub-menu');
          }
        }
      }//--
    }
    //! **************[TABS]**************
    if (event.target.closest('.tab-nav')) {
      const currentTabNav = event.target.closest('.tab-nav');
      const parent = event.target.closest('.tab-nav').parentElement;
      const tabNav = parent.querySelectorAll('.tab-nav');
      const tabNavID = currentTabNav.getAttribute('data-tab-nav-id');
      const tabContent = parent.parentElement.querySelector('.tab-content-wrapper').querySelectorAll('.tab-content');
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


  });
  window.addEventListener('resize', (event) => {
    width = event.target.innerWidth;
    if (width > 1080) {
      let subSub = document.querySelectorAll('.menu .sub-sub-menu');
      let dropDown = document.querySelectorAll('.menu .drop-down');
      subSub.forEach((item) => {
        item.style.height = 'unset';
      });
      dropDown.forEach((item) => {
        item.style.height = 'unset';
      });
      if (lastDocWidth < width) {
        document.querySelector('.header-wrapper').style.overflow = 'visible';
      }
    }
    else if (lastDocWidth > width && lastDocWidth >= 1080) {
      document.querySelector('.header-wrapper').style.overflow = 'hidden';
      let menuItems = document.querySelectorAll('.menu-block>ul>li');
      menuItems.forEach((item) => {
        if (item.querySelector('.drop-down')) {
          const sub_menu = item.querySelector('.drop-down');
          sub_menu.style.height = 0;
          sub_menu.classList.remove('opened');
          sub_menu.querySelector('.sub-sub-menu').classList.remove('opened');
          sub_menu.querySelectorAll('.sub-menu>li').forEach((item) => {
            item.classList.remove('has-opened-sub-menu');
          });
          sub_menu.querySelector('.sub-sub-menu').style.height = 0;
          item.classList.remove('has-opened-sub-menu');
        }
      });
      let subMenuItems = document.querySelectorAll('.menu-block>ul>li .drop-down ul>li');
      subMenuItems.forEach((item) => {
        if (item.querySelector('.sub-sub-menu')) {
          const sub_menu = item.querySelector('.sub-sub-menu');
          let height = sub_menu.querySelector('.sub-sub-menu>li').offsetHeight;
          sub_menu.style.height = 0;
          let parentHeight = sub_menu.closest('.drop-down').offsetHeight;
          parentHeight -= height;
          sub_menu.closest('.drop-down').style.height = `${parentHeight}px`;
          item.classList.remove('has-opened-sub-menu');
        }
      });
    }
    else {
      bodyWrapper.style.left = 0;
      burger.classList.remove('active');
      burger.style.right = `65px`;
      document.querySelector('body').style.overflow = 'visible';
      document.querySelector('.body-wrapper').classList.remove('on-menu-open');
      document.querySelector('.header-wrapper').style.overflow = 'hidden';
    }
    lastDocWidth = width;
  });
  let menuItems = document.querySelectorAll('.menu-block>ul>li');
  menuItems.forEach((item) => {
    if (item.querySelector('.drop-down')) {
      item.classList.add('has-sub-menu');
    }
  });
  let subMenuItems = document.querySelectorAll('.menu-block>ul>li .drop-down ul>li');
  subMenuItems.forEach((item) => {
    if (item.querySelector('.sub-sub-menu')) {
      item.classList.add('has-sub-menu');
    }
  });
});