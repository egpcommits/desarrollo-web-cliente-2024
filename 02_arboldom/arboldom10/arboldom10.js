window.onload = function () {
    let divs = document.getElementsByTagName("div");
    let estilos;
    let fondo = "";
        
        for (elemento of divs) {
            elemento.onmouseover = function () {
                estilos = window.getComputedStyle(this);
                fondo = estilos.getPropertyValue('background-color');
                document.body.style.backgroundColor = fondo;          
            }
            elemento.onmouseout = function () {
                document.body.style.backgroundColor = "white";
            }
        }
        
}