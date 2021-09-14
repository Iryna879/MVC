let bandView;
bandView = {

    sendForm(url) {

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
            .then(bandView.doGet)
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
        inName.placeholder = "Name band";
        this.form.appendChild(inName);

        let ul = document.createElement("ul");
        ul.id = "bandAlbums";
        this.form.appendChild(ul);

        let btnAddAlbum = document.createElement("button");
        btnAddAlbum.type = "button";
        btnAddAlbum.innerText = "Add Album";
        btnAddAlbum.className = "btn-grad";
        btnAddAlbum.style.marginLeft = "0";
        btnAddAlbum.onclick = function () {
            let ulAlbums = document.getElementById("bandAlbums");
            let li = document.createElement("li");
            let inAlbumName = document.createElement("input");
            inAlbumName.name = "AlbumName";
            inAlbumName.placeholder = "Album title";
            li.appendChild(inAlbumName);

            let ulSongs = document.createElement("ul");
            li.appendChild(ulSongs);

            let btnAddSong = document.createElement("button");
            btnAddSong.type = "button";
            btnAddSong.innerText = "Song";
            btnAddSong.className = "btn-grad";
            btnAddSong.style.marginLeft = "0";
            btnAddSong.onclick = function () {
                let ulSongs = this.previousSibling;
                let li = document.createElement("li");
                let inSongName = document.createElement("input");
                inSongName.name = "song";
                inSongName.placeholder = "Song`s title";
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
        btnBandSave.className = "btn-grad"
        btnBandSave.style.marginLeft = "0";
        btnBandSave.onclick = this.sendForm;
        this.form.appendChild(btnBandSave);

        rootElement.appendChild(this.form);
    },


    build(json) {
        console.log(json);
        let lst = document.getElementById("lst");
        lst.innerHTML = "";

        for (let i = 0; i < json.length; i++) {
            let ul = document.createElement("ul");
            let li1 = document.createElement("li");
            let li2 = document.createElement("li");
            let li3 = document.createElement("li");
            let li4 = document.createElement("li");
            let li5 = document.createElement("li");
            let li6 = document.createElement("li");
            let section = document.createElement("section");

            ul.id = json[i]._id;

            li1.innerText = "Name";

            let inName = document.createElement("input");
            inName.className = json[i]._id;
            inName.value = json[i].name;
            inName.type = "text";
            inName.disabled = true;

            li2.appendChild(inName);


            li3.innerText = "Albums";
            let albName, songsName;

            for (let j = 0; j < json[i].albums.length; j++) {
                // console.log(json);
                albName = document.createElement("input");
                songsName = document.createElement("input");
                albName.className = "album";
                albName.value = json[i].albums[j].name;
                albName.type = "text";
                albName.disabled = true;

                songsName.value = json[i].albums[j].songs;
                songsName.className = "songs";
                songsName.type = "text";
                songsName.disabled = true;

                li4.appendChild(albName);
                li5.innerText = "Songs";
                li6.appendChild(songsName);
            }

            let inpAlbum;
            li2.onclick = function () {
                inName.disabled = false;
                inpAlbum = li4.getElementsByTagName("input");
                for (let inp of inpAlbum) {
                    inp.disabled = false;
                }
                let inpSongs = li6.getElementsByTagName("input");
                for (let inp of inpSongs) {
                    inp.disabled = false;
                }

                function enter(event) {
                    if (event.keyCode === 13) {
                        inName.disabled = true;

                        let arrSongs = [];

                        for (let inp of inpSongs) {
                            arrSongs = inp.value.split(",");
                            console.log(arrSongs);
                        }
                        let albums = {
                            name: albName.value,
                            songs: arrSongs
                        }

                        fetch("/api/band",
                            {
                                method: 'PUT',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    id: ul.id,
                                    name: inName.value,
                                    albums: albums,
                                })
                            })
                            .then(bandView.doGet)
                            .catch((ex) => {
                                console.log(ex.message);
                                console.log(ex.response);
                            });

                    }
                }

                inName.onkeyup = function (event) {
                    enter(event);
                };
                albName.onkeyup = function (event) {
                    enter(event);
                };

                songsName.onkeyup = function (event) {
                    enter(event);
                };


            }

            let btnDel = document.createElement("input");
            btnDel.type = "button";
            btnDel.value = "Delete";
            btnDel.id = json[i]._id;
            btnDel.className = "btn-grad";


            btnDel.onclick = function () {
                fetch("/api/band",
                    {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            id: btnDel.id
                        })
                    })
                    .then(bandView.doGet)
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
            section.appendChild(ul);
            section.appendChild(btnDel);
            lst.appendChild(section);
        }

    },
    doGet() {
        fetch('/api/band')
            .then(response => response.json())
            .then(json => bandView.build(json))
            .catch((ex) => {
                console.log(ex.message);
                console.log(ex.response);
            })
    }

}

