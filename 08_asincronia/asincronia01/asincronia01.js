document.addEventListener ("DOMContentLoaded", () => {
    let boton = document.getElementsByTagName("input")[0];

    boton.addEventListener("click", () => {
        const url = "https://jsonplaceholder.typicode.com/comments";
        
        fetch(url)
        .then(function(respuesta) {
            //CAPTURO LA RESPUESTA
            if (!respuesta.ok) {
                throw new Error("Error del Fetch: " + respuesta.status);
            }

            return respuesta.json()
        })
        .then(function (datos) {
            //CAPTURO Y GESETIONO LOS DATOS
            for(let dato of datos) {
                sacarMensajes(dato.body);                
            }
        })
        .catch(function (error) {
            alert("Problemas accediendo a la URL " + error);
        });
    });

    function sacarMensajes (resultados) {
        let padre = document.getElementById("salida");
        let parrafo = document.createElement("p");
        let texto = document.createTextNode(resultados);
        parrafo.appendChild(texto);
        padre.appendChild(parrafo);
    }

});