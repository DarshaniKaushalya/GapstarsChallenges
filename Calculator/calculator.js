const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) //first part of here is define the location of directing //we can use( req, res )also 
    {
        //console.log(request);
        //response.send("<h1>Hello Dar</h1>");
        res.sendFile(__dirname + "/index.html");
    });

app.post("/", function(req, res) //first part of here is define the location of directing //we can use( req, res )also 
    {
        //console.log(req.body.num1); // it shows us that we are enter in the code

        var num1 = Number(req.body.num1);
        var num2 = Number(req.body.num2);

        var result = num1 + num2;
        res.send("The result is " + result);

    });
app.get("/bmiCalculator", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/bmiCalculator", function(req, res) {
    var height1 = Number(req.body.height); //parseFloat
    var weight1 = Number(req.body.weight); //parseFloat

    var bmi = height1 / (weight1 * weight1);
    res.send("Your BMI is " + bmi);
});

app.listen(3002, function() {
    console.log("server started on port 3002");
});