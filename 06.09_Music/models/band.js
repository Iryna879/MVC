// Подключим настройку модели (Схемы) DB
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Опишем нашего студента
const band = new Schema({
    name: String,
    albums: Array
});

// Экспортируем модель нашего студента
module.exports = mongoose.model("band", band);