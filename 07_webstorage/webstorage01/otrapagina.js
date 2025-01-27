window.onload = () => {
    imprimir("Nombre: ", "nombre");
    imprimir("Clave: ", "clave");

    let borra = document.getElementsByName("borra")[0];

    borra.addEventListener("click", function () {
        localStorage.removeItem("nombre");
        localStorage.removeItem("clave");
    }, false);

    function imprimir (mensaje, key) {
        let padre = document.querySelector("body");
        let parrafo = document.createElement("p");
        parrafo.appendChild(document.createTextNode(mensaje + localStorage.getItem(key)));
        padre.appendChild(parrafo);
    }
}