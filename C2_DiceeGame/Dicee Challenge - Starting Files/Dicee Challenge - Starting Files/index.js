//1st Dicee
// var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber1 = Math.random(); //Dice 1 with random number 1 - 6
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;
console.log(randomNumber1);

var randomDiceImage = "dice" + randomNumber1 + ".png"; //img1 to img6

var randomImageFolder1 = "images/" + randomDiceImage; //location of imgs
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageFolder1);

//2nd Dicee
//var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.random(); //Dice 1 with random number 1 - 6
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;
console.log(randomNumber2);


var randomImageFolder2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageFolder2);

//findWinner(randomNumber1, randomNumber2);

var player1Points = 0;
var player2Points = 0;

//If player 1 wins
// function findWinner(randomNumber1, randomNumber2) {
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";

    player1Points++;
    //console.log("score1 " + player1Points);
    alert("My Score is " + player1Points);
    //$("#scoreOne").text(player1Points);


    // $(document).ready(function() {
    //     $("#clickMe").click(function() {
    //         // Change text of button element
    //         $("#scoreOne").html(player1Points);
    //     });
    // });

    //$("player").animate({ zoom: '150%' }, "slow");
}
//If player 2 wins
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
//if draw the game
else {
    document.querySelector("h1").innerHTML = "Draw!";
}

// }



//Winner Zoom
// $("#clickMe").click(function() {
//     $("h1").animate({ zoom: '150%' }, 5000);
// });