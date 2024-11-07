window.onload = () => {
    let div1 = document.getElementsByTagName("div")[0];
    let div2 = document.getElementsByTagName("div")[1];
    let div3 = document.getElementsByTagName("div")[2];
    let div4 = document.getElementsByTagName("div")[3];
    //EL cuarto div para ver el cambio, aunque no se pida.

    div1.setAttribute("style", "background-color: palevioletred");
    div2.setAttribute("style", "background-color: palegreen; visibility: hidden");
    div3.setAttribute("style", "background-color: paleturquoise; display: none");
    div4.setAttribute("style", "background-color: palegoldenrod");

    //El visibility deja el espacio en el html aunque este oculto.
    //El display block/none si que te lo quita

    //APARTADO A - 
    div1.onmouseover = () => {
        div2.setAttribute("style", "background-color: palegreen; visibility: visible");
        div3.setAttribute("style", "background-color: paleturquoise; display: block");
    }
}