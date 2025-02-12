document.addEventListener("DOMContentLoaded", function () {
    const url = "http://www.jaimeweb.es/medac/ejemplos/consulta.php";
    
  
    fetch(url)
      .then(function (respuesta) {
        //Capturo la respuesta
        //console.log(respuesta);
  
        if (!respuesta.ok) {
          throw new Error("Error del Fetch: " + respuesta.status);
        }
  
        //DEvuelvo el formato texto o json
        return respuesta.json();
      })
      .then(function (datos) {
        //Capturo y gestiono los datos

        let padre = document.getElementsByTagName("div")[0];

        //id, nombre, imagen
        for(let dato of datos) {
            let david = document.createElement("div");
            let parrafo = document.createElement("p");
            let imagen = document.createElement("img");
            let descripcion = document.createElement("p");

            parrafo.innerText = dato["nombre"];
            
            imagen.setAttribute("style", "width: 200px; height: 200px;")
            imagen.setAttribute("src", dato["imagen"]);

            descripcion.innerText = dato["descripcion"];

            david.appendChild(parrafo);
            david.appendChild(imagen);
            david.appendChild(descripcion)
            
            padre.appendChild(david);
        }

        
        
        
       
      })
      .catch(function (error) {
        alert("Problemas accediendo a la URL: " + error);
      });
  });
  