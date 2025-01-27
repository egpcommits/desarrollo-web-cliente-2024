window.onload = () => {
    let recuperar = document.getElementsByName("recuperar")[0];
    let borrar = document.getElementsByName("borrar")[0];

    recuperar.addEventListener("click", function () {
        let valores = localStorage.getItem("json"); //recibe una cadena
        let datos = JSON.parse(valores); //se pasa la cadena de antes a objeto

        for(let dato in datos) { //el objeto se recorre con for in
            imprimir(datos, dato);       
        }
    }, false);

    borrar.addEventListener("click", function () {
        localStorage.clear();
    }, false);


    function imprimir (datos, dato) {
        let padre = document.querySelector("body");
        let parrafo = document.createElement("section");
        parrafo.appendChild(document.createTextNode(`${dato} ➭ ${datos[dato]}`));
        padre.appendChild(parrafo);
    }
}