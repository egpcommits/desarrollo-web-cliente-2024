window.onload = () => {
        let salida = document.querySelector("#container");
        const url = "http://www.jaimeweb.es/medac/ejemplos/consulta.php";

        let formulario = document.forms[0];
        let fd = new FormData(formulario); //devuelve un objeto con los datos que se le han psado por el formulario
        fd.append("Carlos", "el de los ****** largos") //crea una key y una clave, que se añaden a fd
        console.log("Datos del formulario");
        console.log(fd);

        //los datos en disabled no se cogen, los readonly si.
        //fd.delete("imagen") --> por si no queremos que se introduzca algo, eliminamos la key y ya no se guarda

        console.log("------------------------------------------");
        
        
        const cabecera = {
            method: "POST",
            body: fd
        }


        fetch(url)
        .then(function(respuesta, cabecera) {
            //CAPTURO LA DESPUESTA
            if (!respuesta.ok) {
                throw new Error("Error del Fetch: " + respuesta.status);
            }

            
            //DEVUELVO EL FORMATO TEXTO A JSON
            return respuesta.json();



        })
        .then(function(datos) {
            //CAPTURO Y GESTIONO LOS DATOS
            /*for(const juego of datos) {
                let caja = document.createElement("article");
                let titulo = document.createElement("h2");
                titulo.textContent = juego["nombre"];
                let imagen = document.createElement("img");
                imagen.setAttribute("src", juego["imagen"]);
                caja.appendChild(titulo);
                caja.appendChild(imagen);
                salida.appendChild(caja);
            }*/
           console.log(datos);
           
            

        })
        .catch(function(error) {
            alert("Problemas accediendo a la URL " + error);
        });
        
}