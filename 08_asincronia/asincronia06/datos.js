 document.addEventListener("DOMContentLoaded", () => {
    let id = localStorage.getItem("id");
    let padre = document.getElementsByTagName("section")[0];

    const url = "https://dragonball-api.com/api/characters/" + id;

    fetch(url)
    .then((respuesta) => {
        if (!respuesta.ok) {
            throw new Error("Error del fetch: " + respuesta.status);
        }

        return respuesta.json();
    })
    .then((datos) => {
        for(let dato in datos) {
            if (dato == "name") {
                sacarDatos(datos[dato], "h1");
            } else if (dato == "description") {
                sacarDatos(datos[dato], "p")
            } else if (dato == "image") {
                sacarDatos(datos[dato], "img");
            }
            
        }
    })
    .catch((error) => {
        alert("Problemas accediendo a la URL " + error);
    })

//el nombnre del personaje en grande
//justo debajo su descripcion, y al lado de esta la imagen

    function sacarDatos (dato, elemento) {
        let padre = document.getElementsByTagName("section")[0];
        let infoPrincipal = document.getElementById("info-principal");
        

        switch (elemento) {
            case "h1":
                let nombre = document.createElement("h1");
                nombre.appendChild(document.createTextNode(dato));
                padre.insertBefore(nombre, infoPrincipal)
                break;        
            case "p":
                let descripcion = document.createElement("p");
                descripcion.appendChild(document.createTextNode(dato));
                infoPrincipal.appendChild(descripcion);
                break;
            case "img":
                let imagen = document.createElement("img");
                imagen.setAttribute("src", dato);
                infoPrincipal.appendChild(imagen);
        }
    }
});