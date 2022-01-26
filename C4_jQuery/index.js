// $("h1").addClass("big-title margin-50", "5rem");
// $("h1").css("color", "purple");

// for (var i = 0; i < 5; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function() {
//         document.querySelector("h1").style.color = "blue";
//     });
// }

// $("button").click(function() {
//     $("h1").css("color", "red");
// });

var btn = document.getElementById("mybtn");
btn.value = 'my value'; // will just add a hidden value
btn.innerHTML = 'my text';

//When typing  in the text box, that key shows on the screen
// $("input").keypress(function(event) {
//     $("h1").text(event.key);
// });

// $("h1").click("mouseover", function() {
//     $("h1").css("color", "purple");
// });

// $("button").on("click", function() {
//     $("h1").fadeToggle();
// });

// $("button").on("click", function() {
//     $("h1").animate({ opacity: 0.5 })
// });

// $("button").on("click", function() {
//     $("h1").animate({ margin: "20%" })
// });

// $("button").on("click", function() {
//     $("h1").slideUp().slideDown().animate({ margin: "20%" })
// });

// $("h1").click(function() {
//     $("button").animate({ zoom: '150%' }, slow);
// });


// $("#clickme").click(function() {
//     $("#book").animate({
//         opacity: 0.25,
//         left: "+=50",
//         height: "toggle"
//     }, 5000, function() {
//         // Animation complete.
//     });
// });