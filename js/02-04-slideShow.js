$(function(){
  
  var now=0,next=0;
  var prePos = {top:'100%'}
  var pasPos = {top:'-100%'}
  var pos = {top:''}
  var intervalTime = 2000
  var animationTime = 500

  function clickHandler(){
    if($(this).index() == now) return false
    $('.imgNav li').off('click')
    next = $(this).index()
    changHandler(false)
  }

  function changHandler(auto){
    $('.imgList li').stop()
    .eq(now).css(pos).animate(pasPos,animationTime)
    .end().eq(next).css(prePos).animate(pos,animationTime,function(){
        now=next
        $('.imgNav li').on('click', clickHandler)
        if(auto){
          $('#imgShow').triggerHandler('mouseleave')
        }
    })
    $('.imgNav li').removeClass('open').removeAttr('style')
    .eq(next).addClass('open')
  }

  function nextHandler(){
    next = now + 1
    if(next > $('.imgList li').length-1 ){
      next = 0
    }
    changHandler(true);
  } 

  $('#imgShow').on('mouseenter', function(){ 
    $('.imgNav li div').stop().removeAttr('style');
  }).on('mouseleave', function(){
    $('.imgNav li.open div').stop().animate({width:'0%'},intervalTime,nextHandler)
  })
  
  $('.imgList li').eq(now).siblings().css(prePos) 
  $('.imgNav li').on('click', clickHandler).eq(now).addClass('open')

  $('#imgShow').triggerHandler('mouseleave')
  
});