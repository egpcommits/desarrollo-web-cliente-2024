window.onload = function () {

    let tabla = document.getElementsByTagName("table")[0];


    //Cambiar tamaño
    let tamanio = document.getElementsByTagName("input")[0];

    tamanio.onclick = function () {
        console.log("Alto: " + tabla.getAttribute("height"));
        console.log("Ancho: " + tabla.getAttribute("width")); 

        //Nuevo alto:
        let nuevoAlto = 0;
        do {
            nuevoAlto = (parseInt(prompt("Introduce nuevo alto: ")));
        } while ((nuevoAlto < 0) || (isNaN(nuevoAlto)));

        tabla.setAttribute("height", nuevoAlto);

        //Nuevo ancho:
        let nuevoAncho = 0;
        do {
            nuevoAncho = (parseInt(prompt("Introduce nuevo ancho: ")));
        } while ((nuevoAncho < 0) || (isNaN(nuevoAncho)));

        tabla.setAttribute("width", nuevoAncho);

        console.log("Nuevo alto: " + tabla.getAttribute("height"));
        console.log("Nuevo ancho: " + tabla.getAttribute("width"));        
    }


    //Cambiar borde
    let borde = document.getElementsByTagName("input")[1];
    borde.onclick = function () {
        console.log(`Borde: ${tabla.getAttribute("border")}`);

        let nuevoBorde = 0;
        do {
            nuevoBorde = (parseInt(prompt("Introduce nuevo borde: ")));
        } while ((nuevoBorde < 0) || (isNaN(nuevoBorde)));

        tabla.setAttribute("border", nuevoBorde);

        console.log(`Nuevo border: ${tabla.getAttribute("border")}`);
    }


    //Cambiar alineacion
    let array = ["right", "left", "center"];
    let i = 0;

    let alineacion = document.getElementsByTagName("input")[2];
    alineacion.onclick = function () {
        tabla.setAttribute("align", array[i]);
        i++;

        if (i === 3) i = 0;
    }
}