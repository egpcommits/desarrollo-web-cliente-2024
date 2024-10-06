//fila 0 - plazas pequeñas.
//fila 1 - plazas grandes.

let plazas = [[],[]];


//Funciones que irán en un switch en el main.
function aparcarVehiculo (tamanio) {

}

function sacarVehiculo (pos) {

}

function mostrarAparcamiento () {
    console.log("Situación del aparcamiento: ");

    let i = 0, j = 0;

    //Plzas pequeñas
    while (i < 1) {
        j = 0;
        while (j < 10) {
            plazas[i].push('L');            
            j++;
        }
        console.log(plazas[i]);
        i++;        
    }


    //Plazas grandes
    i = 1, j = 0;

    while (i < 2) {
        j = 0;
        while (j < 14) {
            plazas[i].push('L');
            j++;
        }
        console.log(plazas[i]);
        i++;
    }
}

function salir () {

}

function main () {

    let opcion = 0;

    do {
        opcion = (Number(prompt(`Opción a elegir:
            Aparcar vehículo - 1
            Sacar vehículo - 2
            Mostrar aparcamiento -3
            Salir - 4`)));
    } while ((isNaN(opcion)) || (opcion < 1 || opcion > 4) );

    switch (opcion) {
        case 1:
            aparcarVehiculo();
            break;
        case 2:
            sacarVehiculo();
            break;
        case 3:
            mostrarAparcamiento();
            break;
        case 4:
            salir();
    }
}