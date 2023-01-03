console.log("heelo wold");


var modal = document.getElementById("myModal");

var nav = document.getElementById("navId");
var btn = document.getElementById("myBtn");
// var btn1 = document.getElementById("myBtn1");
// var btn2 = document.getElementById("myBtn2");


var span = document.getElementsByClassName("close")[0];


btn.onclick = function () {
  modal.style.display = "block";
  modal.style.overflow = "hidden";
  nav.style.zIndex=0;
}

span.onclick = function () {
  modal.style.display = "none";
  modal.style.overflow = "fixed";
}


window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    modal.style.overflow = "scroll";
  }
}