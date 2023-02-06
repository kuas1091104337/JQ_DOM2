$(function(){
  
  var now=0,next=0;
  var total = $('.imgList li').length
  var prePos = {left:'100%'}
  var pasPos = {left:'-100%'}
  var pos = {left:''}
  var animationTime = 500

  function nextHandler(e){
    if(e.type == 'swipeleft') num = 1
    else num = -1
    next = (now + num + total) % total
    var nowTarget,nextTarget
    if(num<0){
        nowTarget = prePos
        nextStart = pasPos
    }else{
        nowTarget = pasPos
        nextStart = prePos
    }
    $('.imgList li').stop()
    .eq(now).css(pos).animate(nowTarget,animationTime)
    .end().eq(next).css(nextStart).animate(pos,animationTime,
    function(){
        now=next
      $('#imgShow').one('swipeleft swiperight',nextHandler)
    })
  } 

  $('#imgShow').one('swipeleft swiperight',nextHandler)

  $('.imgList li').eq(now).siblings().css(prePos) 
  
});