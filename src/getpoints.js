var clout = parseInt(localStorage.getItem("betoatsume-clout"));

var addPointButton;

$(document).ready(function() {
    setPointBalanceText();
    
    addPointButton = document.getElementById('addpoints');
    addPointButton.addEventListener('click', function() {
      changePoints(1);
    }, false);
 })
  
function setPointBalanceText() {
  $("#pointbalance").text("Point balance: " + clout);
}

function changePoints(deltaClout) {
  if (clout + deltaClout >= 0) {
    clout += deltaClout;
    localStorage.setItem("betoatsume-clout", String(clout));
    setPointBalanceText();
  }
}