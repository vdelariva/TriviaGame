$(document).ready(function() {


restartQuiz();

$("button").on("click", function() {

    console.log($(this).attr("id"))
    

    // If Restart Quiz button pressed, then restart the quiz
    if ($(this).attr("id") === "restartQuiz") {
        restartQuiz();
    }
    // Quiz answer button pressed, check answer
    else {
        var answer = checkAnswer($(this).attr("id"),questions[questionIndex]);
        displayAnswer (answer, questions[questionIndex])

        setTimeout(nextQuestion, 1000);
    }

  });
})

// Global Variables
// var questionTimer = setTimeout(nextQuestion, 5000);
var q1 = new TrivaQuestion("According to Apollo astronauts, the Moon smells like:","cheese","gasoline","burnt gunpowder","coffee grounds","burnt gunpowder","The Apollo astronauts said that not only did the Moon smell like burnt gunpowder, but it also tasted like it.","assets/images/moon.jpg")
var q2 = new TrivaQuestion("The plant and skin of this fruit can cause contact dermatitis and other symptoms of poison ivy.","kiwi","mango","pomegranate","papaya","mango","Mango belongs to the same family as poison ivy. Both plants produce the irritating chemical called urushiol.","assets/images/mango.jpg")

var questions = [q1,q2];

var questionIndex = 0;
var numCorrect = 0;
var numWrong = 0;

// Functions & Objects

function TrivaQuestion (question,ans1,ans2,ans3,ans4,correctAns,ansInfo,ansImg) {
    this.question = question;
    this.ans1 = ans1;
    this.ans2 = ans2;
    this.ans3 = ans3;
    this.ans4 = ans4;
    this.correctAns = correctAns;
    this.ansInfo = ansInfo;
    this.ansImg = ansImg;
}

// Gets & Displays the next triva question
function nextQuestion(){
    questionIndex++;
    clearAnswer();

    if (questionIndex < questions.length) {
        displayQuestion(questions[questionIndex]);
    } else {
        gameOver();
    }
}

// Display a triva question
function displayQuestion(q) {
    console.log("displayQuestion: q= "+q)
    $("#triviaQuestion").html(q.question);
    $("#btn1").html(q.ans1).show();
    $("#btn2").html(q.ans2).show();
    $("#btn3").html(q.ans3).show();
    $("#btn4").html(q.ans4).show();
}

// Clears the question
function clearQuestion() {
    $("#triviaQuestion").hide();
    $("#btn1").hide();
    $("#btn2").hide();
    $("#btn3").hide();
    $("#btn4").hide();
}

// Displays the triva answer, info and image
function displayAnswer(a,q) {
    console.log("displayAnswer")
    if (a) {
        $("#result").html("Correct!").css("color","green")
    }
    else {
        $("#result").html("Wrong!").css("color","red")
    }
    $("#info").html(q.ansInfo)
    $("#answerImg").html("<img src='"+q.ansImg+"'>")
}
// Clears the displayed answer
function clearAnswer() {
    $("#result").empty();
    $("#info").empty();
    $("#answerImg").empty();
}

// Display the game statistics, display button to restart quiz
function displayStats() {
    console.log("displayStats");
    $("#correctAns").html(numCorrect);
    $("#wrongAns").html(numWrong);
    $("#restartQuiz").show();
}

// Clear the game statistics
function clearStats() {
    console.log("clearStats");
    $("#correctAns").empty();
    $("#wrongAns").empty();
    $("#restartQuiz").hide();
    numCorrect = 0;
    numWrong = 0;
}

// Returns True if the correct answer selected, else returns False
function checkAnswer(btn,ans){
    // var btnAns = [ans1,ans2,ans3,ans4];
    // var a;
    
    switch(btn) {
        case "btn1":
            // a = "ans1"
            // console.log("ans.a: "+ans.a)
            if (ans.a === ans.correctAns) {
                numCorrect++;
                return true;
            }
            else {
                numWrong++
                return false;
            }
            break;
        case "btn2":
            if (ans.ans2 === ans.correctAns) {
                numCorrect++
                return true;
            }
            else {
                numWrong++;
                return false;
            }
            break;
        case "btn3":
            if (ans.ans3 === ans.correctAns) {
                numCorrect++;
                return true;
            }
            else {
                numWrong++;
                return false;
            }
            break;
        case "btn4":
            if (ans.ans4 === ans.correctAns) {
                numCorrect++;
                return true;
            }
            else {
                numWrong++;
                return false;
            }
            break;
    }

}

function restartQuiz() {
    console.log("restartQuiz")
    clearStats();
    $("restart")
    questionIndex = 0;
    displayQuestion(questions[questionIndex]);

}

// Game Over, displays the correct/wrong answer percentages, option to restart the game
function gameOver() {
    console.log("Game Over");
    clearQuestion();
    displayStats();
}