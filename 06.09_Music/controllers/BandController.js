// Подключим модель студентов
const modelBand = require("../models/band");

// Create => POST
exports.post = function (request, response) {
    console.log("Run POST");
    if (!request.body) return response.sendStatus(400);

    const newBand = new modelBand(request.body);

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
    if(!request.body) return response.sendStatus(400);
    const id = request.body.id;
    const bandName = request.body.name;
    const albums = request.body.albums;
    console.log(request.body.albums);
    const newBand = {name: bandName, albums: albums};

    modelBand.findOneAndUpdate({_id: id}, newBand, {new: true}, function(err, band){
        if(err) return console.log(err);
        response.send(band);
    });
}

// Delete => DELETE
exports.delete = function (request, response) {
    console.log("Run DELETE");
}