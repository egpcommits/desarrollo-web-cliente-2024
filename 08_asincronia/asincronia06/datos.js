document.addEventListener("DOMContentLoaded", () => {
    let id = localStorage.getItem("id");
    let padre = document.getElementsByTagName("section")[0];

    let contador = 0;

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
        let element = document.createElement(elemento);
        let fila = document.createElement("div");
        let col1 = document.createElement("div");
        col1.setAttribute("class", "col");
        let col2 = document.createElement("div");
        col2.setAttribute("class", "col");

        if (elemento == "h1") {
            element.appendChild(document.createTextNode(dato));
            padre.appendChild(element);
        } else if (elemento == "p") {
            element.appendChild(document.createTextNode(dato));
            col1.appendChild(element);
            contador++;
        } else {
            element.setAttribute("src", dato);
            col2.appendChild(element);
            contador++;
        }


        if (contador == 2) {
            fila.setAttribute("class", "row");
            fila.appendChild(col1);
            fila.appendChild(col2);
            padre.appendChild(fila);
        } 

        
        
        
    }
});