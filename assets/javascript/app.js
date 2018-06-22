
$(document).ready(function() {

    $("#submit-button").hide();
    $('#tryagain-button').hide();
    
    // creating variables/object for questions
    
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
    
    var trivia = {
    
        counter: 0, 
        correct: 0, 
        wrong: 0,
        seconds:0,
        answered: false,
        unanswered: 0,
        
    
    
        loadQuestions: function() {
    
    
            for (var i = 0; i < pixarTrivia.length; i++) {
    
            $('#trivia-questions').append('<h3>' + pixarTrivia[i].question + '</h3>'); 
            
            for (var j = 0; j <= 3; j++) {
    
            //$('#trivia-questions').append('<button class="answer-button" id="button-' + j +'" data-name="' + pixarTrivia[i].possibleAnswers[j] + '">' + pixarTrivia[i].possibleAnswers[j] + '</button>');
    
             $("#trivia-questions").append('<input type="radio" value="'+ pixarTrivia[i].possibleAnswers[j]+'"><label>'+ pixarTrivia[i].possibleAnswers[j]+'</label><br>');
          
            //name="Radio1"
    
            };
    
            };
    
        }, 
    
        countdown: function() {
            
            var intervalID; 
            setInterval(function() {
    
                seconds--;
    
                $('#Timer').html(seconds);
    
                if (seconds <= 0) {
    
                    clearInterval(time);
                    
                    trivia.correct = 0;
                    trivia.wrong = 0;
                    trivia.unanswered = 0;
    
                for (var i = 0; i < pixarTrivia.length; i++){
                    
                    
                    if ($('input:radio[name="' + pixarTrivia[i].possibleAnswers + '"]:checked').val() === pixarTrivia[i].answer) {
                        console.log(pixarTrivia[k].possibleAnswers)
                        trivia.correct++;
                    }
                    else if ($('input:radio[name="' + pixarTrivia[i].possibleAnswers + '"]:checked').val() !== pixarTrivia[i].answer){
                        trivia.wrong++;
                        console.log("You are wrong");
                    };
                    
                }
                    $('#correct-counter').append(trivia.correct);
                    $('#incorrect-counter').append(trivia.wrong);
                    $('#blank-counter').append(unanswered);
    
                    clearInterval(timer);
                    return;
    
            }
                }, 1000);
    
            },
            
        
    
        timesUp: function() {
            trivia.unanswered++;
            $("#trivia-questions").html('<h2>Time is up!<h2>');
        },
    
        displayResults: function() {
            clearInterval();
            $('#correct-counter').append('<h3>Correct: ' + trivia.correct + '</h3>');
            $('#incorrect-counter').append('<h3>Wrong: ' + trivia.wrong + '</h3>');
            $('#blank-counter').append('<h3>Unanswered: ' + trivia.unanswered + '</h3>');
        }, 
    
        countdown: function(seconds) {
            setInterval(function(){
                 seconds--;
                 //if seconds <= 0 then show end screen
                $('#Timer').html(seconds);     
            },1000);
            
    
        }, 
    };
    
    $('#start-button').on('click', function() {
    
        $(this).remove();
        trivia.countdown(60);
        trivia.loadQuestions();
        $("#submit-button").show();
    
    });
    
    $('#submit-button').on('click', function() {
    
        console.log("Clicked");
        trivia.correct = 0;
        trivia.wrong = 0;
        trivia.unanswered = 0;
    
        for (var i = 0; i < pixarTrivia.length; i++){
                    
                    
            if ($('input:radio[name="' + pixarTrivia[i].possibleAnswers + '"]:checked').val() === pixarTrivia[i].answer) {
                console.log(pixarTrivia[k].possibleAnswers)
                trivia.correct++;
            }
            else if ($('input:radio[name="' + pixarTrivia[i].possibleAnswers + '"]:checked').val() !== pixarTrivia[i].answer){
                trivia.wrong++;
                console.log("You are wrong");
            };
            
        };
    
        $('#trivia-questions').hide();
        trivia.displayResults();
        $("#submit-button").hide();
        $('#tryagain-button').show();
    });
    
    $('#tryagain-button').on('click', function() {
        $('#trivia-questions').show();
        trivia.correct = 0;
        trivia.wrong = 0;
        trivia.unanswered = 0;
    
    
    });
    
    });

