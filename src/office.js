var name = localStorage.getItem("betoatsume-name");
var clout = parseInt(localStorage.getItem("betoatsume-clout"));


var items = [
  {key: "firstaid", isOwned: false},
  {key: "bus", isOwned: false},
  {key: "bass", isOwned: false},
  {key: "jersey", isOwned: false},
  {key: "books", isOwned: false},
  {key: "tansuit", isOwned: false},
  {key: "infinitejest", isOwned: false},
];

var uriPrefix = './img/'
var cats = [
  {key: 'steveadler', name: "Steve Adler", image: uriPrefix + 'adlercat.png', isOwned: false},
  {key: 'annrichards', name: "Ann Richards", image: uriPrefix + 'annrichardscat.png', isOwned: false},
  {key: 'betoorourke', name: "Beto O'Rourke", image: uriPrefix + 'betocat.png', isOwned: false},
  {key: 'donnahoward', name: "Donna Howard", image: uriPrefix + 'donnacat.png', isOwned: false},
  {key: 'dougsnyder', name: "Doug Snyder", image: uriPrefix + 'dougcat.png', isOwned: false},
  {key: 'ginahinojosa', name: "Gina Hinojosa", image: uriPrefix + 'ginacat.png', isOwned: false},
  {key: 'lloyddoggett', name: "Lloyd Doggett", image: uriPrefix + 'lloydcat.png', isOwned: false},
  {key: 'barackobama', name: "Barack Obama", image: uriPrefix + 'obamacat.png', isOwned: false},
]

$(document).ready(function() {
  setPointBalanceText();
	setHeaderText();

  updateItems();
  updateCats();
  addCats();

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

function updateItems() {
  for (i = 0; i < items.length; i++) {
    if (localStorage.getItem("betoatsume-item-" + items[i].key) === "true") {
      items[i].isOwned = true;
    }
  }
}

function addCats() {
  for (i = 0; i < cats.length; i++) {
    if (cats[i].isOwned) {
      $("#images").append("<img src=\"" + cats[i].image + "\" class=\"catimg\" id=\"cat-" + cats[i].key + "\">");
    }
  }
}

function updateCats() {
  for (i = 0; i < items.length; i++) {
    console.log(i);
    if (items[i].isOwned) {
      key = items[i].key;
      console.log(key);
      if (key === "bass") {
        cats[getCatIndex('betoorourke')].isOwned = true;
      } else if (key === "books") {
        cats[getCatIndex('donnahoward')].isOwned = true;
        cats[getCatIndex('annrichards')].isOwned = true;
      } else if (key === "firstaid") {
        cats[getCatIndex('donnahoward')].isOwned = true;
      } else if (key === "bus") {
        cats[getCatIndex('ginahinojosa')].isOwned = true;
        cats[getCatIndex('steveadler')].isOwned = true;
      } else if (key === "tansuit") {
        cats[getCatIndex('barackobama')].isOwned = true;
      } else if (key === "jersey") {
        cats[getCatIndex('lloyddoggett')].isOwned = true;
      } else if (key === "infinitejest") {
        cats[getCatIndex('dougsnyder')].isOwned = true;
      }
    }
  }
}

function getCatIndex(key) {
  for (j = 0; j < cats.length; j++) {
    if (cats[j].key === key) {
      return j;
    }
  }
  return null;
}
