const { Console } = require("console");
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");

});

app.post("/", function(req, res) {
    //console.log(req.body.cityName);
    console.log("Post request recieved.");

    //////
    const query = req.body.cityName;
    const apiKey = "43f31475e8ac5ef0ea64e8a8f14f8e5c";
    const units = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + units;

    https.get(url,
        function(response) {
            console.log(response.statusCode);

            response.on("data", function(data) {
                //console.log(data);
                const weatherData = JSON.parse(data)

                const des = weatherData.weather[0].description //access retrive a specific weather Data
                const temp = weatherData.main.temp
                const icon = weatherData.weather[0].icon //add cloud icon
                const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
                    //console.log(temp);

                //res.send("<h1>The Weather in Colombo is " + description + " of weather condition <br> Temperature is " + temp + "</h1>");
                //     const weatherDescription = weatherData.weather[0].description
                res.write("<h1>Weather in " + query + "</h1><h2>Description: " + des + "</h2>"); //we can use more res.write to print more. Bcz we cannot use more res.send()
                res.write("<h2>Temperature: " + temp + "</h2>");
                res.write("<img src =" + imageURL + ">");

                res.send();




                // const object = {
                //     name: "Darshani",
                //     favouriteFood: "Ramen"
                // }
                // console.log(JSON.stringify(object));


                //     res.send("The temperature in Colombo is " + temp + "degrees Celcius");
            })

        })

})


///////////////////////////////////////

//res.send("Server is up and running.");


///////////////////////////////

//API key
//b13eefcf280582a57f20e9e97b7301da-us20

app.listen(3000, function() {
    console.log("Server is running on port 3000");
})