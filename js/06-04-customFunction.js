$(function(){

  $('#normal').on('click',function(){
    $('.img').clearKeyframe().setKeyframe($('#select').val())
  })

  $('#delay').on('click',function(){
    $('.img').clearKeyframe()
    .setKeyframe($('#select').val(),{duration:1000,delay:500})
  })

  $('#stagger').on('click',function(){
    $('.img').clearKeyframe()
    .setKeyframe($('#select').val(),{duration:500,stagger:100})
  })

  $('#complete').on('click',function(){
    $('.img').clearKeyframe()
    .setKeyframe($('#select').val(),{complete:completeHandler})
  })

  function completeHandler(){
    console.log($(this).index() + " is animationend")
  }

  $('#clear').on('click',function(){
    $('.img').clearKeyframe()
  })

})