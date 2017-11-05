function getPollData(form){
  for (Count = 0; Count < 5; Count++) {
    if (form.registration[Count].checked){
        localStorage.setItem("question1", Count);
        break;
      }
  }
  for (Count = 0; Count < 5; Count++) {
    if (form.candidate[Count].checked){
        localStorage.setItem("question2", Count);
        break;
      }
  }
  for (Count = 0; Count < 5; Count++) {
    if (form.candidate[Count].checked){
        localStorage.setItem("question3", Count);
        break;
      }
  }
  var oldVal = parseInt(localStorage.getItem("betoatsume-clout"));
  localStorage.setItem("betoatsume-clout", oldVal + 10);

}
