var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0; //create a new variable called as level

$(document).keypress(function() //Create the keypress function
    {
        if (!started) {
            $("#level-title").text("Level " + level);
            nextSequence();
            started = true;
        }
    });

function nextSequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 3) + 1; //random number 1-3
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour); //pushing new choosen colors into gamePattern empty array
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100); // animated flash to the button 
    playSound(randomChosenColour);
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
}

$(".btn").click(function() { //btn click fuction

    var userChosenColour = $(this).attr("id"); //choose the button color according to id
    userClickedPattern.push(userChosenColour); //add the content

    playSound(userChosenColour); //add sound
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length - 1);
});

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor) //add animation when button click
{
    $("#" + currentColor).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

function startOver() //GameOver and Then Restart the Game
{
    level = 0;
    gamePattern = [];
    started = false;
}

function checkAnswer(currentLevel) //checking the answer
{

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
    } else {


        playSound("wrong"); //Sound added for wrong action  
        //sweetAlert(); 
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");

        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);

        startOver();

        //alert("Game Over");



    }
}

// function sweetAlert() {
//     Swal.fire({ //Game Over Sweet Alert
//         icon: 'error',
//         title: 'Oops...',
//         text: 'Something went wrong!',
//         footer: '<a href="">Why do I have this issue?</a>'
//     });
// }