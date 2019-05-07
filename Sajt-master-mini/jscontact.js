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
    //statusElmImp.empty
    //statusElmMs.empty

    if(fname.length>6 && fname.includes(' ')){ //ako ime i prezime imaju ukupno bar 6 karaktera i razmak izmedju ok je, polje dobija zeleni border
      document.getElementById("imp").style.border= "1px solid green"
    } else { //ako ime i prezime nemaju bar 6 karaktera nije ok, crveni border i poruka
      event.preventDefault()
      alert('Unesite puno ime i prezime!')
      document.getElementById("imp").style.border= "1px solid red"
    }


    if(message.length> 20) { //ako sadrzaj poruke ima bar 20 karaktera ok je, polje dobija zeleni border
      document.getElementById("ms").style.border= "1px solid green"
    } else { //ako nema bar 20 karaktera onda nije ok, crveni border i poruka
      event.preventDefault()
      statusElmMs.empty
      alert('Poruka mora biti dugačka barem 20 karaktera!')
      document.getElementById("ms").style.border= "1px solid red"
    }

  })
})
$(document).ready(function(){ //u paket polje kontakta forme upisuje izabrani paket i menja boju iz default sive u crnu
  $("#add").click(function(){
      document.getElementById("pk").style.color = "black"
      //$('#pk').html('Veliki paket');
      document.getElementById("pk").value = "Big pack ( 199€+ )";
  });
});
$(document).ready(function(){ //u paket polje kontakta forme upisuje izabrani paket i menja boju iz default sive u crnu
  $("#adding").click(function(){
      document.getElementById("pk").style.color = "black"
      //$('#pk').html('Srednji paket');
      document.getElementById("pk").value = "Badžo pack ( 119€+ )";
  });
});
$(document).ready(function(){ //u paket polje kontakta forme upisuje izabrani paket i menja boju iz default sive u crnu
  $("#added").click(function(){
      document.getElementById("pk").style.color = "black"
      //$('#pk').html('Mini paket');
      document.getElementById("pk").value = "Mini pack ( 49€+ )";
  });
});

function chg(){ //vraca boju teksta u 'paket' polju na crnu i brise default tekst "Unesite broj..."
  document.getElementById("pk").style.color = "black";
  if(document.getElementById("pk").value==="Polje nije obavezno. Unesite paket koji želite ili ga izaberite na stranici Ponuda."){
    document.getElementById("pk").innerHTML="";
  }
}
$(document).ready(function(){ //u paket polje kontakta forme upisuje izabrani paket simple paket obrade slika i menja boju iz default sive u crnu
  $("#poruci").click(function(){
      document.getElementById("pk").style.color = "black"
      //$('#pk').html('Simple obrada');
      document.getElementById("pk").value = "Simple editing";
  });
});
$(document).ready(function(){ //u paket polje kontakta forme upisuje izabrani paket premium paket obrade slika i menja boju iz default sive u crnu
  $("#porucii").click(function(){
      document.getElementById("pk").style.color = "black"
      //$('#pk').html('Premium obrada');
      document.getElementById("pk").value = "Premium editing";
  });
});
$(document).ready(function(){ //u paket polje kontakta forme upisuje izabrani paket simple logo i menja boju iz default sive u crnu
  $("#naruci").click(function(){
      document.getElementById("pk").style.color = "black"
      //$('#pk').html('Simple logo');
      document.getElementById("pk").value = "Simple logo ( 30€+ )";
  });
});
$(document).ready(function(){ //u paket polje kontakta forme upisuje izabrani paket premium logo i menja boju iz default sive u crnu
  $("#narucii").click(function(){
      document.getElementById("pk").style.color = "black"
      //$('#pk').html('Premium logo');
      document.getElementById("pk").value = "Premium logo ( 90€+ )";
  });
});
