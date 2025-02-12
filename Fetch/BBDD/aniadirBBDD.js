document.querySelector("button").addEventListener("click", function () {
    let salida = document.querySelector("#salida");
    const url = "http://www.jaimeweb.es/medac/ejemplos/addJuego.php";

    let formu = document.querySelector("form");
    let fd = new FormData(formu);
    //fd.append("carlos","el de los ***** largos")
    console.log("Datos del formulario: ");
    console.log(fd);
    console.log("---------------------------------------");
    
    const cabecera = {
        method: "POST",
        body: fd
    }
    
  
    fetch(url, cabecera)
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
        console.log(datos);
        
       
      })
      .catch(function (error) {
        alert("Problemas accediendo a la URL: " + error);
      });
  });
  