var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

window.addEventListener('touchstart', function(event) {
  if (event.touches.length > 1) {
     event.preventDefault();
  }
}, { passive: false });