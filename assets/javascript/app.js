$(document).ready(function () {
    var triviaQuestions = [{
            question: "1. In Captain America Civil War, who is Captain America trying to save?",
            answerChoices: ["Bucky", "Buddy", "Iron Man", "Black Widow"],
            answer: 0,
            image: "<img class='rounded mx-auto d-block image' src='assets/images/question1.png'/>"
        },
        {
            question: "2. In Black Panther, what is the resource they use in all of their technology? ",
            answerChoices: ["metal", "diamonds", "vibranium", "uranium"],
            answer: 2,
            image: "<img class='rounded mx-auto d-block image' src='assets/images/question2.png'/>"
        },
        {
            question: "3. How many Infinity Stones are there?",
            answerChoices: ["6", "3", "12", "100"],
            answer: 0,
            image: "<img class='rounded mx-auto d-block image' src='assets/images/question3.png'/>"
        },
        {
            question: "4. Who was responsible for the time stone?",
            answerChoices: ["Thanos", "Black Widow", "Spiderman", "Dr. Strange"],
            answer: 3,
            image: "<img class='rounded mx-auto d-block image' src='assets/images/question4.png'/>"
        },
        {
            question: "5. What is Don Cheedle's character name?",
            answerChoices: ["America's Patriot", "Black Iron Man", "Iron Patriot", "Ironman 2.0"],
            answer: 2,
            image: "<img class='rounded mx-auto d-block image' src='assets/images/question5.png'/>"
        },
        {
            question: "6. Which character does not have their own movie?",
            answerChoices: ["Black Widow", "Hulk", "Dr. Strange", "Ironman"],
            answer: 0,
            image: "<img class='rounded mx-auto d-block image' src='assets/images/question6.png'/>"
        },
        {
            question: "7. how many suits does Iron Man have?",
            answerChoices: ["3", "25", "102", "47"],
            answer: 3,
            image: "<img class='rounded mx-auto d-block image' src='assets/images/question7.png'/>"
        },
        {
            question: "8. Who was the villain in Spiderman Homecoming?",
            answerChoices: ["Green Goblin", "Sandman", "The Vulture", "Venom"],
            answer: 2,
            image: "<img class='rounded mx-auto d-block image' src='assets/images/question8.png'/>"
        },
        {
            question: "9. How did Thor lose his eye?",
            answerChoices: ["Fighting Thanos", "Battling his sister", "Being stabbed by Loki", "Playing with a BB gun"],
            answer: 1,
            image: "<img class='rounded mx-auto d-block image' src='assets/images/question9.png'/>"
        },
        {
            question: "10. What is the name of Iron Man's computer?",
            answerChoices: ["Alexa", "Siri", "Jarvis", "Ultron"],
            answer: 2,
            image: "<img class='rounded mx-auto d-block image' src='assets/images/question10.png'/>"
        }

    ];

    var currentQuestion;
    var correctAnswer;
    var incorrectAnswer;
    var unanswered;
    var seconds;
    var time;
    var answered;
    var userSelect;

    var messages = {
        correct: "Hey! Alright! Good job!",
        incorrect: "No, that's not it.",
        incorrectImage: "<img class='wrong-image' src='assets/wrong_answer.png'/>",
        endTime: "Out of time!",
        finished: "Let's see how you did."
    }

    $("#startBtn").on("click", function () {
        $(this).hide();
        $(".instruction").hide();
        newGame();
    });
    $("#startOverBtn").on("click", function () {
        $(this).hide();
        newGame();
    });

    function newGame() {
        $("#finalMessage").empty();
        $("#correctAnswers").empty();
        $("#incorrectAnswers").empty();
        $("#unanswered").empty();

        currentQuestion = 0;
        correctAnswer = 0;
        incorrectAnswer = 0;
        unanswered = 0;
        newQuestion();
    }

    function newQuestion() {
        $("#message").empty();
        $("#correctedAnswer").empty();
        $("#image").empty();
        answered = true;

        //gets new question and answerChoices
        $("#currentQuestion").html("Question # " + (currentQuestion + 1) + "/" + triviaQuestions.length);
        $(".question").html("<h2>" + triviaQuestions[currentQuestion].question + "</h2>");
        for (var i = 0; i < 4; i++) {
            var choices = $("<div>");
            choices.text(triviaQuestions[currentQuestion].answerChoices[i]);
            choices.attr({
                "data-index": i
            });
            choices.addClass("thisChoice");
            $(".answerChoices").append(choices);

        }
        countdown();
        //clicking an answer will pause timer and bring up the answerPage
        $(".thisChoice").on("click", function () {
            userSelect = $(this).data("index");
            console.log(userSelect);
            clearInterval(time);
            answerPage();
        })
    }

    function countdown() {
        seconds = 15;
        $("#timeLeft").html("<h3>Time Remaining: " + seconds + "</h3>");
        answered = true;
        //sets time to go down
        time = setInterval(showCountdown, 1000);
    }

    function showCountdown() {
        seconds--;
        $("#timeLeft").html("<h3>Time Remaining: " + seconds + "</h3>");
        if (seconds < 1) {
            clearInterval(time);
            answered = false;
            answerPage();
        }
    }

    function answerPage() {
        $("#currentQuestion").empty();
        $(".thisChoice").empty();
        $(".question").empty();

        var rightAnswerText = triviaQuestions[currentQuestion].answerChoices[triviaQuestions[currentQuestion].answer];

        var rightAnswerIndex = triviaQuestions[currentQuestion].answer;
        //add image to the question

        $("#image").html(triviaQuestions[currentQuestion].image);

        console.log(triviaQuestions[currentQuestion].image);
        //checks to see correct, incorrect, or unanswered

        if ((userSelect == rightAnswerIndex) && (answered == true)) {
            correctAnswer++;
            $("#message").html(messages.correct);
        } else if ((userSelect != rightAnswerIndex) && (answered == true)) {
            incorrectAnswer++;
            $("#message").html(messages.incorrect);
            $("#correctedAnswer").html("The correct answer was: " + rightAnswerText);
            console.log(rightAnswerText);
        } else {
            unanswered++;
            $("#message").html(messages.endTime);
            $("#correctedAnswer").html("The correct answer was: " + rightAnswerText);
            answered = true;
        }
        if (currentQuestion == (triviaQuestions.length - 1)) {
            setTimeout(scoreboard, 4000);
        } else {
            currentQuestion++;
            setTimeout(newQuestion, 4000);
        }
    }

    function scoreboard() {
        $("#timeLeft").empty();
        $("#message").empty();
        $("#correctedAnswer").empty();
        $("#image").empty();

        $("#finalMessage").html(messages.finished);
        $("#correctAnswers").html("Correct Answers: " + correctAnswer);
        $("#incorrectAnswers").html("Incorrect Answers: " + incorrectAnswer);
        $("#unanswered").html("Unanswered: " + unanswered);
        $("#startOverBtn").addClass("reset btn btn-success");
        $("#startOverBtn").show();
        $("#startOverBtn").html("Start Over?");

    }
});