var name = localStorage.getItem("betoatsume-name");
var address = localStorage.getItem("betoatsume-address");
var dateOfBirth = localStorage.getItem("betoatsume-dob");
var response1 = localStorage.getItem("question1");
var response2 = localStorage.getItem("question2");
var response3 = localStorage.getItem("question3");

$(document).ready(function() {
    nameResponse();
	addressResponse();
	birthdayResponse();
	firstQuestion();
	secondQuestion();
	thirdQuestion();
 })
 
 
function nameResponse() {
  $("#name").text("Name: " + name);
}

function addressResponse() {
	$("#address").text("Address: " + address);
}

function birthdayResponse() {
	$("#birthday").text("Date of Birth: " + dateOfBirth);
}

function firstQuestion() {
	$("#question-1").text("Question 1 Response: " + response1);
}

function secondQuestion() {
	$("#question-2").text("Question 2 Response: " + response2);
}

function thirdQuestion() {
	$("#question-3").text("Question 3 Response: " + response3);
}
 