window.onload = function () {
    let imagen = document.getElementsByTagName("div")[0];

    let botonDerecho = document.getElementsByTagName("input")[1];
    botonDerecho.onclick = function () {
        let paddingDcha = 
        imagen.style.paddingLeft += "5px";
    }

    let botonIzquierdo = document.getElementsByTagName("input")[0];
    botonIzquierdo.onclick = function () {
        let estilos = window.getComputedStyle(imagen);
        let paddingIzq = estilos.paddingLeft.get
        imagen.style.paddingRight -= "5px";
    }
}