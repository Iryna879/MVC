// Подключим модель студентов
const modelBand = require("../models/band");

// Create => POST
exports.post = function (request, response) {
    console.log("Run POST");

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