var name = localStorage.getItem("betoatsume-name");
var clout = parseInt(localStorage.getItem("betoatsume-clout"));

$(document).ready(function() {
    setPointBalanceText();
	setHeaderText();
 })

function setPointBalanceText() {
  $("#pointbalance").text("Point balance: " + clout);
}

function setHeaderText() {
	$("#headername").text(name + "'s Office");
}