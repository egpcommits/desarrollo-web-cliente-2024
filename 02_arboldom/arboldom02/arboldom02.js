function mostrarTamanio () {
    let alto = document.getElementsByTagName("table")[0];
    console.log("Alto: " + alto.getAttribute("height"));

    let ancho = document.getElementsByTagName("table")[0];
    console.log("Ancho: " + ancho.getAttribute("width"));

    //Nuevo alto:
    let nuevoAlto = 0;
    do {
        nuevoAlto = (parseInt(prompt("Introduce nuevo alto: ")));
    } while ((nuevoAlto < 0) || (isNaN(nuevoAlto)));

    alto.setAttribute("height", nuevoAlto);

    //Nuevo ancho:
    let nuevoAncho = 0;
    do {
        nuevoAncho = (parseInt(prompt("Introduce nuevo ancho: ")));
    } while ((nuevoAncho < 0) || (isNaN(nuevoAncho)));

    ancho.setAttribute("width", nuevoAncho);

    console.log("Nuevo alto: " + alto.getAttribute("height"));
    console.log("Nuevo ancho: " + ancho.getAttribute("width"));
}

function valorBorde () {
    let borde = document.getElementsByTagName("table")[0];
    console.log("Borde: " + borde.getAttribute("border"));

    let nuevoBorde = 0;
    do {
        nuevoBorde = (parseInt(prompt("Introduce nuevo borde: ")));
    } while ((nuevoBorde < 0) || (isNaN(nuevoBorde)));

    borde.setAttribute("border", nuevoBorde);
    
    console.log("Nuevo borde: " + borde.getAttribute("border"));
}

let i = 0;

function cambiarAlineacion () {
    
    let array = ["right", "left", "center"];

    let alineacion = document.getElementsByTagName("table")[0];
    
    alineacion.setAttribute("align", array[i]);
    i++;
    
    if (i === 3) i = 0;
}