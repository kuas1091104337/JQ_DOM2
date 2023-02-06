$(function(){
  
  $('#wrap').on('mousedirection',function(e,type,direction){

    var styleObj = {}
    switch(direction){
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

    if(type == 'in'){
      $('.info').stop().css(styleObj).animate({
        top:'0%',
        left:'0%'
      },200)
    }else{
       $('.info').stop().animate(styleObj,200)
    }

  })
  
})