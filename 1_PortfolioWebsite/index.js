
let home=document.querySelector("#home");
let about=document.querySelector("#about");
let contact=document.querySelector("#contact");

function homes(){
  home.style.display="flex";
  contact.style.display="none";
  about.style.display="none";
  document.getElementById("homes").style.color="#e09edd";
  document.getElementById("abouts").style.color="white";
  document.getElementById("contacts").style.color="white";
}

function abouts(){
  contact.style.display="none";
  about.style.display="block";
  document.getElementById("abouts").style.color="#e09edd";
  document.getElementById("homes").style.color="white";
  document.getElementById("contacts").style.color="white";
}

function contacts(){
  contact.style.display="block";
  about.style.display="none";
  home.style.display="none";
  document.getElementById("contacts").style.color="#e09edd";
  document.getElementById("homes").style.color="white";
  document.getElementById("abouts").style.color="white";
}