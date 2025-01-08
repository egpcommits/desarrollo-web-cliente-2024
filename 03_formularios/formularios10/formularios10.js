window.onload = () => {
    let formulario = document.forms[0];
    let desplegable1 = formulario.elements[0];
    let desplegable2 = formulario.elements[1];
    let comprobar = formulario.elements[2];

    function borrar () {
        let papi = formulario.elements[1]; //el desplegable 2 es el papi
        while (papi.firstChild) { //Mientras el padre tenga hijos, los va borrando. Cuando se acaben, para el bucle.
            papi.removeChild(papi.firstChild);
        }
    }

    desplegable1.addEventListener("click", () => {
        borrar(); //cuando se seleccion el select, se borran primero las opciones del desplegable2

        if (desplegable1.selectedIndex == 1) {
            let arrayIntel = ["HD 3000", "HD 4000", "IRIS 600"];
            for (let i = 0; i < arrayIntel.length; i++) {
                let option = document.createElement("option");
                let texto = document.createTextNode(arrayIntel[i]);
                option.appendChild(texto);
                desplegable2.appendChild(option);
            }
        } else if (desplegable1.selectedIndex == 2) {
            let arrayAmd = ["RX Series 500", "Vega Series", "RX Series 6000"];
            for (let i = 0; i < arrayAmd.length; i++) {
                let option = document.createElement("option");
                let texto = document.createTextNode(arrayAmd[i]);
                option.appendChild(texto);
                desplegable2.appendChild(option);
            }
        } else if (desplegable1.selectedIndex == 3) {
            let arrayNvidia = ["GTX Serie 1000", "GTX Serie 2000", "GTX Serie 3000"];
            for (let i = 0; i < arrayNvidia.length; i++) {
                let option = document.createElement("option");
                let texto = document.createTextNode(arrayNvidia[i]);
                option.appendChild(texto);
                desplegable2.appendChild(option);
            }
        }
    });

    comprobar.addEventListener("click", () => {
        /*console.log(desplegable1.selectedIndex);
        console.log(desplegable2.selectedIndex);*/
        
        if (desplegable1.selectedIndex == 0 && desplegable2.selectedIndex == -1) {
            alert("Es necesario seleccionar una opción");
        } else {
            alert("Todo correcto");
        }
    });
}