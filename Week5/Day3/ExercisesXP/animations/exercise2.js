
function myMove() {
  var elem = document.getElementById("animate");
  var pos = 0;
  let id = setInterval(function() {
    if (pos == 350) {
      clearInterval(id);
    }
    else {
      pos++;
      elem.style.left = pos + "px";
    }
  }, 5);
}