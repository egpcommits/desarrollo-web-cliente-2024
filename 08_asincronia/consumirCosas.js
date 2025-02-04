window.onload = () => {
    document.getElementsByTagName("input")[0].addEventListener("click", () => {
        let salida = document.querySelector("#salida");
        //const url = "textito.txt";
        //const url = "https://jsonplaceholder.typicode.com/posts";
        //const url = "https://api.thecatapi.com/v1/images/search?limit=50&api_key=LAKEYQUENOSDAN";
        //const urlconcabecera = "https://rapidapi.com/omgvamp/api/hearthstone/playground/5525c47de4b0b69ffe83f7bd"; //si tiene cabecera, habra que pasarla junto con la url por la cabcera
        const url = "https://dog.ceo/api/breeds/image/random";


        fetch(url)
        .then(function(respuesta) {
            //CAPTURO LA DESPUESTA
            console.log(respuesta);
            //propiedades ok y status son las que nos importan, a parte del texto

            //si ok es falso, significa que ha habido error
            if (!respuesta.ok) {
                //si por ejemplo el archivo no estuviese donde se ha indicado, saltaria el error
                throw new Error("Error del Fetch: " + respuesta.status);
            }

            //respuesta.json()
            //DEVUELVO EL FORMATO TEXTO A JSON
            //salida.textContent = respuesta.text(); //esto es un objeto promesa
            //return respuesta.text(); //para el textito
            return respuesta.json();



        })
        .then(function(datos) {
            //CAPTURO Y GESTIONO LOS DATOS
            //salida.textContent = datos; //para textito

            /*let res = "";
            for(const luis of datos) {
                res += `<h2>${luis.title}</h2`;
                res += `<p>${luis.body}</p>`;
            }*/

                let res = `<img width='500px src='${datos.message}' />`
            salida.innerHTML = res;
        })
        .catch(function(error) {
            alert("Problemas accediendo a la URL " + error);
        });
        
    });
}