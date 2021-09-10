const express = require('express');
const {request} = require("express");

const mongoose = require("mongoose");

const uri = "mongodb+srv://Iryna:PzFeiLEU4triOUbF@cluster0.l28g9.mongodb.net/MusicCatalog?retryWrites=true&w=majority";
//const mongoClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());

app.use(express.static("public"));

const bandC = require("./controllers/BandController");
app.route ("/api/band")
    .get(bandC.get)
    .post(bandC.post)
    .put(bandC.put)
    .delete(bandC.delete);

mongoose.connect(
    uri, { useNewUrlParser: true, useUnifiedTopology: true },
    function (err) {
        // Прервать, если ошибка соединения с базой данных
        if (err){
            console.log(err);
            return;
        }

        app.listen(3000, function () {
            console.log("http://localhost:3000");
        });
    });