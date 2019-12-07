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
  $("#bm").click(function(){
      document.getElementById("naplacanja").style.color = "black"
      //$('#pk').html('Veliki paket');
      document.getElementById("naplacanja").value = "Na osnovu pravila po kojima funkcioniše Sirmium Tag by milestone način plaćanja podrazumeva: 1. određivanje perioda za koji projekat treba da bude gotov 2. plaćanje 30% unapred za izabrani projekat i pare za domen i hosting (ukoliko je u pitanju web development) 3. Kada se odradi demo sajta ide 40% isplate 4. Nakon provere se odrade izvesne izmene ukoliko ih ima, predaje se ključ vlasniku i ide preostalih 30% novca.";
  });
});
$(document).ready(function(){ //u paket polje kontakta forme upisuje izabrani paket i menja boju iz default sive u crnu
  $("#bp").click(function(){
      document.getElementById("naplacanja").style.color = "black"
      //$('#pk').html('Veliki paket');
      document.getElementById("naplacanja").value = "Na osnovu pravila po kojima funkcioniše Sirmium Tag by project način plaćanja podrazumeva: 1. određivanje perioda za koji projekat treba da bude gotov 2. plaćanje ukupne cifre novca po završetku projekta.";
  });
});
$(document).ready(function(){ //u paket polje kontakta forme upisuje izabrani paket i menja boju iz default sive u crnu
  $("#add").click(function(){
      document.getElementById("pk").style.color = "black"
      //$('#pk').html('Veliki paket');
      document.getElementById("pk").value = "Reklamni website ( 299€ )";
  });
});

$(document).ready(function(){ //u paket polje kontakta forme upisuje izabrani paket i menja boju iz default sive u crnu
  $("#adding").click(function(){
      document.getElementById("pk").style.color = "black"
      //$('#pk').html('Srednji paket');
      document.getElementById("pk").value = "Portfolio website ( 399€ )";
  });
});
$(document).ready(function(){ //u paket polje kontakta forme upisuje izabrani paket i menja boju iz default sive u crnu
  $("#added").click(function(){
      document.getElementById("pk").style.color = "black"
      //$('#pk').html('Mini paket');
      document.getElementById("pk").value = "Biznis website ( 599€ )";
  });
});
$(document).ready(function(){ //u paket polje kontakta forme upisuje izabrani paket i menja boju iz default sive u crnu
  $("#addd").click(function(){
      document.getElementById("pk").style.color = "black"
      //$('#pk').html('Mini paket');
      document.getElementById("pk").value = "E-commerce website ( 799€ )";
  });
});
$(document).ready(function(){ //u paket polje kontakta forme upisuje izabrani paket i menja boju iz default sive u crnu
  $("#addapp").click(function(){
      document.getElementById("pk").style.color = "black"
      //$('#pk').html('Mini paket');
      document.getElementById("pk").value = "Reklamna web application ( 399€ )";
  });
});
$(document).ready(function(){ //u paket polje kontakta forme upisuje izabrani paket i menja boju iz default sive u crnu
  $("#addingapp").click(function(){
      document.getElementById("pk").style.color = "black"
      //$('#pk').html('Mini paket');
      document.getElementById("pk").value = "Biznis web application ( 599€ )";
  });
});
$(document).ready(function(){ //u paket polje kontakta forme upisuje izabrani paket i menja boju iz default sive u crnu
  $("#addedapp").click(function(){
      document.getElementById("pk").style.color = "black"
      //$('#pk').html('Mini paket');
      document.getElementById("pk").value = "Media web application ( 899€ )";
  });
});
$(document).ready(function(){ //u paket polje kontakta forme upisuje izabrani paket i menja boju iz default sive u crnu
  $("#adddapp").click(function(){
      document.getElementById("pk").style.color = "black"
      //$('#pk').html('Mini paket');
      document.getElementById("pk").value = "E-commerce web application ( 999€ )";
  });
});
$(document).ready(function(){ //u paket polje kontakta forme upisuje izabrani paket i menja boju iz default sive u crnu
  $("#addcms").click(function(){
      document.getElementById("pk").style.color = "black"
      //$('#pk').html('Mini paket');
      document.getElementById("pk").value = "Reklamni cms website ( 199€ )";
  });
});
$(document).ready(function(){ //u paket polje kontakta forme upisuje izabrani paket i menja boju iz default sive u crnu
  $("#addingcms").click(function(){
      document.getElementById("pk").style.color = "black"
      //$('#pk').html('Mini paket');
      document.getElementById("pk").value = "Portfolio cms website ( 299€ )";
  });
});
$(document).ready(function(){ //u paket polje kontakta forme upisuje izabrani paket i menja boju iz default sive u crnu
  $("#addedcms").click(function(){
      document.getElementById("pk").style.color = "black"
      //$('#pk').html('Mini paket');
      document.getElementById("pk").value = "Biznis cms website ( 399€ )";
  });
});
$(document).ready(function(){ //u paket polje kontakta forme upisuje izabrani paket i menja boju iz default sive u crnu
  $("#adddcms").click(function(){
      document.getElementById("pk").style.color = "black"
      //$('#pk').html('Mini paket');
      document.getElementById("pk").value = "Media cms website ( 699€ )";
  });
});
$(document).ready(function(){ //u paket polje kontakta forme upisuje izabrani paket i menja boju iz default sive u crnu
  $("#addlogo").click(function(){
      document.getElementById("pk").style.color = "black"
      //$('#pk').html('Mini paket');
      document.getElementById("pk").value = "Logo ( 150€ )";
  });
});
$(document).ready(function(){ //u paket polje kontakta forme upisuje izabrani paket i menja boju iz default sive u crnu
  $("#addbr").click(function(){
      document.getElementById("pk").style.color = "black"
      //$('#pk').html('Mini paket');
      document.getElementById("pk").value = "Brochure ( 40€ - 70€ )";
  });
});

