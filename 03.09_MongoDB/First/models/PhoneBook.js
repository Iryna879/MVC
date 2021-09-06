// Подключим настройку модели (Схемы) DB
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Опишем нашего студента
const PhoneBook = new Schema({
    name: String,
    email: [{name: String, mail: String}],
    phone: [{name: String, tel: String}]
});

// Экспортируем модель нашего студента
module.exports = mongoose.model("PhoneBook", PhoneBook);