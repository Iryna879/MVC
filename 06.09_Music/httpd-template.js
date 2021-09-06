const express = require('express');


const mongoose = require("mongoose");

const uri = "mongodb+srv://Iryna:PzFeiLEU4triOUbF@cluster0.l28g9.mongodb.net/PhoneBook?retryWrites=true&w=majority";

const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());

app.use(express.static("public"));

 // TODO : подключить нужные контроллеры
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