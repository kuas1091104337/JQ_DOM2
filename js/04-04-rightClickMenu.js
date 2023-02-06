$(function(){

  $(document).on('contextmenu',function(e){
    e.preventDefault()
    var top = e.clientY
    var left = e.clientX

    var $menu = $('#rightMenu')
    var w = $menu.outerWidth(true)
    var h = $menu.outerHeight(true)

    if(top + h > $(window).height()) top -= h
    if(left + w > $(window).width()) left -= w

    $menu.css({top:top,left:left}).show()
  })

  $(document).on('click',function(){
    $('#rightMenu').hide()
  })

})