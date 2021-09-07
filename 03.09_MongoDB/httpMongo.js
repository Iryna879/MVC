const express = require('express');
const {request} = require("express");

//const MongoClient = require("mongodb").MongoClient;
//const objectId = require("mongodb").ObjectId;

const mongoose = require("mongoose");

const uri = "mongodb+srv://Iryna:PzFeiLEU4triOUbF@cluster0.l28g9.mongodb.net/PhoneBook?retryWrites=true&w=majority";
//const mongoClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());

app.use(express.static("public"));

const PhoneBookController = require("./First/controller/PhoneBookController");

// маршрутизатор
app.route ("/api/phoneBook")
    .get(PhoneBookController.get)
    .post(PhoneBookController.post)
    .put(PhoneBookController.put)
    .delete(PhoneBookController.delete);

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