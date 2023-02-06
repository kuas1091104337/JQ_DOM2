$(function(){

  $('.img').on('mousestop',function(){
    $(this).children('.info').stop().fadeIn(500)
  }).on("mouseleave",function(){
    $(this).children('.info').stop().fadeOut(200)
  })

})