$(document).ready(function() {
//var for wins, losses, random number at start of game, and score
var wins = 0;
var losses = 0;
var random = 0;
var score = 0;

//array and call your DIVs
var crystalNum = [

$("#lapis"),
$("#opal"),
$("#peridot"),
$("#sapphire"),
];


//new game function
function startGame() {
score = 0;
$(".scorebox")
.empty()
.append(score);


//Math random the random number
random = [Math.floor(Math.random() * (120 - 19 + 1) + 19)];
$(".numberbox")
  .empty()
  .append(random);

//for loop the crystal value
for (var i = 0; i < crystalNum.length; i++) {
  varRandom = [Math.floor(Math.random() * (12 - 1 + 1) + 1)];
  crystalNum[i].attr("crystalnum", varRandom);
  console.log("random " + varRandom);
  console.log(crystalNum.length);
}
}

startGame();

$(".winbox").append(wins);
$(".lossbox").append(losses);

//click function

$(".crystalpic").on("click", function() {
    console.log("clicked");
    var crystalSavedNum = $(this).attr("crystalnum");
    console.log("clicking" + crystalSavedNum);
    crystalSavedNum = parseInt(crystalSavedNum);
    console.log("clicker" + crystalSavedNum);
    score = score += crystalSavedNum;
    $(".scorebox")
      .empty()
      .append(score);



//if else statement // make sure to start new game after conditions are met
//+add a console log as well as an alert

if (score == random) {
wins++;
alert ("Winner Winner Crystal Chicken Dinner!");
console.log("You got a win");
$(".winbox")
.empty()
.append(wins);
startGame();
}

else if (score > random) {
losses++;
alert ("You lost. No Crystals for You!");
console.log("You got a loss");
$(".lossbox")
.empty()
.append(losses);
startGame();
}
});
});
