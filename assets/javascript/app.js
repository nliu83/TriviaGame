
$(document).ready(function() {

    $("#submit-button").hide();
    $('#Timer').html(timer);
    
    var pixarTrivia = [{
    
        question: "Who designed the costumes for the Incredibles?", 
        possibleAnswers: ["Violet", "Edna Mode", "Jack Jack", "Syndrome"], 
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
    
    var timer;

    var trivia = {
                                                                    
        correct: 0,
        incorrect: 0,
        userSelect: '',
        counter: 120,

        countdown: function() {
            trivia.counter--;
            $("#counter-number").html(trivia.counter);
            if (trivia.counter === 0) {
                console.log(timer);
              console.log("TIME UP");
              trivia.displayResults();
            }
          },
        

        displayQuestions: function () {

            timer = setInterval(trivia.countdown, 1000);

            for (var i = 0; i < pixarTrivia.length; i++) {

                var questionArr = pixarTrivia[i].question;
                
                var displayQuestions = $('<div>');

                displayQuestions.addClass('questionsDisplay');

                displayQuestions.attr('display-question', questionArr);

                displayQuestions.text(questionArr);

                $('#trivia-questions').append(displayQuestions);
        
                    for (var j = 0; j < 4; j++) {

                    var answerArr = pixarTrivia[i].possibleAnswers[j];
                    
                    var displayAnswers = $('<input type="radio" name= "question-' + i +
                    '" value= "' + pixarTrivia[i].possibleAnswers[j] + '"">' +'<label>'+ pixarTrivia[i].possibleAnswers[j] + '</label>');
        

                    displayAnswers.addClass('answerchoices-btn');

                    displayAnswers.attr('display-answers', answerArr);

                    displayAnswers.text(answerArr);

                    $('#trivia-questions').append(displayAnswers);

                    $('#submit-button').show();
       
                    };
        

            };

        },


        correctQuiz: function () {

        
            $.each($("input[name='question-0']:checked"), function() {
                
                if ($(this).val() === pixarTrivia[0].answer) {
                    
                trivia.correct++;
                console.log('correct: ' + trivia.correct);
                }
                else {
                trivia.incorrect++;
                console.log('incorrect: ' + trivia.incorrect);
                }
            });
        

            $.each($("input[name='question-1']:checked"), function() {
                
                if ($(this).val() === pixarTrivia[1].answer) {
                    
                trivia.correct++;
                console.log('correct: ' + trivia.correct);
                }
                else {
                trivia.incorrect++;
                console.log('incorrect: ' + trivia.incorrect);
                }
            });

            $.each($("input[name='question-2']:checked"), function() {

                
                if ($(this).val() === pixarTrivia[2].answer) {
                    
                trivia.correct++;
                console.log('correct: ' + trivia.correct);
                }
                else {
                trivia.incorrect++;
                console.log('incorrect: ' + trivia.incorrect);
                }
            });

            $.each($("input[name='question-3']:checked"), function() {
                
                if ($(this).val() === pixarTrivia[3].answer) {
                    
                trivia.correct++;
                console.log('correct: ' + trivia.correct);
                }

                else {
                trivia.incorrect++;
                console.log('incorrect: ' + trivia.incorrect);
                }



            });

            $.each($("input[name='question-4']:checked"), function() {
                
                if ($(this).val() === pixarTrivia[4].answer) {
                    
                trivia.correct++;
                console.log('correct: ' + trivia.correct);
                }
                else {
                trivia.incorrect++;
                console.log('incorrect: ' + trivia.incorrect);
                }
            });

            $.each($("input[name='question-5']:checked"), function() {

                
                if ($(this).val() === pixarTrivia[5].answer) {
                    
                trivia.correct++;
                console.log('correct: ' + trivia.correct);
                }
                else {
                trivia.incorrect++;
                console.log('incorrect: ' + trivia.incorrect);
                }
            });

            $.each($("input[name='question-6']:checked"), function() {

                
                if ($(this).val() === pixarTrivia[6].answer) {
                    
                trivia.correct++;
                console.log('correct: ' + trivia.correct);
                }
                else {
                trivia.incorrect++;
                console.log('incorrect: ' + trivia.incorrect);
                }
            });

            $.each($("input[name='question-7']:checked"), function() {
                
                if ($(this).val() === pixarTrivia[7].answer) {
                    
                trivia.correct++;
                console.log('correct: ' + trivia.correct);
                }
                else {
                trivia.incorrect++;
                console.log('incorrect: ' + trivia.incorrect);
                }
            });

            $.each($("input[name='question-8']:checked"), function() {

                
                if ($(this).val() === pixarTrivia[8].answer) {
                    
                trivia.correct++;
                console.log('correct: ' + trivia.correct);
                }
                else {
                trivia.incorrect++;
                console.log('incorrect: ' + trivia.incorrect);
                }
            });

            $.each($("input[name='question-9']:checked"), function() {
                
                if ($(this).val() === pixarTrivia[9].answer) {
                    
                trivia.correct++;
                console.log('correct: ' + trivia.correct);
                }
                else {
                trivia.incorrect++;
                console.log('incorrect: ' + trivia.incorrect);
                }
            });

    
        },

        displayResults: function () {

    
            clearInterval(timer);
            $('#correct-counter').html('<h2>Correct: ' + trivia.correct + '</h2>');
            $('#incorrect-counter').html('<h2>Correct: ' + trivia.correct + '</h2>');


        }
    };

        $('#submit-button').on('click', function() {
            
            trivia.correctQuiz();
            trivia.displayResults()
            $('#trivia-questions').hide();
            $("#submit-button").hide();
            trivia.countdown();

        });
   
        $('#start-button').on('click', function(){
            trivia.displayQuestions();
            $(this).hide();
            $('#Timer').html(timer);

        });

        
    
   
   
    
    });

