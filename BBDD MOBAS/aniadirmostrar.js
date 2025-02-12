document.addEventListener("DOMContentLoaded", () => {
    let salida = document.getElementById("salida");
    let url = "";

    let mostrar = document.getElementsByTagName("button")[0];
    let aniadir = document.getElementsByTagName("button")[1];

    //para mostrar todos los datos del servidor
    mostrar.addEventListener("click", () => {
        url = "http://www.jaimeweb.es/medac/ejemplos/consulta.php";

        fetch(url)
        .then((respuesta) => {
            //Se captura la respuesta
            if (!respuesta.ok) {
                throw new Error("Error del Fetch: " + respuesta.status);
            }

            return respuesta.json();
        })
        .then((datos) => {
            //Se capturan y gestionan los datos
            
            for(let dato of datos) {
                let div = document.createElement("div");

                let nombre = document.createElement("h3");
                nombre.appendChild(document.createTextNode(dato["nombre"]));

                let imagen = document.createElement("img");
                imagen.setAttribute("src", dato["imagen"]);
                imagen.setAttribute("style", "width: 200px; height: 200px;");

                let descripcion = document.createElement("p");
                descripcion.appendChild(document.createTextNode(dato["descripcion"]));

                div.appendChild(nombre);
                div.appendChild(imagen);
                div.appendChild(descripcion);

                salida.appendChild(div);
            }            
        })
        .catch((error) => {
            alert("Problemas accediendo a la URL " + error);
        })

    });



    //para añadir un nuevo objeto al servidor
    aniadir.addEventListener("click", () => {
        url = "http://www.jaimeweb.es/medac/ejemplos/addJuego.php";

        let formulario = document.forms[0];
        let fd = new FormData(formulario);

        const cabecera = {
            //metodo que se va a usar
            method: "POST", 
            //se envian los datos del formulario en el body
            body: fd
        }


        fetch(url, cabecera)
        .then((respuesta) => {
            //Se captura la respuesta
            if (!respuesta.ok) {
                throw new Error("Error del Fetch: " + respuesta.status);
            }

            return respuesta.json();
        })
        .then(() => {
            //Se capturan y gestionan los datos
            let mensaje = document.createElement("h3");
            mensaje.appendChild(document.createTextNode("Se ha añadido el juego"));
            salida.appendChild(mensaje);
        })
        .catch((error) => {
            alert("Problemas accediendo a la URL " + error);
        })

    });

    
});