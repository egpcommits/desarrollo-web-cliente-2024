window.onload = () => {
    let formulario = document.forms[0];
    let boton = formulario.elements["boton"];
    let contenido = formulario.elements["content"];

    for (let i = 0; i < formulario.length; i++) {
        boton.onclick = () => {
            console.log("hola");
            let checkbox = document.querySelectorAll("input [type='checkbox']")[i];
            if (checkbox.selected) {
                console.log("funciona" + i);
            }
        }
    }
    
}