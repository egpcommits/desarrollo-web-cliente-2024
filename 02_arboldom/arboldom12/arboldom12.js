window.onload = function () {
    let div = document.getElementsByTagName("div")[0];
    let imagenreal = document.getElementsByTagName("img")[0];
    let i = 1;

    let botonDerecho = document.getElementsByTagName("input")[1];
    botonDerecho.onclick = function () {
        if ((5 * i) <= (screen.width - div.offsetWidth)) { //resto el tamaño de la pantalla y el tamaño del div
            imagenreal.setAttribute("src", "imagenes/zenitsudcha.jpg");
            div.style.left = (5 * i) + "px";
            i++;
        }
    }
    
    let botonIzquierdo = document.getElementsByTagName("input")[0];
    botonIzquierdo.onfocus = function () {
        if (i > 0) {
            imagenreal.src = "imagenes/zenitsuizq.jpg";
            div.style.left = (parseInt(div.style.left) - 5) + "px";
            i--;
        }
    }
}