$(function(){
  function html(num){
    return `<div class="img">
      <img src="./images/children/`+num+`.jpg" width="200">
      <div class="info">
        jQuery DOM 程式設計進階班
      </div>
    </div>`
  }

  $('#wrap').on('mouseenter','.img',function(){
    $(this).children('.info').stop().fadeIn(500)
  }).on("mouseleave",'.img',function(){
    $(this).children('.info').stop().fadeOut(200)
  })
  
  $('.add').on('click',function(){
    var $dom = $(html($('.img').length%8))
    $('#wrap').append($dom)
    // $('#wrap').prepend($dom)
  })
  $('.remove').on('click',function(){
    $('.img').eq(0).remove()
  })

})