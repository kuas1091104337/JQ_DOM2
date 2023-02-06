(function($){

  function getDirection(target,e){
    var top = Math.abs(0 - e.offsetY)
    var bottom = Math.abs(target.innerHeight() - e.offsetY)
    var left = Math.abs(0 - e.offsetX)
    var right = Math.abs(target.innerWidth() - e.offsetX)
    
    var obj = {}
    obj[top] = 'top';
    obj[bottom] = 'bottom';
    obj[left] = 'left';
    obj[right] = 'right';
    
    return obj[Math.min(top,bottom,left,right)]
  }

  function enterHandler(e){

    $(this).trigger('mousedirection',
      ['in', getDirection($(this),e)])
  }
  
  function leaveHandler(e){
    $(this).trigger('mousedirection', 
      ['out', getDirection($(this),e)])
  }

  $.event.special.mousedirection = {
    setup: function(f) {
        $(this).on('mouseenter',enterHandler)
        .on('mouseleave',leaveHandler)
    },
    teardown: function() {
        $(this).off('mouseenter',enterHandler)
        .off('mouseleave',leaveHandler)
    }
  }

  $.fn.extend({
    mousedirection: function(handler) {
      return handler ? $(this).on('mousedirection',handler) : false
    },
    unmousedirection: function() {
      $(this).off('mousedirection')
    }
  })

})($)