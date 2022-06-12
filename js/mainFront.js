const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,

  /* 斷點設定 */
  breakpoints: {
    /* 螢幕寬度大於等於 992px 時切換為 3 欄 */
    992: {
      slidesPerView: 3
    },
    /* 螢幕寬度大於等於 768px 時切換為 2 欄 */
    768: {
      slidesPerView: 3
    },
    /* 更小時都顯示 1 欄 */
    0: {
      slidesPerView: 2
    }
  },

  /* 卡片元素的間隔 */
  spaceBetween: 16,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

});

$(document).ready(function () {
  // top返回最上面
  $('.topBall').click(function () {
    $('html').scrollTop(0)

  })
})