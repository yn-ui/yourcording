$(function(){

  $('.question-answer-item-q').click(function(){
    $(this).next().slideToggle();
  });
  
});

    
$(document).ready(function () {

    const $submitBtn = $('#js-submit')

    $('#form input,#form textarea').on('change', function () {
      if (
        $('#form input[type="text"]').val() !== "" &&
        $('#form input[type="email"]').val() !== "" &&
        $('#form input[type="checkbox"]').val() !== "" &&
        $('#form #privacyCheck').prop('checked') === true
      ) {
        $submitBtn.prop('disabled', false);
  
      } else {
        $submitBtn.prop('disabled', true);
      }
    });
});


$(function(){
    $('a[href^=#]').click(function(){
        const speed = 500;
        const href= $(this).attr("href");
        const target = $(href == "#" || href == "" ? 'html' : href);
        const position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });
});

const swiper = new Swiper('.swiper-container', {
  loop: true,

  slidesPerView:1.3,

  initialSlide: 0,

  speed:500,

  centeredSlides:true,

  spaceBetween:20,
  

  autoplay: {
    delay: 5000, // スライドが切り替わるまでの表示時間(ミリ秒)
    stopOnLast: false, // 最後のスライドまで表示されたら自動再生を中止するか
    disableOnInteraction: true // ユーザーのスワイプ操作を検出したら自動再生を中止するか
  },    

  breakpoints: {
    // 768ピクセル幅以下になったら

    1280:{
      slidesPerView:3.7,
      spaceBetween:56,

    },

    768:{
      slidesPerView: 2.5,
      spaceBetween: 30
    },
    // 640ピクセル幅以下になったら
    // 350: {
    //   slidesPerView: 1,
    //   spaceBetween: 20
    // }
  },

  // pagination: {
  //  el:'.swiper-pagination', 
  // },


  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

$(function(){

  $('#open-modal').click(function(){
    $('.modal').fadeIn();
  });
  $('#close-modal').click(function(){
    $('.modal').fadeOut();
  });

});

AOS.init({
  offset: 300,       
  duration: 600,               
  easing: 'ease',           
  delay: 50,                        
  once: false,                     
  anchorPlacement: 'top-center',  
});
