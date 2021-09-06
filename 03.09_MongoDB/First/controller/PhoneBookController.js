const modelBook = require("../models/PhoneBook");

let PhoneBookAdvPlus = [];

PhoneBookAdvPlus[0] = {
    id: 0,
    name: "Olexander Nykytin",
    email: [{name: " Личный", mail: "keeper@ninydev.com"}, {name: " рабочий", mail: "nikitin_a@itstep.academy"}],
    phone: [{name: " Личный", tel: "+380965747708"}, {name: " соседка", tel: "+380512192123"}]
}
PhoneBookAdvPlus[1] = {
    id: 1,
    name: "Ivan Ivanov",
    email: [{name: " Личный", mail: "lorix77602@mi166.com"}, {name: " рабочий", mail: "lori77602@mi17.com"}],
    phone: [{name: " Личный", tel: "+380965747333"}, {name: " соседка", tel: "+380578592123"}]
}

//let lastId = 2;
// create => POST
exports.post = function (request, response){
    console.log("Run POST");
    if(!request.body) return response.sendStatus(400);
    if (request.body.name.length < 1) return response.sendStatus(400);

    /*PhoneBookAdvPlus.push(  {
        id: lastId++,
        name: request.body.name,
        email: request.body.email,
        phone: request.body.phone
    });*/
    const NewContact = new modelBook({
        name: request.body.name,
        email: request.body.email,
        phone: request.body.phone
    });
    // Сохраним нового студента в базе
    NewContact.save( function (err) {
        // Обработка ошибки
        if (err){
            console.log(err);
            return err;
        }
        // Возвращаем статус 200
        return response.sendStatus(200);
    });

    //return response.sendStatus(206);

}

// read => GET
exports.get = function (request, response){
    console.log("Run GET");
    // response.json(PhoneBookController);
    //response.json(PhoneBookAdv);
    //response.json(PhoneBookAdvPlus);
    modelBook.find({},
        function (err, PhoneBookAdvPlus ) {
            if (err){
                console.log(err);
                return err;
            }
            response.json(PhoneBookAdvPlus);
        }
    );
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

    /*   for (let phone of PhoneBookAdv) {
           if (phone.id == request.body.id){
               phone.name = request.body.name;
              phone.email = request.body.email;
              phone.phone = request.body.phone;
               break;
           }

       }
       response.json(PhoneBookAdv);*/

    for (let phone of PhoneBookAdvPlus) {
        if (phone.id == request.body.id){
            phone.name = request.body.name;
            for (let i = 0; i < request.body.email.length; i++){
                const str = request.body.email[i];
                const re = str.split(":");

                for (let j = 0; j < phone.email.length; j++) {
                    if(i == j) {

                        phone.email[j].name = re[0];
                        phone.email[j].mail= re[1];
                    }
                }
                console.log(phone.email);
            }

            for (let k = 0; k < request.body.phone.length; k++){
                const str = request.body.phone[k];
                const re = str.split(":");
                //console.log(re[0]);
                // console.log(re[1]);
                for (let j = 0; j < phone.phone.length; j++) {
                    if(k == j) {

                        phone.phone[j].name = re[0];
                        phone.phone[j].tel = re[1];
                    }
                }
            }
            break;
        }

    }
    response.json(PhoneBookAdvPlus);
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

    /*   const index = PhoneBookAdv.findIndex(p => p.id == request.body.id );
       if(index !== -1){
           PhoneBookAdv.splice(index, 1);
       }

       response.json(PhoneBookAdv);*/

    const index = PhoneBookAdvPlus.findIndex(p => p.id == request.body.id );
    if(index !== -1){
        PhoneBookAdvPlus.splice(index, 1);
    }

    response.json(PhoneBookAdvPlus);

}









