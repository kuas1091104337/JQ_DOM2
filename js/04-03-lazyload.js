$(function(){

  $('.lazy').each(function(){
    $(this).width($(this).data('width')).height($(this).data('height'))
  })

  $(window).on('scroll',function(){

    var wb = $(window).scrollTop() + $(window).height()

    $('.lazy').not(":has('img')").each(function(){
      if($(this).offset().top < wb){
        $("<img/>").attr('src',$(this).data('src')+'?random='+Math.random()).appendTo($(this))
      }else{
        return
      }
    })

  }).scroll()

})