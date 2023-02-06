$(function(){
  
  var now=0,next=0;
  var total = $('.imgList li').length
  var prePos = {top:'100%'}
  var pasPos = {top:'-100%'}
  var pos = {top:''}
  var intervalTime = 2000
  var animationTime = 500
  var timer

  function wheelHandler(e,delta){
    if(delta < 0){
      nextHandler(1)
    }else{
      nextHandler(-1)
    }
  }

  function nextHandler(num){
    if(!num) num = 1
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
        $('#imgShow').one('mousewheel',wheelHandler)
        if(timer) timer = setTimeout(nextHandler,intervalTime)
    })
  } 

  $('#imgShow').on('mouseenter', function(){ 
    timer = clearTimeout(timer)
  }).on('mouseleave', function(){
    timer = setTimeout(nextHandler,intervalTime)
  }).one('mousewheel',wheelHandler)

  $('.imgList li').eq(now).siblings().css(prePos) 
  $('#imgShow').trigger('mouseleave')
  
});