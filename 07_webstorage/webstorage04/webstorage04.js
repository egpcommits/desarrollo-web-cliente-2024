window.onload = () => {
    let formulario = document.forms[0];

    let tmp_usuario = formulario["usuario"];
    let tmp_contrasena = formulario["contrasena"];
    let enviar = formulario["enviar"];
    let borrar = formulario["borrar"];

    enviar.addEventListener("click", function (ev) {
        ev.preventDefault();
        let usuario, contrasena;

        let expresionUsuario = /^[a-z][a-z0-9]{7,}/g;
        if (expresionUsuario.test(tmp_usuario.value)) {            
            quitarErrores(tmp_usuario);
            usuario = tmp_usuario.value;
        } else {
            mostrarErrores(tmp_usuario);
        }

        //let expresionContrasena = / /;
        /*if (contrasena != "") {

        }*/

        if (tmp_contrasena.value != "" && tmp_contrasena.value.length > 8) {
            quitarErrores(tmp_contrasena);
            contrasena = tmp_contrasena.value;
        } else {
            mostrarErrores(tmp_contrasena);
        }
        
        if (usuario && contrasena) {
            let user = {
                iuser : usuario,
                pass : contrasena
            }

            localStorage.setItem("persona", JSON.stringify(user));
        }
    }, false);

    borrar.addEventListener("click", function () {
        quitarErrores(tmp_usuario);
        quitarErrores(tmp_contrasena);
        localStorage.clear();
    }, false);

    function mostrarErrores (elemento) {
        elemento.setAttribute("style", "border: 2px solid red");
    }

    function quitarErrores (elemento) {
        elemento.setAttribute("style", "");
    }
}