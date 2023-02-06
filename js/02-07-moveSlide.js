$(function(){

  $('#wrap').on('mousemove',function(e) {
    var mouseX = e.offsetX
    var percent = mouseX / $(this).width()
    $(this).css({backgroundPosition:percent*100+'%'})
  });
  
})