$(document).ready(function() {

console.log(q1);

displayQuestion(q1);


})

// Global Variables
var questionTimer = setTimeout(nextQuestion, 5000);
var q1 = new TrivaQuestion("According to Apollo astronauts, the Moon smells like:","cheese","gasoline","burnt gunpowder","coffee grounds","burnt gunpowder","The Apollo astronauts said that not only did the Moon smell like burnt gunpowder, but it also tasted like it.","../images/moon.jpg")
    
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
    $(".triviaQuestion").html(q.question);
    $(".answer1").html(q.ans1);
    $(".answer2").html(q.ans2);
    $(".answer3").html(q.ans3);
    $(".answer4").html(q.ans4);

}

function nextQuestion(){
    console.log("Next Question")
}