$(function(){

  function run() {
    $('#container').animate({top:-40},500,function(){
      $(this).css({top:0})
      .children('img').eq(0).remove()
      .appendTo('#container')
    })
  }

  var TT = setInterval(run,1500)

  $("#wrap").on('mouseenter',function(e){
    clearInterval(TT)
    $(this).removeClass('hidden')
  }).on('mouseleave',function(e){
    var position = Math.round($(this).scrollTop() / 40)
    $(this).scrollTop(0).addClass('hidden')
    $('#container').children('img').slice( 0, position )
    .appendTo('#container')
    TT = setInterval(run,1500)
  })

  $('#wrap').scrollTop(0).addClass('hidden')

})