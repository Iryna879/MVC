// Подключим настройку модели (Схемы) DB
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PhoneBook = new Schema({
    name: String,
    email: [{name: String, mail: String}],
    phone: [{name: String, tel: String}]
});

module.exports = mongoose.model("PhoneBook", PhoneBook);