console.log("radi");
$(document).ready(function () {
  $('.submit').click(function (event){
    //event.preventDefault()
    console.log('kliknuto')

    var email = $('.email').val()
    var message = $('.message').val()
    var fname = $('.fname').val()
    var statusElmImp = $('.statusImp')
    var statusElmMs = $('.statusMs')
    statusElmImp.empty
    statusElmMs.empty

    if(fname.length>6 && fname.includes(' ')){
      //statusElm.append('<div style="color:green;">Ime i prezime su validni ✔</div>')
      document.getElementById("imp").style.border= "2px solid green"
    } else {
      event.preventDefault()
      //statusElmImp.append('<div style="color:red;">Unesite puno ime i prezime!</div>')
      alert('Unesite puno ime i prezime!')
      document.getElementById("imp").style.border= "2px solid red"
    }


    if(message.length> 20) {
      //statusElm.append('<div style="color:green;">Poruka je validna ✔</div>')
      document.getElementById("ms").style.border= "2px solid green"
    } else {
      event.preventDefault()
      statusElmMs.empty
      //statusElmMs.append('<div style="color:red;">Poruka mora biti dugačka barem 20 karaktera!<div>')
      alert('Poruka mora biti dugačka barem 20 karaktera!')
      document.getElementById("ms").style.border= "2px solid red"
    }

  })
})
$(document).ready(function(){
  $("#add").click(function(){
      document.getElementById("pk").style.color = "black"
      //$('#pk').html('Veliki paket');
      document.getElementById("pk").value = "Veliki paket";
  });
});
$(document).ready(function(){
  $("#adding").click(function(){
      document.getElementById("pk").style.color = "black"
      //$('#pk').html('Srednji paket');
      document.getElementById("pk").value = "Srednji paket";
  });
});
$(document).ready(function(){
  $("#added").click(function(){
      document.getElementById("pk").style.color = "black"
      //$('#pk').html('Mini paket');
      document.getElementById("pk").value = "Mali paket";
  });
});

function chg(){
  document.getElementById("pk").style.color = "black";
  if(document.getElementById("pk").value==="Unesite paket koji želite"){
    document.getElementById("pk").innerHTML="";
  }
}
