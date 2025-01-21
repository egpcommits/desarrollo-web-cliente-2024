window.onload = () => {
    let formulario = document.forms[0];
    let resetear = formulario["resetear"];
    let enviar = formulario["enviar"];
    let vueltas = 0;
    let i = 0;

    resetear.addEventListener("click", () => {
        formulario.reset();
        borrarErrores();
    }, false);

    enviar.addEventListener("click", (ev) => {
        if (vueltas != 0) borrarErrores(); //borro los errores al principio para que no se acumulen. La condicion para que no se active la primera vez que se le da al boton enviar, porque no va a haber ningun parrafo creado, por lo que va a dar error al intentar borrar algo que no existe
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
            let numerosFinales, letraFinal;
            let i = 0;

            while (i < numeros.length) {                
                if (!(numeros[i] >= 1 && numeros[i] <= 9)) {
                    crearError(0, "Los 8 primeros caracteres solo pueden ser números.");
                    i = numeros.length;
                    tmpDni.value = "";
                } else {
                    numerosFinales = numeros;
                }
                i++;
            }
            
            if ((letra < "A" || letra > "Z")) {
                crearError(0, "El último caracter solo puede ser una letra mayuscula.");
            } else {
                letraFinal = letra;
            }

            if (numerosFinales && letraFinal) {
                dni = numerosFinales + letraFinal;
                acierto(0);
            }
        } else {
            crearError(0, "El DNI es obligatorio y está compuesto por 9 caracteres.");
            tmpDni.value = "";
            tmpDni.focus();
        }

        //Nombre
        if (tmpNombre.value != "") {
            if (tmpNombre.value.split(" ").length > 2) {
                crearError(1, "Como mínimo un nombre y como máximo 2.");
                tmpNombre.value = "";
            } else {
                nombre = tmpNombre.value.split(" ");
                acierto(1);
            }
        } else {
            crearError(1, "El nombre es obligatorio");
            tmpNombre.focus();
        }

        //Apellidos
        if (tmpApellidos.value != "") {
            if (tmpApellidos.value.split(" ").length > 2) {
                crearError(2, "Como mínimo un apellido y como máximo 2.");
                tmpApellidos.value = "";
            } else {
                apellidos = tmpApellidos.value.split(" ");
                acierto(2);
            }
        } else {
            crearError(2, "El apellido es obligatorio.");
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
                crearError(3, "El día tiene dos digitos y solo puede estar entre 1 y 31.");
                tmpFecha.value = "";
                tmpFecha.focus();
            }

            //date[1] - mm
            if ((date[1].length == 2) && (date[1] >= 1 && date[1] <= 12)) {
                mes = date[1];
            } else {
                crearError(3, "El mes tiene 2 digitos y solo puede estar entre 1 y 12.");
                tmpFecha.value = "";
                tmpFecha.focus();
            }

            //date[2] - yyyy
            if ((date[2].length == 4) && (date[2] >= 0 && date[2] <= 2025)) {
                anio = date[2];
            } else {
                crearError(3, "El año tiene que contener 4 digitos.");
                tmpFecha.value = "";
                tmpFecha.focus();
            }

            if (dia && mes && anio) {
                fechaNacimiento = dia + "/" + mes + "/" + anio;
                acierto(3);
            }
        } else {
            crearError(3, "La fecha de nacimiento es obligatoria.");
            tmpFecha.focus();
        }

        //Web personal
        if (tmpWeb.value != "") {
            if (tmpWeb.value.startsWith("https://")) {
                webPersonal = tmpWeb.value;
                acierto(4);
            } else {
                crearError(4, "La web tiene que empezar por 'https://'");
                tmpWeb.value = "";
                tmpWeb.focus();
            }
        } else {
            crearError(4, "La web personal es obligatoria.");
            tmpWeb.focus();
        }

        //Contraseña
        if (tmpContrasena.value.length >= 8 && tmpContrasena.value.length <= 12 && tmpContrasena.value != "") {
            contrasena = tmpContrasena;
            acierto(5);
        } else {
            crearError(5, "La contraseña es obligatoria y tiene que tener entre 8 y 12 caracteres.");
            tmpContrasena.value = "";
            tmpContrasena.focus();
        }
        
        //Verificar que este todo
        if (dni && nombre && apellidos && fechaNacimiento && webPersonal && contrasena) {
            formulario.submit();
        }
        vueltas++;
    }, false);

    function borrarErrores () {
        let longitud = document.getElementsByTagName("div").length; 
        //primero guardo el numero de divs que hay para poder ir eliminando sin que la longitud sea un problema

        /* casi casi, tengo que especificar que quiero que borre los p, sino empieza a borrarme campos importantes
        
        while (i < longitud) {
            let div = document.getElementsByTagName("div")[i]; //accedo a cada uno de los padres
            let parrafillo = document.querySelectorAll("div p")[0];
            div.removeChild(div.lastChild); //y borro el ultimo hijo, que en este caso es el parrafo que habia creado
            i++;
        }*/

        while (i < longitud) { //longitud = 6
            let parrafillo = document.querySelectorAll(".error")[i];
            let padre = parrafillo.parentNode;
            padre.removeChild(parrafillo);
            i++;
        }
    }
    
    function crearError(numDiv, mensaje) {
        let padre = document.getElementsByTagName("div")[numDiv]; //le paso el numero de div corespondiente
        let parrafo = document.createElement("p");
        parrafo.setAttribute("class", "error");
        parrafo.append(document.createTextNode(mensaje)); //y el mensaje a crear
        padre.append(parrafo);
    }

    function acierto (numDiv) {
        let padre = document.getElementsByTagName("div")[numDiv]; //le paso el numero de div corespondiente
        let parrafo = document.createElement("p");
        parrafo.setAttribute("class", "acierto");
        parrafo.append(document.createTextNode("Rellenado correctamente")); //y el mensaje a crear
        padre.append(parrafo);
    }
}



