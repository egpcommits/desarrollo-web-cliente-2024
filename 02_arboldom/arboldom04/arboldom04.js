let i = 0;

function retroceder () {
    i--;
    
    let imagen = document.getElementsByTagName("img")[0];

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

function avanzar () {
    i++;

    let imagen = document.getElementsByTagName("img")[0];

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

