var clout = parseInt(localStorage.getItem("betoatsume-clout"));

var items = [
  {name: "First Aid Kit", key: "firstaid", isOwned: false, cost: 250},
  {name: "Bus", key: "bus", isOwned: false, cost: 400},
  {name: "Bass", key: "bass", isOwned: false, cost: 600},
  {name: "Jersey", key: "jersey", isOwned: false, cost: 700},
  {name: "Books", key: "books", isOwned: false, cost: 800},
  {name: "Tan Suit", key: "tansuit", isOwned: false, cost: 1000},
  {name: "Infinite Jest", key: "infinitejest", isOwned: false, cost: 1250},
];

$(document).ready(function() {
    loadItems();
    addClickHandlers();
    setPointBalanceText();
 })
  
function setPointBalanceText() {
  $("#pointbalance").text("Point balance: " + clout);
}

function changePoints(deltaClout) {
  if (clout + deltaClout >= 0) {
    clout += deltaClout;
    localStorage.setItem("betoatsume-clout", String(clout));
    setPointBalanceText();
    return true;
  }
  return false;
}

function loadItems() {
  for (i = 0; i < items.length; i++) {
    if (localStorage.getItem("betoatsume-item-" + items[i].key) === "true") {
      items[i].isOwned = true;
    } else {
      console.log("HERE");
      $("#itemlist").append("<li tabindex = \"0\" id=\"item-" + items[i].key + "\" class=\"text-primary\">" + items[i].name + ": " + items[i].cost + " points</li>");
    }
  }
}

function addClickHandlers() {
  $("#itemlist").children().each(function(index) {
    console.log($(this));
    var key = $(this).attr('id').substring(5);

    $(this).click(function() {
      var item = getItem(key);
      var isCharged = changePoints(-1 * item.cost);

      if (isCharged) {
        localStorage.setItem("betoatsume-item-" + item.key, "true");
        $(this).remove();
      } else {
        alert("You do not have enough points to buy this!");
      }
    });

	$(this).keypress(function (e) {
		if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
			 var item = getItem(key);
			 var isCharged = changePoints(-1 * item.cost);

			if (isCharged) {
				localStorage.setItem("betoatsume-item-" + item.key, "true");
				$(this).remove();
			} else {
				alert("You do not have enough points to buy this!");
			}
		}
  });

}
}

function getItem(key) {
  for (i = 0; i < items.length; i++) {
    if (items[i].key === key) {
      return items[i];
    }
  }
  return null;
}
