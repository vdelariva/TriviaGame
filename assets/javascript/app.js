$(document).ready(function() {


restartQuiz();

$("button").on("click", function() {

    // If Restart Quiz button pressed, then restart the quiz
    if ($(this).attr("id") === "restartQuiz") {
        restartQuiz();
    }
    // Quiz answer button pressed, check answer
    else {
        var answer = checkAnswer($(this).attr("id"),questions[questionIndex]);
        displayAnswer (answer, 0, questions[questionIndex])

        setTimeout(nextQuestion, displayAnswerTime);
    }

  });
})

// Global Variables & Constants
const answerQuestionTime = 5000;
const displayAnswerTime = 3000;
const second = 1000;

var questionTimer;
var secondTimer;
var timeRemaining;

// Trivia Questions
var q1 = new TriviaQuestion("According to Apollo astronauts, the Moon smells like:","cheese","gasoline","burnt gunpowder","coffee grounds","burnt gunpowder","The Apollo astronauts said that not only did the Moon smell like burnt gunpowder, but it also tasted like it.","assets/images/moon.jpg");
var q2 = new TriviaQuestion("The plant and skin of this fruit can cause contact dermatitis and other symptoms of poison ivy.","kiwi","mango","pomegranate","papaya","mango","Mango belongs to the same family as poison ivy. Both plants produce the irritating chemical called urushiol.","assets/images/mango.jpg");
var q3 = new TriviaQuestion("You may have heard a weird meat 'tastes like chicken.' Which edible insect actually does taste like chicken?","cicada","brown cockroach","grasshopper","dung beetle","cicada","In the woods and looking for a tasty snack? Try a cicada. Tastes like chicken. Really! Some sources report they taste like shrimp or almonds. Also, the flavor depends whether you eat them cooked or raw.","assets/images/cicada.jpg");
var q4 = new TriviaQuestion("Chocolate contains theobromine and a little caffeine. A 1-ounce square of chocolate has as much caffeine as:","Half a can of cola","A cup of regular coffee","A glass of iced tea","A cup of decaf coffee","A cup of decaf coffee","The interesting part of this fact is that decaffeinated coffee does, in fact, still contain a small amount of caffeine. The theobromine in chocolate is a stimulant, like caffeine, but its effect lasts longer and it doesn't produce that same 'crash' as caffeine.","assets/images/chocolate.jpeg");
var q5 = new TriviaQuestion("While we're on the topic of caffeine, which of the following contains, on average, the least caffeine?","Cup of coffee","Cup of green tea","Shot of espresso","Cup of black tea","Shot of espresso","Are you surprised? Coffee and tea contain comparable quantities of caffeine. Although espresso tastes strong, it doesn't actually contain as much caffeine as the other beverages. Of course, caffeine dose also depends on how much coffee or tea you use to make the drink.","assets/images/coffee.jpg");
var q6 = new TriviaQuestion("All of the following animals can move very quickly. Which is the fastest?","cheetah","peregrine falcon","black marlin","horsefly","peregrine falcon", "All of these animals are much faster than you! While the cheetah is the fastest land animal, it only runs at 68-75 mph. The peregrine falcon is the fastest animal on this list, clocking flight as high as 389 km/h or 242 mph","assets/images/falcon.jpg");
var q7 = new TriviaQuestion("Every person is different, but just how much do you differ, genetically, from other humans?","25%","2%","10%","0.1%","0.1%","Although the previous accepted value was 0.1% difference, more recent research indicates the variation may range from 0.1 to 0.9%. Even so, you share at least 99% of your DNA with any other person.","assets/images/dna.jpeg");
var q8 = new TriviaQuestion("Lobster blood is blue once it is exposed to air. What color is it inside a living lobster?","blue","yellow","clear","red","clear","The blue color of lobster blood comes from copper-based hemocyanin, but it isn't blue until it's exposed to air. It's also found in spiders and certain other arthropods.","assets/images/lobster.jpg");
var q9 = new TriviaQuestion("Human blood is red when it is exposed to air. What color is the deoxygenated blood inside your veins?","blue","clear","red","brown","red","Medical and science texts show red arteries and blue veins, but that doesn't have anything to do with the color of the blood they carry. Veins appear blue or green because they are viewed through skin. Deoxygenated blood is a darker red than oxygenated blood, but it's still red.","assets/images/circulatory.jpg");
var q10 = new TriviaQuestion("Scientist have studied public restroom stall use. The toilet used the least may have fewest germs. Which stall is this?","first door on the right","first door on the left","any middle stall","either stall furthest from the entrance","first door on the left","First door on the left. There's some practical science you can apply to make your life better!","assets/images/toilet.jpg");

var questions = [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10];
// var questions = [q9,q10]

var questionIndex = 0;
var numCorrect = 0;
var numWrong = 0;

// Functions & Objects

function TriviaQuestion (question,ans1,ans2,ans3,ans4,correctAns,ansInfo,ansImg) {
    this.question = question;
    this.ans1 = ans1;
    this.ans2 = ans2;
    this.ans3 = ans3;
    this.ans4 = ans4;
    this.correctAns = correctAns;
    this.ansInfo = ansInfo;
    this.ansImg = ansImg;
}

// Gets & Displays the next trivia question
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
    questionTimer = setTimeout(function(){displayAnswer(false, 1, questions[questionIndex])}, answerQuestionTime); // Set time allowed to answer question
    secondTimer = setInterval(secondCountdown, second); // Set interval time to count down seconds
    timeRemaining = answerQuestionTime/1000;

    $("#timeRemaining").html("Time Remaining: "+timeRemaining+" seconds").show(); // Show the time remaining to answer question

    $("#triviaQuestion").html(q.question).show(); // Display the trivia question with possible answers
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
// Parameters: a: answer (true/false), r: reason (0 = wrong answer/1 = time's up), q: current question
function displayAnswer(a,r,q) {
    if (a) {
        $("#result").html("Correct!").css("color","green");
    }
    else if(r === 0) {
        $("#result").html("Wrong!").css("color","red");
    }
    else {
        $("#result").html("Times's Up!").css("color","red");
        numWrong++;
        setTimeout(nextQuestion, displayAnswerTime);
    }
    clearTimeout(questionTimer); // Stop the question timer
    clearTimeout(secondTimer); // Stop the second timer

    $("#timeRemaining").hide(); // hide the remaining time counter
    $("#info").html(q.ansInfo);
    $("#answerImg").html("<img src='"+q.ansImg+"'>");
}

// Clears the displayed answer
function clearAnswer() {
    $("#result").empty();
    $("#info").empty();
    $("#answerImg").empty();
}

// Display the game statistics, display button to restart quiz
function displayStats() {
    $("#timeRemaining").hide();
    $("#correctAns").html("Correct Answers: "+numCorrect);
    $("#wrongAns").html("Wrong Answers: "+numWrong);
    $("#restartQuiz").show();
}

// Clear the game statistics
function clearStats() {
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
            if (ans.ans1 === ans.correctAns) {
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
    clearStats();
    $("restartQuiz").hide;
    questionIndex = 0;
    displayQuestion(questions[questionIndex]);

}

// Game Over, displays the correct/wrong answer percentages, option to restart the game
function gameOver() {
    clearQuestion();
    displayStats();
}

function secondCountdown() {
    timeRemaining--;
    $("#timeRemaining").html("Time Remaining: "+timeRemaining+" seconds").show();

}