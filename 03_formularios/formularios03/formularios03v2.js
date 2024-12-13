window.onload = () => {
    let formulario = document.forms[0];
    let contenido = formulario.elements["content"];
    let longitud = document.querySelectorAll("input[type='checkbox']").length;
    let i = 0;

    while (i < longitud) {   
        //Se selecciona el checkbox correspondiente usando un bucle (WHILE TE AMO)
        let checkbox = document.querySelectorAll("input[type='checkbox']")[i];
        //Cuando encuentra el checkbox por el que va, realiza el evento en ese
        checkbox.addEventListener("click", () => {
            if (checkbox.checked) {
                contenido.value += checkbox.value + " ";
                i = longitud;
            }            
        }, false);
        i++;
    }
}