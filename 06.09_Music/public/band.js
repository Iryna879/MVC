let bandView = {

    sendForm(url) {
        //if(url == null) {
           // url = "/api/music";
        //}
        if(this.form == null) {
            console.log("No open form");
            return;
        }
       console.log("Start send form");

        let inBand = {
            name: document.getElementById("bandName").value,
            albums: []
        }
        for(let i = 0; i < this.form.elements.length; i++){
            if(this.form.elements[i].name == "AlbumName"){
                let album = {
                    name: this.form.elements[i].value,
                    songs: []
                }

                inBand.albums.push(album);
            }

            if(this.form.elements[i].name == "song") {
                inBand.albums[inBand.albums.length-1].songs.push(this.form.elements[i].value);
            }
        }

        console.log(inBand);
        fetch("/api/band",
            {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(inBand)
            })
            .then(response => console.log(response))
            .catch((ex) => {
                console.log(ex.message);
            })
    },
    
    renderForm(rootElement){
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
    }
}