const modelBook = require("../models/PhoneBook");

// create => POST
exports.post = function (request, response){
    console.log("Run POST");
    if(!request.body) return response.sendStatus(400);
    if (request.body.name.length < 1) return response.sendStatus(400);

    const NewContact = new modelBook({
        name: request.body.name,
        email: request.body.email,
        phone: request.body.phone
    });

    NewContact.save( function (err) {
        // Обработка ошибки
        if (err){
            console.log(err);
            return err;
        }
        // Возвращаем статус 200
        return response.sendStatus(200);
    });

}

// read => GET
exports.get = function (request, response){
    console.log("Run GET");

    modelBook.find({},
        function (err,allPhone ) {
            if (err){
                return console.log(err);
            }
            response.send(allPhone);
        }
    );
}

// update => PUT
exports.put = function (request, response){
    console.log("Run PUT");
}

// delete => DELETE
exports.delete = function (request, response){
    console.log("Run DELETE");
}









