var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

$(".btn").click(function () {
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);

    playSound(userChosenColor);
});

function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    console.log (randomNumber);

    var randomChosenColor = buttonColors[randomNumber];
    console.log (randomChosenColor);

    gamePattern.push(randomChosenColor);
    console.log(gamePattern);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor);

    }

function playSound(name){
    var sound = new Audio("sounds/" + name + ".mp3");
    sound.play();
}

