$(function(){

  $('form').on('focusin focusout',function(){
    $(this).toggleClass('focus')
  })
  $('p').on('focusin focusout',function(){
    $(this).toggleClass('focus')
  })
  // $('input').add('select').on('focus blur',function(){
  //   $(this).parent().toggleClass('focus')
  // })
  $('select').on('change',function(){
    console.log("切換")
  })

  $('.check').on('click',function(){
    // $('input[name=skill]').attr('checked',true)
    $('input[name=skill]').prop('checked',true)
  })
  $('.cancel').on('click',function(){
    // $('input[name=skill]').attr('checked',false)
    $('input[name=skill]').prop('checked',false)
  })

  $('.text').on('click',function(){
    $('input[name=name]').val('飛肯設計學苑')
  })
  
  $('.data').on('click',function(){
    var obj = {}
    obj.name = $('input[name=name]').val()
    obj.sex = $('input[name=sex]').val()
    obj.skill = []
    $('input[name=skill]').each(function(){
      if($(this).prop('checked')){
        obj.skill.push($(this).val());
      }
    })
    obj.favorite = $('select[name=favorite]').val()
    // console.log($('form').attr('action'))
    console.log($('form').prop('action'))
    console.log(obj)
  })


})