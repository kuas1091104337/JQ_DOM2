$(function(){

  var animate
  $('.clear').on('click',function(){
    $('img').removeClass(animate)
  }).siblings().on('click',function(){
    $('.clear').click()
    animate = "animated "+$(this).attr('class')
    $('img').one('animationend',function(){
      $('.clear').click()
    }).addClass(animate)
  })

})