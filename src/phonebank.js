function getPhoneBankData(form){
  localStorage.setItem("callee", form.rightnumber.value);
  for (Count = 0; Count < 3; Count++) {
    if (form.registration[Count].checked){
        localStorage.setItem("registration", Count);
        break;
      }
  }
  for (Count = 0; Count < 3; Count++) {
    if (form.candidate[Count].checked){
        localStorage.setItem("candidate", Count);
        break;
      }
  }
  var oldVal = localStorage.getItem("betoatsume-clout");
  localStorage.setItem(oldVal + 50);

}
