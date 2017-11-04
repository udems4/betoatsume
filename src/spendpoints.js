var clout = 0;

var addPointButton;
var removePointButton;

$(document).ready(function() {
    setPointBalanceText();

    removePointButton = document.getElementById('spendpoints');
    removePointButton.addEventListener('click', function() {
        changePoints(-1);
        setPointBalanceText()
    }, false);
 })
  
function setPointBalanceText() {
  $("#pointbalance").text("Point balance: " + clout);
}

function changePoints(deltaClout) {
  if (clout + deltaClout >= 0) {
    clout += deltaClout;
  }
}