var name = localStorage.getItem("betoatsume-name");
var clout = parseInt(localStorage.getItem("betoatsume-clout"));

$(document).ready(function() {
  setPointBalanceText();
	setHeaderText();

  $("#images").append("<img src=\"./img/betocat.png\" class=\"catimg\">");
  $("#images").append("<img src=\"./img/betocat.png\" class=\"catimg\">");
  $("#images").append("<img src=\"./img/betocat.png\" class=\"catimg\">");
  repositionCats(getScale());
  repositionComputerBox(getScale());

  $(window).resize(function() {
    var scale = getScale();
    repositionCats(scale);
    repositionComputerBox(scale);
  });

  $("#computer-box").click(function() {
    showModal();
  });
 })

function showModal(){
  $("#computer-modal").modal();
}

function setPointBalanceText() {
  $("#pointbalance").text("Point balance: " + clout);
}

function setHeaderText() {
	$("#headername").text(name + "'s Office");
}

function getScale() {
  return window.innerWidth / 1919;
}

function repositionComputerBox(scale) {
  $("#computer-box").css({
    top: 328 * scale,
    left: 882 * scale,
    width: 152 * scale,
    height: 82 * scale
  });
}

function repositionCats(scale) {
  $(".catimg").each(function(index) {
      $(this).css({
        top: (620 * scale) - 56
      });
  });
}

function cheat() {
  localStorage.setItem("betoatsume-clout", 999999999);
}
