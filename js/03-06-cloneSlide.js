$(function(){

  var target = 4
  var page = 4
  var move = 256
  var total = $("li").length
  var begin =  $("li").slice(0,page).clone()
  var end =  $("li").slice(page * -1).clone()
  var max

  function completeHandler(){

    if(target <= page){
      target += total
    }else if(target >= max){
      target -= total
    }

    $("#container").css({left:target * move * -1});
    $('.prev, .next').on('click',clickHandler)
  }

  function clickHandler(){
    $('.prev, .next').off()
    if($(this).is('.prev')){
      target--
    }else{
      target++
    }
    $("#container").stop()
    .animate({left:target * move * -1},completeHandler)
  }

  $('.prev, .next').on('click',clickHandler)
  $('#container').contents().filter(function() {
    return this.nodeType === 3
  }).remove()
  $("#container").prepend(end).append(begin)
  .css({left:target * move *-1})
  max = $("li").length - page
  
})