// Подключим настройку модели (Схемы) DB
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Опишем нашего студента
const ModelName = new Schema({
    name: String
});

// Экспортируем модель нашего студента
module.exports = mongoose.model("ModelName", ModelName);