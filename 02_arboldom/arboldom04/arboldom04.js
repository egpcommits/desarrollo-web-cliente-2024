window.onload = function () {
    let imagen = document.getElementsByTagName("img")[0];
    let i = 0;

    let retroceder = document.getElementsByTagName("input")[0];
    retroceder.onclick = function () {
        i--;

        if (i < 0) i = 0;
    
        if (i == 0) imagen.setAttribute("src", "imagenes/byakuya.jpg");
        else if (i == 1) imagen.setAttribute("src", "imagenes/gintoki.jpg");
        else if (i == 2) imagen.setAttribute("src", "imagenes/giorno.jpg");
        else if (i == 3) imagen.setAttribute("src", "imagenes/gojo.jpg");
        else if (i == 4) imagen.setAttribute("src", "imagenes/kakashi.jpg");
        else if (i == 5) imagen.setAttribute("src", "imagenes/rengoku.jpg");
        else if (i == 6) imagen.setAttribute("src", "imagenes/roy.jpg");
        else if (i == 7) imagen.setAttribute("src", "imagenes/zoro.jpg");
    }


    let avanzar = document.getElementsByTagName("input")[1];
    avanzar.onclick = function () {
        i++;

        if (i > 7) i = 7;

        if (i == 0) imagen.setAttribute("src", "imagenes/byakuya.jpg");
        else if (i == 1) imagen.setAttribute("src", "imagenes/gintoki.jpg");
        else if (i == 2) imagen.setAttribute("src", "imagenes/giorno.jpg");
        else if (i == 3) imagen.setAttribute("src", "imagenes/gojo.jpg");
        else if (i == 4) imagen.setAttribute("src", "imagenes/kakashi.jpg");
        else if (i == 5) imagen.setAttribute("src", "imagenes/rengoku.jpg");
        else if (i == 6) imagen.setAttribute("src", "imagenes/roy.jpg");
        else if (i == 7) imagen.setAttribute("src", "imagenes/zoro.jpg");
    }
}