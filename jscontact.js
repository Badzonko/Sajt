console.log("radi");
$(document).ready(function () {
  $('.submit').click(function (event){
    //event.preventDefault()
    console.log('kliknuto')

    var email = $('.email').val()
    var message = $('.message').val()
    var statusElm = $('.status')
    statusElm.empty()

    if(email.length>10 && email.includes('@') && email.includes('.')) {
      statusElm.append('<div>Email je validan ✔</div>')
    } else {
      event.preventDefault()
      statusElm.append('<div>Email nije validan!</div>')
    }

    if(message.length> 20) {
      statusElm.append('<div>Poruka je validna ✔</div>')
    } else {
      event.preventDefault()
      statusElm.append('<div>Poruka nije validna!<div>')
    }

  })
})
