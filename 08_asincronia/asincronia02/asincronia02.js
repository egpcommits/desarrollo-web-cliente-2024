document.addEventListener("DOMContentLoaded", () => {
    let generar = document.getElementsByTagName("input")[0];
    let imagen = document.getElementsByTagName("img")[0];

    generar.addEventListener("click", () => {        
        const url = "https://dog.ceo/api/breeds/image/random";

        fetch(url)
        //CAPTURO LA RESPUESTA
        .then(function (respuesta) {
            if (!respuesta.ok) {
                throw new Error (`Error del fetch ${respuesta.status}`);
            }

            return respuesta.json();
        })
        //CAPTURO Y GESTIONO LOS DATOS
        .then(function (datos) {
            imagen.setAttribute("src", datos.message);
            
        })
        .catch(function (error) {
            alert(`Problemas accediendo a la URL ${error}`);
        })
    });
    
});