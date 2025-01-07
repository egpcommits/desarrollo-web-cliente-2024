window.onload = () => {
    let formulario = document.forms[0];
    let longitud = document.querySelectorAll("input[type='checkbox']").length;
    let select = formulario["desplegable"];
    let i = 0;

    while (i < longitud) {   
        //Se selecciona el checkbox correspondiente usando un bucle (WHILE TE AMO)
        let checkbox = document.querySelectorAll("input[type='checkbox']")[i];
        //Cuando encuentra el checkbox por el que va, realiza el evento en ese
        checkbox.addEventListener("click", () => {
            if (checkbox.checked) {
                let option  = document.createElement("option");
                option.setAttribute("id", checkbox.value);
                let contenido = document.createTextNode(checkbox.value);
                option.appendChild(contenido);
                select.appendChild(option);
            } else {
                let elemento = document.getElementById(checkbox.value);
                let padre = elemento.parentNode;
                padre.removeChild(elemento);
            }
        }, false);        
        i++;
    }
}