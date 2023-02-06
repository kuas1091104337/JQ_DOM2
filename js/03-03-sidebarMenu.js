$(function(){

  function maskOut(){
    $('body').removeClass('menuOpen')
    $('.mask').fadeOut(200, function() {
      $(this).remove()
    });
  }

  $('#menu').on('click',function(){
    var $body = $('body')
    if(!$body.hasClass('menuOpen')){
      $body.addClass('menuOpen')
      .append($('<div class="mask"></div>')
      .fadeIn(500))
    }else{
      maskOut()
    }
  })

  $(document).on('click','.mask',function(){
    maskOut();
  })

  $('#nav').on('click','a',function(){
    var target = $('img').eq($(this).index()).offset().top
    var time = Math.abs($(window).scrollTop() - target) / 1000 * 400
    $('html,body').stop(true).delay(200)
    .animate({scrollTop:target},time < 400 ? 400 : time)
    maskOut()
  })

  $('img').each(function(index){
    $("#nav").append('<a>Image '+index+'</a>');
  })

})