/*let PhoneBookController = [];
PhoneBookController[0] = {
    id: 0,
    name: "Olexander Nykytin",
    email: "keeper@ninydev.com",
    phone: "+380965747708"
}
PhoneBookController[1] = {
    id: 1,
    name: "Ivan Ivanov",
    email: "lol@ninydev.com",
    phone: "+380965747678"
}*/
let PhoneBookAdv = [];
PhoneBookAdv[0] = {
    id: 0,
    name: "Olexander Nykytin",
    email: ["keeper@ninydev.com", "nikitin_a@itstep.academy"],
    phone: ["+380965747708","+380512192123"]
}
PhoneBookAdv[1] = {
    id: 1,
    name: "Ivan Ivanov",
    email: ["keep@ninydev.com", "nikitin_a@itstep.academy"],
    phone: ["+380965742389","+380512192123"]
}
let lastId = 2;
// create => POST
exports.post = function (request, response){
    console.log("Run POST");
    if(!request.body) return response.sendStatus(400);
    if (request.body.name.length < 1) return response.sendStatus(400);
   /* PhoneBookController.push(  {
        id: lastId++,
        name: request.body.name,
        email: request.body.email ,
        phone: request.body.phone
    });
    return response.sendStatus(206);*/

}

// read => GET
exports.get = function (request, response){
    console.log("Run GET");
  // response.json(PhoneBookController);
    response.json(PhoneBookAdv);
}

// update => PUT
exports.put = function (request, response){
    console.log("Run PUT");
    /*for (let phone of PhoneBookController) {
        if (phone.id == request.body.id){
            phone.name = request.body.name;
            phone.email = request.body.email;
            phone.phone = request.body.phone;
            break;
        }

    }*/
    //response.json(PhoneBookController);

    for (let phone of PhoneBookAdv) {
        if (phone.id == request.body.id){
            phone.name = request.body.name;
           phone.email = request.body.email;
           phone.phone = request.body.phone;
            break;
        }

    }
    response.json(PhoneBookAdv);
}

// delete => DELETE
exports.delete = function (request, response){
    console.log("Run DELETE");

   /* for (let i = 0; i < PhoneBookController.length; i++) {
        if (PhoneBookController[i].id == request.body.id){
            PhoneBookController.splice(i,1);
            break;
        }
    }
    response.json(PhoneBookController);*/

}









/*

let PhoneBookAdvPlus = [];
PhoneBookAdvPlus[0] = {
    id: 0,
    name: "Olexander Nykytin",
    email: [{name :" Личный", mail: "keeper@ninydev.com"},{name :" рабочий", mail: "nikitin_a@itstep.academy"}],
    phone: [{name :" Личный", mail: "+380965747708"},{name :" соседка", mail: "+380512192123"}]
}*/