const expander = document.getElementById('expand');
const itemsTabletHide = document.querySelectorAll('.tablet--hide')
let expanderText = document.querySelector('.content__expand--text')
const expanderPic = document.querySelector('.expander__img--rotate')
let heightWrapper = document.querySelector('.swiper-container')
let heightSwiperCont = document.querySelector('.swiper-wrapper')

expander.addEventListener('click', function() { 
  heightWrapper.classList.toggle('is-open')
  heightSwiperCont.classList.toggle('is-open')
  if (expanderText.textContent === 'Скрыть') {
    expanderText.textContent = 'Показать всё';
} else {
    expanderText.textContent = 'Скрыть';
}
    expanderPic.classList.toggle('expander__img--rotate')
});
        
var mySwiper; 

function initializeSwiper() {
  mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1.1,
    spaceBetween: 16,
    slidesPerColumn: 4,
    autoHeight: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}

function destroySwiper() {
  if (mySwiper !== undefined && mySwiper !== null) {
    mySwiper.destroy();
  }
}


if (window.innerWidth < 768) {
  initializeSwiper();
}

window.addEventListener('resize', function () {
  if (window.innerWidth < 768) {
    initializeSwiper();
  } else {
    destroySwiper();
  }
});
