//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");


const app = express(); //define the app
app.use(express.static("public")); //add this special function in express , to seems the css and images run on localhost, public mean created folder
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/signup.html");

});

app.listen(3000, function() {
    //res.send("Server is up and running.");
    console.log("Server is running on port 3000");
});
app.post("/", function(req, res) {
    var firstName = req.body.fname;
    var lastname = req.body.lname;
    var email = req.body.email;

    console.log(firstName, lastname, email);
})