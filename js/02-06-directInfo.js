$(function(){
  
  function getStyleObj(target,mouseevent){
    
    var obj = {}
    var styleObj = {}
    
    var top = Math.abs(0 - mouseevent.offsetY)
    var bottom = Math.abs(target.innerHeight() - mouseevent.offsetY)
    var left = Math.abs(0 - mouseevent.offsetX)
    var right = Math.abs(target.innerWidth() - mouseevent.offsetX)
    
    obj[top] = 'top';
    obj[bottom] = 'bottom';
    obj[left] = 'left';
    obj[right] = 'right';
    
    switch(obj[Math.min(top,bottom,left,right)]){
      case 'top':
        styleObj.top = '-100%';
        styleObj.left = '0%';
        break;
      case 'bottom':
        styleObj.top = '100%';
        styleObj.left = '0%';
        break;
      case 'left':
        styleObj.top = '0%';
        styleObj.left = '-100%';
        break;
      case 'right':
        styleObj.top = '0%';
        styleObj.left = '100%';
        break;
    }
    
    return styleObj
  }
  
  $('#wrap').on('mouseenter',function(e){
    $('.info').stop().css(getStyleObj($(this),e)).animate({
      top:'0%',
      left:'0%'
    },200)
  }).on("mouseleave",function(e){
    $('.info').stop().animate(getStyleObj($(this),e),200)
  })
  
})