$(document).ready(function(){ //u paket polje kontakta forme upisuje izabrani paket i menja boju iz default sive u crnu
  $("#addlp").click(function(){
      document.getElementById("pk").style.color = "black"
      //$('#pk').html('Mini paket');
      document.getElementById("pk").value = "Low poly ( 20€ - 60€ )";
  });
});
$(document).ready(function(){ //u paket polje kontakta forme upisuje izabrani paket i menja boju iz default sive u crnu
  $("#addps").click(function(){
      document.getElementById("pk").style.color = "black"
      //$('#pk').html('Mini paket');
      document.getElementById("pk").value = "Poster ( 60€ )";
  });
});
$(document).ready(function(){ //u paket polje kontakta forme upisuje izabrani paket i menja boju iz default sive u crnu
  $("#addbook").click(function(){
      document.getElementById("pk").style.color = "black"
      //$('#pk').html('Mini paket');
      document.getElementById("pk").value = "Book cover ( 80€ )";
  });
});
$(document).ready(function(){ //u paket polje kontakta forme upisuje izabrani paket i menja boju iz default sive u crnu
  $("#addbc").click(function(){
      document.getElementById("pk").style.color = "black"
      //$('#pk').html('Mini paket');
      document.getElementById("pk").value = "Business card ( 70€ )";
  });
});
$(document).ready(function(){ //u paket polje kontakta forme upisuje izabrani paket i menja boju iz default sive u crnu
  $("#addaa").click(function(){
      document.getElementById("pk").style.color = "black"
      //$('#pk').html('Mini paket');
      document.getElementById("pk").value = "Animated ad ( 250€ )";
  });
});







/*function chg(){ //vraca boju teksta u 'paket' polju na crnu i brise default tekst "Unesite broj..."
  document.getElementById("pk").style.color = "black";
  if(document.getElementById("pk").value==="Polje nije obavezno. Unesite paket koji želite ili ga izaberite na stranici Ponuda."){
    document.getElementById("pk").innerHTML="";
  }
}*/

