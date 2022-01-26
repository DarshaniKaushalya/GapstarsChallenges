const express = require("express");

const app = express();

app.get("/", function(request, response) //first part of here is define the location of directing //we can use( req, res )also 
    {
        //console.log(request);
        response.send("<h1>Hello World</h1>");
    });
app.get("/contact", function(req, res) {
    res.send("Contact Me: darshani@gmail.com");
});
app.get("/about", function(req, res) {
    res.send("About Us");
});
app.get("/hobbies", function(req, res) {
    res.send("My Hobbies");
});
app.listen(4000, function() {
    console.log("server started on port 4000");
});