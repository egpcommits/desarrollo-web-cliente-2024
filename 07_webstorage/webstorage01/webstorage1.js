window.onload = () => {
    let formulario = document.forms[0];
    let nombre = formulario["nombre"];
    let clave = formulario["clave"];
    let enviar = formulario["boton"];

    enviar.addEventListener("click", function (ev) {
        ev.preventDefault();
        if (nombre && clave) {
            localStorage.setItem("nombre", nombre.value);
            localStorage.setItem("clave", clave.value);
            formulario.submit();
        } 
    }, false);
}