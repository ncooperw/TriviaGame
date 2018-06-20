// --------------------------------------
//Start page - user clicks the start button to begin the game.
//one question shown at a time with a timer ticking down.
//page has timer question, answer choices -- put q and a into an object
// check for the answer and show whether it is correct or incorrect with an image -- if statements for correct and incorrent answers with images associated with the answers. Show the correct answer before going to the next question... switch without user input -- setTimerout
// at the end of the questions shows correct and incorrect answers and unanswered
//has a start over button that resets the game


//Theme Marvel Movies Trivia
//1. In Captain America Civil War, who is Captain America trying to save? *Bucky, Buddy, Iron Man, Black Widow
//2. In Black Panther, what is the resource they use in all of their technology? vibranium, metal, diamonds, uranium
//3. How many Infinity Stones are there?*6, 3, 12, 100
//4. Who was responsible for the time stone? *Dr. Strange, Thanos, Black Widow, Spiderman
//5. What is Don Cheedle's character name? *Iron Patriot, America's Patriot, Black Iron Man, Ironman 2.0
//6. Which character does not have their own movie? *Black Widow, Hulk, Dr. Strange, Ironman
//7. how many suits does Iron Man have? 3, 25, 102, *47
//8. Who was the villain in Spiderman Homecoming? Green Goblin, Sandman, The Vulture, Venom
//9. How did Thor lose his eye? fighting Thanos, *battle with his sister, Loki stabbed him, playing with a BB gun
//10. What is the name of Iron Man's computer? Alexa, Siri, *Jarvis, Ultron
// ----------------------------------
$(document).ready(function () {
    // Global variables needed
    var time = 20;
    var intervalId = "";
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

    var trivia = {
        questions: ["1. In Captain America Civil War, who is Captain America trying to save?", "2. TEST", "3.TEST"],
        answers: [
            ["Bucky", "Buddy", "Iron Man", "Black Widow"]
        ],
        correctAnswer: ["Bucky"],
        image: ["<img class='center-block' src='assets/images/question 1.png'/>"]
    }
    //initial game setup and game reset function
    function initializeGame() {
        $(".title").append("Click to Start Game");
        $(".content-div").empty();

    };

    initializeGame();
$("button").on("click", gameStart);
    function gameStart() {
        
        for (i=0; i<trivia.questions.length; i++){
            // intervalId = setInterval(decrement, 1000);
            // console.log(intervalId);
            console.log(trivia.questions[i]);
        }
        
        //write the timer to the .timer-div

        // Time Remaining: <span class ='timer'>10</span></p><p class"


        //write the question to the .question-div
        $(".question-div").html("<p class='text-center timer-p'>trivia.questions[i]</p>")
        //write the answer choices to the .content-div

        //once answer is chosen, check to see if the answer is correct

        //display image and update HTML

        //setTimeout function before going to the next question
    }
    gameStart();
});