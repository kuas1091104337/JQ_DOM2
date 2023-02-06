(function($){
  $.fn.setKeyframe = function(keyframeClass,option){
    return $(this).each(function(i){
      if(option){
        var delay = option.delay ? option.delay : 0;
        if(option.stagger){
            delay += i*option.stagger
        }
        if(delay > 0){
          $(this).css({'animation-delay':delay+'ms'})
        }
        if(option.duration){
          $(this).css({'animation-duration':option.duration+'ms'})
        }
      }
    }).one('animationend',function(){
      $(this).clearKeyframe()
      if(option && option.complete){
        option.complete.call($(this))
      }
    }).data('animate','animated '+keyframeClass)
    .addClass($(this).data('animate'))
  }

  $.fn.clearKeyframe = function(){
    return $(this).off('animationend')
    .removeClass($(this).data('animate'))
    .css({'animation-duration':'','animation-delay':''})
  }
})($)