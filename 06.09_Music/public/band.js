let bandView = {
    
    renderForm(rootElement){
        let form = document.createElement("form");
        let inName = document.createElement("input");
        inName.id = "bandName";
        form.appendChild(inName);
        
        let ul = document.createElement("ul");
        ul.id = "bandAlbums";
        form.appendChild(ul);
        
        let btnAddAlbum = document.createElement("button");
        btnAddAlbum.type = "button";
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
            btnAddSong.onclick = function () {
                // TODO дописать добавление песни
            }

            li.appendChild(btnAddSong);
            ulAlbums.appendChild(li);
        }
    }
}