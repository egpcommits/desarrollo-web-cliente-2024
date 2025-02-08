 document.addEventListener("DOMContentLoaded", () => {
    let id = localStorage.getItem("id");

    let padre = document.getElementsByTagName("section")[0];

    let planeta = document.getElementById("planeta");
    let tituloPlaneta = document.createElement("h2");
    tituloPlaneta.appendChild(document.createTextNode("Planeta de origen"));
    padre.insertBefore(tituloPlaneta, planeta);

    let transformaciones = document.getElementById("transformaciones");
    let tituloTransformaciones = document.createElement("h2");
    tituloTransformaciones.appendChild(document.createTextNode("Transformaciones"));
    padre.insertBefore(tituloTransformaciones, transformaciones);

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
            } else if (dato == "originPlanet") {
                sacarPlaneta(datos[dato]);
            } else if (dato == "transformations") {
                for(transformaciones of datos[dato]) {
                    sacarTransformaciones(transformaciones);
                }
            }
        }
    })
    .catch((error) => {
        alert("Problemas accediendo a la URL " + error);
    })


    let boton = document.getElementsByTagName("input")[0];
    boton.addEventListener("click", () => {
        history.back();
    });
    


    function sacarDatos (dato, elemento) {        
        let infoPrincipal = document.getElementById("info-principal");
        
        switch (elemento) {
            case "h1":
                let nombre = document.createElement("h1");
                nombre.appendChild(document.createTextNode(dato));
                document.body.insertBefore(nombre, padre);
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


    function sacarPlaneta (dato) {
        let planeta = document.getElementById("planeta");

        let nombre = document.createElement("h3");
        nombre.appendChild(document.createTextNode(dato["name"]));

        let description = document.createElement("p");
        description.appendChild(document.createTextNode(dato["description"]));

        let imagen = document.createElement("img");
        imagen.setAttribute("src", dato["image"]);
        
        planeta.appendChild(nombre);
        planeta.appendChild(description);
        planeta.appendChild(imagen);
    }


    function sacarTransformaciones (dato) {
        let transformaciones = document.getElementById("transformaciones");
        let article = document.createElement("article");

        let nombre = document.createElement("h3");
        nombre.appendChild(document.createTextNode(dato["name"]));

        let imagen = document.createElement("img");
        imagen.setAttribute("src", dato["image"]);

        let ki = document.createElement("p");
        ki.appendChild(document.createTextNode(`Ki: ${dato["ki"]}`));
        
        article.appendChild(nombre);
        article.appendChild(imagen);
        article.appendChild(ki);

        transformaciones.appendChild(article);
    }
});