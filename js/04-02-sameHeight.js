$(function(){

  $(window).on('resize',function(){
    $('.column').height("")
    var w = $(window).width()
    var num,max
    if(w>980){
      num = 4
    }else if(w>640){
      num = 2
    }else{
      return false
    }
    $('.column').each(function(index){
      var i = index%num
      if(i == 0){
        max = $(this).height()
      }else{
        max = Math.max($(this).height(),max)
      }
      if(i == num-1){
        $('.column').slice(index+1-num,index+1).height(max)
      }
    })
  }).resize()

})