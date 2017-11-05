var name = localStorage.getItem("betoatsume-name");
var address = localStorage.getItem("betoatsume-address");
var dateOfBirth = localStorage.getItem("betoatsume-dob");

console.log(name);
console.log(address);
console.log(dateOfBirth);

if (name && address && dateOfBirth) {
  window.location.href = "office.html";
}

$(document).ready(function() {
  $("#continuebutton").prop('disabled', true);

  //TODO: check if dob field is well-formatted, not just truthy,

  var buttonChange = function() {
    if ($("#nameinput").val() && $("#addressinput").val() && checkDateFormatting($("#dateinput").val())) {
      $("#continuebutton").prop('disabled', false);
    } else {
      $("#continuebutton").prop('disabled', true);
    }
  }

  $("#nameinput").on("input", buttonChange);
  $("#addressinput").on("input", buttonChange);
  $("#dateinput").on("input", buttonChange);

  continueButton = document.getElementById('continuebutton');
  continueButton.addEventListener('click', function() {
    alert("Congratulations! You've earned your daily 5 points from logging in!")
    localStorage.setItem("betoatsume-name", $("#nameinput").val());
    localStorage.setItem("betoatsume-address", $("#addressinput").val());
    localStorage.setItem("betoatsume-dob", $("#dateinput").val());
    localStorage.setItem("betoatsume-clout", '5');

    window.location.href = "office.html";
  }, false);
})

function checkDateFormatting(date) {
  var dateFields = date.split('/');
  if (dateFields.length != 3) {
    return false;
  }

  var month = parseInt(dateFields[0]);
  var day = parseInt(dateFields[1]);
  var year = parseInt(dateFields[2]);

  return isValidDate(day, month, year);
}

function isValidDate(d, m, y) {
    m = m - 1;
    return m >= 0 && m < 12 && d > 0 && d <= daysInMonth(m, y) && y > 1900 && y < (new Date()).getFullYear();
}

function daysInMonth(m, y) {
    switch (m) {
        case 1 :
            return (y % 4 == 0 && y % 100) || y % 400 == 0 ? 29 : 28;
        case 8 : case 3 : case 5 : case 10 :
            return 30;
        default :
            return 31
    }
}
