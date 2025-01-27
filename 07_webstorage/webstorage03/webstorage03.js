window.onload = () => {
    let formulario = document.forms[0];
    let nombre = formulario["nombre"];
    let apellidos = formulario["apellidos"];
    let edad = formulario["edad"];
    let email = formulario["email"];

    let enviar = formulario["enviar"];
    enviar.addEventListener("click", function (ev) {
        ev.preventDefault();
        if (nombre && apellidos && edad && email) {
            let json = {
                neim : nombre.value,
                lastneim : apellidos.value,
                age : edad.value,
                imeil : email.value
            }

            localStorage.setItem("json", JSON.stringify(json)); //va a meter en la clave "json" el objeto que se hapasado a cadena 
        }
    }, false);
}