
var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];
var level = 0;

$(".btn").click(function(){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);

    $(`#${userChosenColor}`).addClass("pressed");

    setTimeout(function () {
        $(`#${userChosenColor}`).removeClass("pressed");
    }, 100);

    for(var i=0; i<=level; i++){
        if(gamePattern[i]==userClickedPattern[i]){
            nextSequence();
        }else{
            $(`#level-title`).text(`You dead`);
        }
    }
    level++;
})

function nextSequence(){
    $(`#level-title`).text(`Level ${level}`);

    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $(`#${randomChosenColor}`).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor);
}

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}


$(document).keypress(function(){
    nextSequence();
})       








