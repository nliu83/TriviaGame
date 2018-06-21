
//$(document).ready(function() {

// creating variables/object for questions

var time = 30;

// var trivia = {

//     //triviaQuestions = triviaQuestions, 
//     currentQuestion = 0, 
//     questionTimer = 30, 
//     wins = 0, 
//     loses = 0

// }

var pixarTrivia = [{

    question: "Who designed the costumes for the Incredibles?", 
    possibleAnswers: ["Violet", "Enda Mode", "Jack Jack", "Syndrome"], 
    answer: "Edna Mode",
    charImg: "../images/EdnaMode.jpg",
    name: "The Incredibles"

}, {
    
    question: "Who is the forgetful fish that helps Nemo find his father?", 
    possibleAnswers: ["Dory", "Marlin", "Bubbles", "Bruce"], 
    answer: "Dory", 
    charImg: "../images/EdnaMode.jpg", 
    name: "Finding Nemo"

}, {

    question: "Who is the owner of Woody and Buzz?", 
    possibleAnswers: ["Rex", "Sid", "Andy", "Bo Peep"], 
    answer: "Andy", 
    charImg: "../images/Andy.jpg", 
    name: "Toy Story"

}, {

    question: "Who is the boy scout from Up?", 
    possibleAnswers: ["Russell", "Carl Fredrickson", "Kevin", "Dug"], 
    answer: "Russell", 
    charImg: "../images/Russell.jpg", 
    name: "Up"

}, {

    question: "Who is Lightning McQueen's best friend?", 
    possibleAnswers: ["Doc Hudson", "Sally", "Luigi", "Mater"], 
    answer: "Mater", 
    charImg: "../images/Mater.jpg", 
    name: "Cars"

}, {

    question: "Who is Miguel's real great-great grandfather?", 
    possibleAnswers: ["Ernesto De La Cruz", "Hector", "Frida Kahlo", "Dante"], 
    answer: "Hector", 
    charImg: "../images/Hector.jpg",
    name: "Coco"

}, {

    question: "Who is Sully’s sidekick?", 
    possibleAnswers: ["Randall", "Boo", "Celia", "Mike Wazowski"], 
    answer: "Mike Wazowski", 
    charImg: "../images/MikeWazowski.jpg", 
    name: "Monster's Inc."

}, {

    question: "Who is Buzz Lightyear's enemy?", 
    possibleAnswers: ["Woody", "Zurg", "Bullseye", "Jesse"], 
    answer: "Zurg", 
    charImg: "../images/Zurg.jpg",
    name: "Toy Story 2"

}, {

    question: "Who is Riley's imaginary elephant friend?", 
    possibleAnswers: ["Ding Dong", "Bing Bong", "Ding Ding", "Bong Bong"], 
    answer: "Bing Bong", 
    charImg: "../images/BingBong.jpg", 
    name: "Inside Out"

}, {

    question: "Which rat controlled Alfredo Linguini when cooking?", 
    possibleAnswers: ["Remy", "Auguste Gusteau", "Anton Ego", "Emile"],
    answer: "Remy", 
    charImg: "../images/Remy.jpg", 
    name: "Ratatouille"

}];

//console.log(pixarTrivia[2].question);


var displayQuestion = document.getElementById("trivia-questions");
//var displayPossibleAnswers = document.getElementById("answer-choice");


$("#start-button").on("click", function() {
    
    loadQuestions();
    $(this).hide();
    
});


function loadQuestions() {

    console.log("Start button clicked. T minus 30 seconds.");
         $("#start-button").hide();


    for (var i = 0; i < pixarTrivia.length; i++) {

    
    var questionArr = pixarTrivia[i].question;
    var possibleAnswersArr = pixarTrivia[i].possibleAnswers;
    var str = '';

    console.log(questionArr);
    console.log(possibleAnswersArr);

        var displayQuestionP = document.createElement("p");
        var displayPossibleAnswersP = document.createElement("p");
        displayQuestionP.textContent = pixarTrivia[i].question;
        displayPossibleAnswersP.textContent = pixarTrivia[i].possibleAnswers;
        displayQuestion.appendChild(displayQuestionP);
        displayQuestion.appendChild(displayPossibleAnswersP);
};  

};
    // $("#trivia-questions").empty();
    // for (var i = 0; i < 10; i++) {
    //     $("#trivia-questions").prepend("<div class=" + pixarTrivia[i].name + "</div>");
    //     $(pixarTrivia[i].divClass).append("<div class ='quest-title'>" + pixarTrivia[i].question + "</div>"); 

    //     for (var i = 0; i <= 3; i++) {

    //         $(pixarTrivia[i].divClass).append("<input type='radio' name=" + pixarTrivia[i]) + pixarTrivia[i].answer[i]

    //         $("#trivia-questions").prepend("<hr />");
    //     }
    // }




//});