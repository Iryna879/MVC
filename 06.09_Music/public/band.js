
let bandView;
bandView = {

    sendForm(url) {
        //if(url == null) {
        // url = "/api/music";
        //}
        if (this.form == null) {
            console.log("No open form");
            return;
        }
        console.log("Start send form");

        let inBand = {
            name: document.getElementById("bandName").value,
            albums: []
        }
        for (let i = 0; i < this.form.elements.length; i++) {
            if (this.form.elements[i].name == "AlbumName") {
                let album = {
                    name: this.form.elements[i].value,
                    songs: []
                }

                inBand.albums.push(album);
            }

            if (this.form.elements[i].name == "song") {
                inBand.albums[inBand.albums.length - 1].songs.push(this.form.elements[i].value);
            }
        }

        console.log(inBand);
        fetch("/api/band",
            {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(inBand)
            })
            .then(doGet)
            .catch((ex) => {
                console.log(ex.message);
                console.log(ex.response);
            });
    },

    renderForm(rootElement) {
        rootElement.innerHTML = "";
        this.form = document.createElement("form");
        let inName = document.createElement("input");
        inName.id = "bandName";
        this.form.appendChild(inName);

        let ul = document.createElement("ul");
        ul.id = "bandAlbums";
        this.form.appendChild(ul);

        let btnAddAlbum = document.createElement("button");
        btnAddAlbum.type = "button";
        btnAddAlbum.innerText = "Add Album";
        btnAddAlbum.onclick = function () {
            let ulAlbums = document.getElementById("bandAlbums");
            let li = document.createElement("li");
            let inAlbumName = document.createElement("input");
            inAlbumName.name = "AlbumName";
            li.appendChild(inAlbumName);

            let ulSongs = document.createElement("ul");
            li.appendChild(ulSongs);

            let btnAddSong = document.createElement("button");
            btnAddSong.type = "button";
            btnAddSong.innerText = "Add Song";
            btnAddSong.onclick = function () {
                let ulSongs = this.previousSibling;
                let li = document.createElement("li");
                let inSongName = document.createElement("input");
                inSongName.name = "song";
                li.appendChild(inSongName);
                ulSongs.appendChild(li);

            }

            li.appendChild(btnAddSong);
            ulAlbums.appendChild(li);
        }

        this.form.appendChild(btnAddAlbum);

        let btnBandSave = document.createElement("button");
        btnBandSave.type = "button";
        btnBandSave.innerText = "Save Band";
        btnBandSave.onclick = this.sendForm;
        this.form.appendChild(btnBandSave);

        rootElement.appendChild(this.form);
    },


     build(json) {
    console.log(json);
    let lst = document.getElementById("lst");
    lst.innerHTML = "";

    for (let i = 0; i < json.length; i++) {
        // let div = document.createElement("div");
        let ul = document.createElement("ul");
        let li1 = document.createElement("li");
        let li2 = document.createElement("li");
        let li3 = document.createElement("li");
        let li4 = document.createElement("li");
        let li5 = document.createElement("li");
        let li6 = document.createElement("li");

        ul.id = json[i]._id;

        li1.innerText = "Name";

        let inName = document.createElement("input");
        inName.className = json[i]._id;
        inName.value = json[i].name;
        inName.type = "text";
        inName.disabled = true;

        li2.appendChild(inName);



        li3.innerText = "Albums";
        let albName, songs, albumName, songsName;
        let obj = [];
        //let arrSongs = [];
        //let arrAlbum = [];
        for (let j = 0; j < json[i].albums.length; j++) {
            // console.log(json);
            let div = document.createElement("div");
            albName = document.createElement("input");
            songs = document.createElement("input");
            albName.className = "album";
            albName.value = json[i].albums[j].name;
            //+ ":" + json[i].email[j].mail;
            songs.value = json[i].albums[j].songs;
            albName.type = "text";
            albName.disabled = true;
            songs.type = "text";
            songs.disabled = true;
           // div.appendChild(albName);

            //div.ondblclick = function () {albName.disabled = false;}
            li4.appendChild(albName);
            li5.innerText = "Songs";
            li6.appendChild(songs);
            //arrAlbum.push(albName.value);
            //arrSongs.push(songs.value);
            let arrSongs = [];
            arrSongs.push(songs.value);
            let albums = {
                name: albName.value,
                songs: songs.value
            };

            obj.push(albums);


        }


        li2.onclick = function (){inName.disabled = false;
            inName.onkeyup = function (event) {
                if(event.keyCode === 13) {
                    inName.disabled = true;
                    fetch("/api/band",
                        {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                id: ul.id,
                                name: inName.value,
                                albums: obj,
                            })
                        })
                        .then(doGet)
                        .catch((ex) => {
                            console.log(ex.message);
                            console.log(ex.response);
                        });

                }
            }
        }

        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);
        ul.appendChild(li4);
        ul.appendChild(li5);
        ul.appendChild(li6);
        lst.appendChild(ul);



        /* let inEmail;
         for (let j = 0; j < json[i].email.length; j++) {
             // console.log(json);
             inEmail = document.createElement("input");
             inEmail.className = "email";
             inEmail.value = json[i].email[j].name + ":" + json[i].email[j].mail;
             inEmail.type = "text";
             inEmail.disabled = true;
             li4.appendChild(inEmail);
         }


         li5.innerText = "Phone";
         let inPhone;
         for (let j = 0; j < json[i].phone.length; j++) {
             let inPhone = document.createElement("input");
             inPhone.className = "phone";
             inPhone.value = json[i].phone[j].name + ":" + json[i].phone[j].tel;
             inPhone.type = "tel";
             inPhone.disabled = true;
             li6.appendChild(inPhone);
         }

         let btnEdit = document.createElement("input");
         btnEdit.type = "button";
         btnEdit.value = "edit";
         btnEdit.className = "btn-grad";

         let btnSave = document.createElement("input");
         btnSave.type = "button";
         btnSave.value = "Save";
         btnSave.style.visibility = "hidden";
         btnSave.id = json[i].id;
         btnSave.className = "btn-grad";

         let btnDel = document.createElement("input");
         btnDel.type = "button";
         btnDel.value = "Delete";
         btnDel.id = json[i].id;
         btnDel.className = "btn-grad";


         btnEdit.onclick = function () {
             inName.disabled = false;
             let inpE = li4.getElementsByTagName("input");
             for (let inputEmail of inpE) {
                 inputEmail.disabled = false;
             }

             let inpP = li6.getElementsByTagName("input");
             for (let inPhone of inpP) {
                 inPhone.disabled = false;
             }

             btnSave.style.visibility = "visible";
             btnSave.onclick = function () {
                 let emailValue = [];
                 for (let inputEmail of inpE) {
                     emailValue.push(inputEmail.value);
                     console.log(emailValue);
                 }
                 let phoneValue = [];
                 for (let inPhone of inpP) {
                     phoneValue.push(inPhone.value);
                     console.log(phoneValue);
                 }
                 fetch("/api/phoneBook",
                     {
                         method: 'PUT',
                         headers: {
                             'Content-Type': 'application/json'
                         },
                         body: JSON.stringify({
                             id: btnSave.id,
                             name: inName.value,
                             email: emailValue,
                             phone: phoneValue
                         })
                     })
                     .then(doGet)
                     .catch((ex) => {
                         console.log(ex.message);
                         console.log(ex.response);
                     });
                 inName.disabled = true;
                 for (let inputEmail of inpE) {
                     inputEmail.disabled = true;
                 }
                 for (let inPhone of inpP) {
                     inPhone.disabled = true;
                 }
                 btnSave.style.visibility = "hidden";
             }
         }

         btnDel.onclick = function () {
             fetch("/api/phoneBook",
                 {
                     method: 'DELETE',
                     headers: {
                         'Content-Type': 'application/json'
                     },
                     body: JSON.stringify({
                         id: btnDel.id
                     })
                 })
                 .then(doGet)
                 .catch((ex) => {
                     console.log(ex.message);
                     console.log(ex.response);
                 });

         }


         ul.appendChild(li1);
         ul.appendChild(li2);
         ul.appendChild(li3);
         ul.appendChild(li4);
         ul.appendChild(li5);
         ul.appendChild(li6);

         div.appendChild(ul);

         div.appendChild(btnDel);
         div.appendChild(btnEdit);
         div.appendChild(btnSave);
         lstPhone.appendChild(div);*/


    }

}

}

function doGet() {
    fetch('/api/band')
        .then(response => response.json())
        .then(json => bandView.build(json))
        .catch((ex) => {
            console.log(ex.message);
            console.log(ex.response);
        })
}
doGet();