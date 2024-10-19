window.onload = function () {
    let imagen = document.getElementsByTagName("img")[0];

    imagen.onmouseover = function () {
        imagen.setAttribute("src", "imagenes/fma2.jpg");
    }

    imagen.onmouseout = function () {
        imagen.setAttribute("src", "imagenes/fma1.jpg");
    }
}