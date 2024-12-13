window.onload = () => {
    let formulario = document.forms[0];
    let boton = formulario.elements["boton"];
    let contenido = formulario.elements["content"];
    let longitud = document.querySelectorAll("input[type='checkbox']").length;
    let checkbox = document.querySelectorAll("input[type='checkbox']");

    boton.addEventListener("click", function (ev) {
        ev.preventDefault();
        for (let i = 0; i < longitud; i++) {
            if (checkbox[i].checked) {
                contenido.value += checkbox[i].value + " ";
            }
        }
    }, false);
}