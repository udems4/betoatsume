var name = localStorage.getItem("betoatsume-name");
var address = localStorage.getItem("betoatsume-address");
var dateOfBirth = localStorage.getItem("betoatsume-dob");
var response1 = localStorage.getItem("question1");
var response2 = localStorage.getItem("question2");
var response3 = localStorage.getItem("question3");
var callee = localStorage.getItem("callee");
var registration = localStorage.getItem("registration");
var candidate = localStorage.getItem("candidate");

$(document).ready(function() {
    nameResponse();
	addressResponse();
	birthdayResponse();
	firstQuestion();
	secondQuestion();
	thirdQuestion();
	whomCalled();
 })

function whomCalled() {
	$("#callee").text("Last Phone Call: " + callee + " Voting Status: " + registrationStatus(registration) + " Choice: " + candidateChoice(candidate));
}	

function agreement(response) {
	if (response == 0) {
		return "Strongly Agree";
	}
	else if (response == 1) {
		return "Agree";
	}
	else if (response == 2) {
		return "Neither Agree nor Disagree";
	}
	else if (response == 3) {
		return "Disagree";
	}
	else {
		return "Strongly Disagree"
	}
}

function candidateChoice(candidate) {
	if (candidate === "0") {
		return "Candidate 1";
	}
	else if (candidate === "1") {
		return "Candidate 2";
	}
	else if (candidate === "2") {
		return "Candidate 3";
	}
}

function registrationStatus(registration) {
	if (registration === "0") {
		return "Registered";
	}
	else if (registration === "1") {
		return "Will register";
	}
	else {
		return "Will not register";
	}
} 
 
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
	$("#question-1").text("Question 1 Response: " + agreement(response1));
}

function secondQuestion() {
	$("#question-2").text("Question 2 Response: " + agreement(response2));
}

function thirdQuestion() {
	$("#question-3").text("Question 3 Response: " + agreement(response3));
}
 