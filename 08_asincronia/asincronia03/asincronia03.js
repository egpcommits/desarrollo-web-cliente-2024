document.addEventListener("DOMContentLoaded", () => {
    let boton = document.getElementsByTagName("input")[0];

    let section = document.getElementsByTagName("section")[0];

    let lista = document.createElement("ul");
    
    boton.addEventListener("click", () => {
        boton.disabled = true;

        

        const url = "https://fakestoreapi.com/products";

        fetch(url)
        .then((respuesta) => {
            if (!respuesta.ok) {
                throw new Error("Error del fetch: " + respuesta.status);
            }

            return respuesta.json();
        })
        .then((datos) => {
            
            for(productos of datos) {
                crearLista(productos["title"], productos["price"]);
            }
            
        })
        .catch((error) => {
            alert("Problemas accediendo a la URL " + error);
        });


    });


    function crearLista (nombre, precio) {
        
        let item = document.createElement("li");
        item.innerHTML = `${nombre} - (${precio}$)`;

        lista.appendChild(item);

        section.appendChild(lista);

    }

    function efectoHover () {
        
    }

    
});