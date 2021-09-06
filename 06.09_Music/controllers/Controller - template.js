// Подключим модель студентов
//const modelStudent = require("../models/Student");

// Create => POST
exports.post = function (request, response) {
    console.log("Run POST");
   /* if (!request.body) return response.sendStatus(400);
    if ( request.body.name.length < 1) return response.sendStatus(400);

    // Создадим нового студента по средствам модели
    const NewStudent = new modelStudent({name: request.body.name});
    // Сохраним нового студента в базе
    NewStudent.save( function (err) {
        // Обработка ошибки
        if (err){
            console.log(err);
            return err;
        }
        // Возвращаем статус 200
        return response.sendStatus(200);
    });*/
}

// Read => GET
exports.get = function (request, response) {
    console.log("Run GET");
   /* modelStudent.find({},
        function (err, allStudents ) {
            if (err){
                console.log(err);
                return err;
            }
            response.json(allStudents);
        }
    );*/
}

// Update => PUT
exports.put = function (request, response) {
    console.log("Run PUT");
}

// Delete => DELETE
exports.delete = function (request, response) {
    console.log("Run DELETE");
}