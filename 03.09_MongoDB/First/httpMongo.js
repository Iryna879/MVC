const express = require('express');

const MongoClient = require("mongodb").MongoClient;
//const objectId = require("mongodb").ObjectId;

const uri = "mongodb+srv://Iryna:PzFeiLEU4triOUbF@cluster0.l28g9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const mongoClient = new MongoClient(uri);

const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());

app.use(express.static("public"));

/*const StudentsController = require("./controllers/Students");

// маршрутизаторd
app.route ("/api/students")
    .get(StudentsController.get)
    .post(StudentsController.post)
    .put(StudentsController.put)
    .delete(StudentsController.delete);*/

const PhoneBookController = require("./controllers/PhoneBookController");

// маршрутизатор
app.route ("/api/phoneBook")
    .get(PhoneBookController.get)
    .post(PhoneBookController.post)
    .put(PhoneBookController.put)
    .delete(PhoneBookController.delete);


app.listen(3000);