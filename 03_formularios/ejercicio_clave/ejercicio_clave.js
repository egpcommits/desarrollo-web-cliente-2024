window.onload = () => {
    let formulario = document.forms[0];
    let clave = formulario["clave"];
    let checkbox = formulario["cuadrado"];
    let ojito = document.getElementsByTagName("img")[0];

    checkbox.addEventListener("click", () => {        
        if (checkbox.checked) {
            clave.setAttribute("type", "text");
        } else {
            clave.setAttribute("type", "password");
        }
    }, false);

    ojito.addEventListener("mousedown", () => {
        clave.setAttribute("type", "text");
        ojito.setAttribute("src", "imagenes/ojo-cerrado.png");
    }, false);

    ojito.addEventListener("mouseup", () => {
        clave.setAttribute("type", "password");
        ojito.setAttribute("src", "imagenes/ojo-abierto.png");
    }, false);
}