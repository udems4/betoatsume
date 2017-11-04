function recordName(){
  var nameValue = document.getElementById("name-box").value;
  localStorage.setItem("name", nameValue);
}

function alertName(){
  alert(localStorage.getItem("name"));
}
