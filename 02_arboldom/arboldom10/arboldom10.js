window.onload = function () {
    let listaDivs = document.getElementsByTagName("div");
    let divs = document.getElementsByTagName("div");
    let estilos;
    let fondo = "";
        
        for (elemento of divs) {
            elemento.onmouseover = function () {

                //Obtengo el estilo de cada elemento
                let estilos = window.getComputedStyle(this);
                let fondo = estilos.getPropertyValue('background-color');
                document.body.style.setProperty("background-color", fondo);
                //document.body.style.backgroundColor = fondo;          
            }
            elemento.onmouseout = function () {
                document.body.style.setProperty("background-color", "white");
                //document.body.style.backgroundColor = "white";
            }
        }
    
    /*Esto solo funciona si el atributo style se encuentra dentro de la propia etiqueta html
    for(let divito of listaDivs) {
        //Para cada div le pongo su manejador de evento
        divito.onmouseover = function () {
            document.body.style.backgroundColor = this.style.backgroundColor;
        }
        divito.onmouseout = function () {
            document.body.style.backgroundColor = "white";
        }
    }*/
}