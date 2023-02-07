$(function(){
  $(document).on('click',function(){
    console.log("document click")
    $('#menu').stop().animate({top:-170})
  })
  $('#menu').on('click',function(e){
    console.log("menu click")
    e.stopPropagation()
    $(this).stop().animate({top:0})
  })
  $('a').on('click',function(e){
    window.alert("Button Click")
    // e.preventDefault()
    // e.stopPropagation()
    // e.stopImmediatePropagation()
    return false;
  })
  $('a').on('click',function(e){
    $(document).triggerHandler('click')
  })

})