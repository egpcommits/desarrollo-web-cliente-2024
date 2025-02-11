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

            let longitud = document.getElementsByTagName("li").length;

            for(let i = 0; i < longitud; i++) {
                let lis = document.getElementsByTagName("li")[i];
                let sectionImagen = document.getElementsByTagName("section")[1];
                let imagen = document.createElement("img");
                lis.addEventListener("mouseover", () => {
                    let separado = lis.innerText.split(" - (");
                    for(productos of datos) {
                        if (productos["title"] == separado[0]) {     
                            console.log(separado[0]);
                            console.log(productos["title"]);
                            
                                                   
                            imagen.setAttribute("src", productos["image"]);
                            sectionImagen.appendChild(imagen);
                            
                        }
                    } 
                });
                lis.addEventListener("mouseout", () => {
                    imagen.setAttribute("src", "");
                    sectionImagen.appendChild(imagen);
                });
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