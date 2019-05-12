function prikazi(){
  var sak = document.getElementById("sakgal");
  var tjos = document.getElementById("txtjos");
  if(sak.style.display == "none") {
    sak.style.display = "block";
    tjos.innerHTML = "Prikaži manje";
  } else {
    sak.style.display = "none";
    tjos.innerHTML = "Prikaži više";
  }

}
