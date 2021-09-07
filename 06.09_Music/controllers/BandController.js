// Подключим модель студентов
const modelBand = require("../models/band");

// Create => POST
exports.post = function (request, response) {
    console.log("Run POST");
    if (!request.body) return response.sendStatus(400);
    // Создадим нового студента по средствам модели
    const newBand = new modelBand(request.body);
    // Сохраним нового студента в базе
    newBand.save( function (err) {
        // Обработка ошибки
        if (err){
            console.log(err);
            return err;
        }
        // Возвращаем статус 200
        return response.sendStatus(200);
    });
}

// Read => GET
exports.get = function (request, response) {
    console.log("Run GET");
    modelBand.find({},
        function (err, allBand ) {
            if (err){
                console.log(err);
                return err;
            }
            response.json(allBand);
        });

}

// Update => PUT
exports.put = function (request, response) {
    console.log("Run PUT");
}

// Delete => DELETE
exports.delete = function (request, response) {
    console.log("Run DELETE");
}