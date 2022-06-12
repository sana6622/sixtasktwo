/*

let count = 0

$(document).ready(function () {

  $('.image').click(function () {
    count++
    $(this).parents().siblings('.areaAns').toggle();
    if (count % 2 === 1) {
      $(this).attr('src', '/img/icon_minus.png')
      $(this).siblings().addClass('changeColor')
    } else {
      $(this).attr('src', '/img/icon_plus.png')
      $('.areaQus p').removeClass('changeColor')
    }

  })

})
*/


$(document).ready(function () {
  //常見問題區的+-
  $('.image').click(function () {
    $(this).parents().siblings('.areaAns').toggle();
    let a = $(this).attr('src')
    console.log(a)
    if (a === 'img/icon_plus.png') {
      $(this).attr('src', 'img/icon_minus.png');
      $(this).siblings().addClass('changeColor')
    } else {
      $(this).attr('src', 'img/icon_plus.png');
      $('.areaQus p').removeClass('changeColor')
    }
  })

  // top返回最上面
  $('.topBall').click(function () {
    $('html').scrollTop(0)
  })

  //改人數&價格
  $('.banner-price li').click(function () {
    let num = $(this).find('.number').text()
    console.log(num)
    $('#peopleBasic').text(num)
    $('#peopleSt').text(num)

    if (num === ">25000") {
      $('#priceBasic').text("<240")
      $('#priceSt').text("<640")
    } else {
      $('#priceBasic').text(6000000 / num)
      $('#priceSt').text(parseInt(16000000 / num))

    }



  })



})


