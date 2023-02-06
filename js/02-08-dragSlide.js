$(function(){

  var position = 0;
  var startX;

  function moveHandler(e){
    var mouseX = e.offsetX
    position += mouseX - startX
    startX = mouseX
    $(this).css({backgroundPosition:position})
  }

  $('#wrap').on('mousedown',function(e) {
    startX = e.offsetX
    $(this).on('mousemove',moveHandler)
  }).on('mouseup mouseleave',function(e) {
    $(this).off('mousemove')
  });
  
})