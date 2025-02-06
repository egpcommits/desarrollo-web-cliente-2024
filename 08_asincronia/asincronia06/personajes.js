document.addEventListener("DOMContentLoaded", () => {
    const url = "https://dragonball-api.com/api/characters";
    let padre = document.querySelector("section");

    let titulo = document.createElement("h1");
    titulo.setAttribute("class", "mb-5")
    titulo.appendChild(document.createTextNode("Personajes de Dragon Ball"));
    padre.appendChild(titulo);

    fetch(url)
    //Capturo la respuesta
    .then((respuesta) => {
        if (!respuesta.ok) {
            throw new Error (`Error del fetch ${respuesta.status}`);
        }

        //Devuelvo el formato objeto a json
        return respuesta.json();
    })
    //Capturo y gestiono los datos
    .then((datos) => {
        for(let dato of datos["items"]) {
            sacarPersonajes(dato);
        }

        
        let longitud = document.getElementsByTagName("article").length;

        //con un while no valdria, ya que la i tiene ambito global, y hace cosas raras XDDD
        //el for (normal) va tremendo
        for(let i = 0; i < longitud; i++) {
            let articulo = document.getElementsByTagName("article")[i];
            articulo.addEventListener("click", function () {
                //me sirve con subir al local storage el i+1, que es lo que vale el id
                //despues lo recojo y saco la informacion del id corespondiente.
                localStorage.setItem("id", i + 1);
                window.location.href = "datos.html";
            });
        }
    })
    .catch((error) => {
        alert("Problemas accediendo a la URL " + error);
    })
    





    function sacarPersonajes (dato) {        
        let article = document.createElement("article");
        article.setAttribute("class", "col-2 ms-4 mt-3 mb-3");

        let nombre = document.createElement("h3");
        nombre.appendChild(document.createTextNode(dato["name"]));

        let imagen = document.createElement("img");
        imagen.setAttribute("src", dato["image"]);
        imagen.setAttribute("class", "personajes");

        let raza = document.createElement("p");
        raza.appendChild(document.createTextNode(`Raza: ${dato["race"]}`));

        let maximoKi = document.createElement("p");
        maximoKi.appendChild(document.createTextNode(`Máximo Ki: ${dato["maxKi"]}`));
        
        article.appendChild(nombre);
        article.appendChild(imagen);
        article.appendChild(raza);
        article.appendChild(maximoKi);

        padre.appendChild(article);
    }


});