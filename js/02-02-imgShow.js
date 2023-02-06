var imgIndex = 0
var $imgList = $('#imgShow > .imgList > li')
var length = $imgList.length
var timerStatus = true
var timerTime = 1000
var timer

function nextHandler(){
    imgIndex++
    show()
}

function auto(){
  if(timerStatus){
    timer = setInterval(nextHandler,timerTime)
  }
}

function show(){
  imgIndex = (imgIndex + length) % length
  $imgList.removeAttr('style').eq(imgIndex).show()
}

$('#imgShow .prev').on('click',function(){
    imgIndex--
    show()
})

$('#imgShow .next').on('click',nextHandler)

$('#imgShow .switch').on('click',function(){
  timerStatus = !timerStatus
  if(timerStatus){
    this.innerHTML = "暫停"
  }else{
    this.innerHTML = "播放"
  }
})

$('#imgShow').on('mouseenter',function(){
  clearInterval(timer)
}).on('mouseleave',function(){
  auto()
})

show()
auto() 