const express = require('express');

const app = express();

//middleWare
app.use(function (request,response){
    console.log("I checked it");
    //response.send("<h2>You good</h2>");
    next();
});

app.get("/", function (request,response){

    response.send("<h2>Hello, Express</h2>");
});

app.get("/about", function (request, response){
    response.send("<h2>About</h2>")
})



app.listen(3000);