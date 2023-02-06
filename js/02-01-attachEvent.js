$(function(){

  function clickHandler(){
    alert('CLICK')
  }

  $('.on').click(function(){

    $('img').on('click',clickHandler)

  })

  $('.off').click(function(){

    $('img').off('click',clickHandler)

  })

  $('.one').click(function(){

    $('img').one('click',clickHandler)

  })

})