let Students = [];
Students[0] = {name: "Ivanov"};
Students[1] = {name: "Petrov"};

let lastId = 102;

// create => POST
exports.post = function (request, response){
     console.log("Run POST");
     if(!request.body) return response.sendStatus(400);
     if (request.body.name.length < 1) return response.sendStatus(400);
     Students.push(  {
         id: lastId++,
         name: request.body.name
     });
     return response.sendStatus(206);
}

// read => GET
exports.get = function (request, response){
    console.log("Run GET");
    response.json(Students);
}

// update => PUT
exports.put = function (request, response){
    console.log("Run PUT");
    for (let i = 0; i < Students.length; i++) {
        if (Students[i].id == request.body.id){
            Students[i].name = request.body.name;
            break;
        }
    }
}

// delete => DELETE
exports.delete = function (request, response){
    console.log("Run DELETE");
}