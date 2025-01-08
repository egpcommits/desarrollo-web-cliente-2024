window.onload = () => {
    let formulario = document.forms[0];
    let resetear = formulario["resetear"];
    let enviar = formulario["enviar"];

    

    resetear.addEventListener("click", (ev) => {
        /*tmpDni.value = "";
        tmpNombre.value = "";
        tmpApellidos.value = "";
        tmpFecha.value = "";
        tmpWeb.value = "";
        tmpContrasena.value = "";*/

        formulario.reset(); //resetea el formulario

    }, false);

    enviar.addEventListener("click", (ev) => {
        ev.preventDefault();        
        let tmpDni = formulario["dni"];
        let tmpNombre = formulario["nombre"];
        let tmpApellidos = formulario["apellidos"];
        let tmpFecha = formulario["fechaNacimiento"];
        let tmpWeb = formulario["webPersonal"];
        let tmpContrasena = formulario["contrasena"];

        let dni, nombre, apellidos, fechaNacimiento, webPersonal, contrasena;

        //DNI
        if ((tmpDni.value != "") && (tmpDni.value.length == 9)) {
            let numeros = tmpDni.value.substr(0,8); //empieza en el 0, y va a coger 8 caracteres a partir de ahi (asi cojo solo los 8 primeros caracteres, que son los numeros)
            let letra = tmpDni.value.substr(8,1); //empieza en el 8, y solo va a coger un caracter a partir de ahi (cojo la letra)
            let i = 0;

            while (i < numeros.length) {                
                if (!(numeros[i] >= 1 && numeros[i] <= 9)) {
                    alert("Los 8 primeros caracteres solo pueden ser números.");
                    i = numeros.length;
                    tmpDni.value = "";
                }
                i++;
            }
            
            if ((letra < "A" || letra > "Z")) {
                alert("El último caracter solo puede ser una letra mayuscula.");
            }

            dni = numeros + letra;
        } else {
            alert("El DNI es obligatorio y está compuesto por 9 caracteres.");
            tmpDni.value = "";
            tmpDni.focus();
        }

        //Nombre
        if (tmpNombre.value != "") {
            if (tmpNombre.value.split(" ").length > 2) {
                alert("Como mínimo un nombre y como máximo 2.");
                tmpNombre.value = "";
            } else {
                nombre = tmpNombre.value.split(" ");
            }
        } else {
            alert("El nombre es obligatorio.");
            tmpNombre.focus();
        }

        //Apellidos
        if (tmpApellidos.value != "") {
            if (tmpApellidos.value.split(" ").length > 2) {
                alert("Como mínimo un apellido y como máximo 2.");
                tmpApellidos.value = "";
            } else {
                apellidos = tmpApellidos.value.split(" ");
            }
        } else {
            alert("El apellido es obligatorio.");
            tmpApellidos.focus();
        }

        //Fecha de nacimiento
        if (tmpFecha.value != "") {
            let dia, mes, anio;
            let date = tmpFecha.value.split("/");
            //date[0] - dd
            if ((date[0].length == 2) && (date[0] >= 1 && date[0] <= 31)) {
                dia = date[0];
            } else {
                alert("El día tiene dos digitos y solo puede estar entre 1 y 31.");
                tmpFecha.value = "";
                tmpFecha.focus();
            }

            //date[1] - mm
            if ((date[1].length == 2) && (date[1] >= 1 && date[1] <= 12)) {
                mes = date[1];
            } else {
                alert("El mes tiene 2 digitos y solo puede estar entre 1 y 12.");
                tmpFecha.value = "";
                tmpFecha.focus();
            }

            //date[2] - yyyy
            if ((date[2].length == 4) && (date[2] >= 0 && date[2] <= 2025)) {
                anio = date[2];
            } else {
                alert("El año tiene que contener 4 digitos.");
                tmpFecha.value = "";
                tmpFecha.focus();
            }


            if (dia && mes && anio) {
                fechaNacimiento = dia + "/" + mes + "/" + anio;
                console.log(fechaNacimiento);
            }
        } else {
            alert("La fecha de nacimiento es obligatoria.");
            tmpFecha.focus();
        }

        //Web personal
        if (tmpWeb.value != "") {
            if (tmpWeb.value.startsWith("https://")) {
                webPersonal = tmpWeb.value;
            } else {
                alert("La web tiene que empezar por 'https://'");
                tmpWeb.value = "";
                tmpWeb.focus();
            }
        } else {
            alert("La web personal es obligatoria.");
            tmpWeb.focus();
        }

        //Contraseña
        if (tmpContrasena.value.length >= 8 && tmpContrasena.value.length <= 12 && tmpContrasena.value != "") {
            contrasena = tmpContrasena;
        } else {
            alert("La contraseña es obligatoria y tiene que tener entre 8 y 12 caracteres.");
            tmpContrasena.value = "";
            tmpContrasena.focus();
        }

        //Verificar que este todo
        if (dni && nombre && apellidos && fechaNacimiento && webPersonal && contrasena) {
            window.location.href = "correcto.html"; //redirecciona (en este caso) a la ruta que se indique
        }
    }, false);

}