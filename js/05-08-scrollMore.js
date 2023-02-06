$(function(){

  function loadMoreHandler(){

    var bottomLimit = ($(document).height() - $(window).height()) * 0.8

    if($(window).scrollTop() > bottomLimit ){
      $(window).off('scroll',loadMoreHandler)
      $.ajax({
        url: './api/imgList.html',
        dataType: 'html',
      })
      .done(function(res) {
        $('body').append(res)
        $('.lazy').each(function(){
          $(this).width($(this).data('width'))
          .height($(this).data('height'))
        })
        $(window).on('scroll',loadMoreHandler)
      })
    }
  }

  $(window).on('scroll',loadMoreHandler)

})