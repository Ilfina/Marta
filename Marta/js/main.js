//Burger
const burger = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const body = document.body

if (burger && menu) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('_active');
    menu.classList.toggle('_active');
    body.classList.toggle('_lock');
  })

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.toggle('_active');
      menu.classList.toggle('_active');
    })
  })

  menu.querySelectorAll('.menu__link').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('_active');
      burger.classList.remove('_active');
      body.classList.remove('_lock');
    })
  })
}

//Swiper
const swiper = new Swiper('.swiper__main', {
  slidesPerView: 4,
  spaceBetween: 40,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  mousewheel: {
    sensitivity: 1,
  },

  breakpoints:{
    315: {
      slidesPerView: 1.5,
    },
    500: {
      slidesPerView: 2,
    },
    700: {
      slidesPerView: 2.5,
    },
    1000: {
      slidesPerView: 3,
    },
    1300: {
      slidesPerView: 3.5,
    },
    1700: {
      slidesPerView: 4,
    },
  }
});

//Aos
AOS.init();