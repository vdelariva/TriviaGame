$(document).ready(function() {

console.log(questionIndex);

displayQuestion(questions[questionIndex]);

$("button").on("click", function() {
    var answer;

    console.log($(this).attr("id"))
    console.log("questions: "+questions)
    console.log(q1)

    answer = checkAnswer($(this).attr("id"),questions[questionIndex]);
    displayAnswer (answer, questions[questionIndex])

    console.log(answer)


  });


})

// Global Variables
// var questionTimer = setTimeout(nextQuestion, 5000);
var q1 = new TrivaQuestion("According to Apollo astronauts, the Moon smells like:","cheese","gasoline","burnt gunpowder","coffee grounds","burnt gunpowder","The Apollo astronauts said that not only did the Moon smell like burnt gunpowder, but it also tasted like it.","assets/images/moon.jpg")
var q2 = new TrivaQuestion("The plant and skin of this fruit can cause contact dermatitis and other symptoms of poison ivy.","kiwi","mango","pomegranate","papaya","mango","Mango belongs to the same family as poison ivy. Both plants produce the irritating chemical called urushiol.","assets/images/mango.jpg")

var questions = [q1,q2];

var questionIndex = 0;

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

function displayQuestion(q) {
    console.log("displayQuestion: q= "+q)
    $("#triviaQuestion").html(q.question);
    $("#btn1").html(q.ans1);
    $("#btn2").html(q.ans2);
    $("#btn3").html(q.ans3);
    $("#btn4").html(q.ans4);

}

function displayAnswer (a,q) {
    console.log("displayAnswer")
    if (a) {
        $("#result").html("Correct!")
    }
    else {
        $("#result").html("Wrong!")
    }
    $("#info").html(q.ansInfo)
    var i = $("#answerImg").html("<img src='"+q.ansImg+"'>");
    console.log (i)

    $("answerImg").html("<img src='"+q.ansImg+"'>")
}

function checkAnswer(btn,ans){
    // var btnAns = [ans1,ans2,ans3,ans4];
    // var a;
    
    switch(btn) {
        case "btn1":
            // a = "ans1"
            // console.log("ans.a: "+ans.a)
            if (ans.a === ans.correctAns) {
                return true;
            }
            else {
                return false;
            }
            break;
        case "btn2":
            if (ans.ans2 === ans.correctAns) {
                return true;
            }
            else {
                return false;
            }
            break;
        case "btn3":
            if (ans.ans3 === ans.correctAns) {
                return true;
            }
            else {
                return false;
            }
            break;
        case "btn4":
            if (ans.ans4 === ans.correctAns) {
                return true;
            }
            else {
                return false;
            }
            break;
    }

}

function nextQuestion(){
    console.log("Next Question")
}