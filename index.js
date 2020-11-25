var readlineSync = require("readline-sync");

var name = readlineSync.question("what is my name");

console.log("my name is "+name);

var score = 0;

function play(que,ans){
  var userAnswer = readlineSync.question(que);

  if(userAnswer === ans){
    console.log("i win");
    score+=1;
  }
  else{
    console.log("i loose");
    score-=1;
  }
  console.log("current score: ", score);
  console.log("-------------")
}

var questions = [
{que:"who am i supporting",
 ans:"AIMIM"},
{que:"who is the fav politician",
 ans:"owaisi"}
 ];

for(var i=0;i<questions.length;i++){
 var currrentQuestion = questions[i];
 play(currrentQuestion.que,currrentQuestion.ans)
}

console.log("YAY! You SCORED: ", score);

console.log("Check out the scores");


