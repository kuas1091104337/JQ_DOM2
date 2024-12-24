$(function(){

  var target = 0,
      page = 4,
      move = 256,
      direct = 1,
      $items = $('li'),
      total = $items.length;

  function completeHandler(){
    if($(this).index() == $('li').length - 1){
      $('.prev,.next').on('click',clickHandler);
    }
  }

  function removeHandler(){
    if($(this).index() == page-1){
      $('li').slice(0,page).remove()
    }
  }

  function clickHandler(){
    $('.prev,.next').off();
    if($(this).is('.prev')){
      target -= page
      direct = -1
    }else{
      target += page
      direct = 1
    }
    target = (target + total) % total
    $('li').each(function(index){
      $(this).delay(index*100)
      .animate({top:-300 * direct},500,removeHandler)
      if($(this).index() == page-1){
        openHandler()
      }
    })
  }

  function openHandler(){
    var end = target + page
    end = end > total ? total : end
    $items.slice(target,end).appendTo('#container')
    if(end - target < page){
      end = page-(end - target)
      $items.slice(0,end).appendTo('#container')
    }
    $('#container li').slice(-4).each(function(index){
      $(this).css({top:300 * direct,left:move*index}).delay(index*100).animate({top:0},500,completeHandler)
    })
  }

  $items.css({position:'absolute'}).remove()
  openHandler()
  
})