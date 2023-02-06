$(function(){
  var data = [1,1,2,2]
  var open = null
  function flipCard(){
    var index = $(this).index()
    var select = data[index]
    if(!open){
      open = select
      handler = openedHandler
    }else{
      handler = checkHandler
    }
    $('.card').off('dblclick')
    .eq(index).one('transitionend',handler)
    .children('.back').css({backgroundImage:'url("./images/button/'+select+'.png")'})
    .parent().addClass('open')
  }
  function openedHandler(){
    $('.card').not('.open').one('dblclick',flipCard)
  }
  function checkHandler(){
    var index = $(this).index()
    var select = data[index]
    if(select != open){
      $('.card').removeClass('open')
    }
    open = null
    openedHandler()
  }
  data.sort(function(a, b) {
    return Math.round(Math.random())
  })
  $('.card').one('dblclick',flipCard)
})