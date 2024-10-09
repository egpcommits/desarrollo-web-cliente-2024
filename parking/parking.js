//fila 0 - plazas pequeñas.
//fila 1 - plazas grandes.

let plazas = [[],[]];


//Funciones que irán en un switch en el main.
function aparcarVehiculo (tamanio) {
    let seguir = false; 
    
    do {
        let coche = "";

        do {
            coche = (prompt("¿De qué tamaño es el coche? (P / G)").toLowerCase());
        } while ((coche != 'p') && (coche != 'g'));


        let comprobarPequenias = plazas[0].some(function(elemento) {
            return elemento == 'L';
        });

        let comprobarGrandes = plazas[1].some(function(elemento) {
            return elemento == 'L';
        });


        if ((coche == 'p') && (comprobarPequenias)) {
            let posicionPequenio = plazas[0].indexOf('L');
            plazas[0][posicionPequenio] = 'O';
            console.log(`Vehículo pequeño aparcado en P${posicionPequenio}`);
        } else if ((coche == 'g') && (comprobarGrandes)) {
            let posicionGrande = plazas[1].indexOf('L');
            plazas[1][posicionGrande] = 'O';
            console.log(`Vehículo grande aparcado en G${posicionGrande}`);
        } else if ((coche == 'p') && (!comprobarPequenias)) {
            let posicionGrande = plazas[1].indexOf('L');
            plazas[1][posicionGrande] = 'O';
            console.log(`Vehículo pequeño aparcado en G${posicionGrande}`);
        } else {
            console.log("No se ha podido aparcar el vehículo.");
        }

        
        seguir = (prompt("¿Aparcar otro? (S/N)").toLowerCase());
        if (seguir === "s") seguir = true;
        else seguir = false;

    } while (seguir);

}

function sacarVehiculo (pos) {
    let seguir = false; 
    
    do {

        let coche = "";
        do {
            coche = (prompt("¿De qué tamaño es el coche? (P / G)").toLowerCase());
        } while ((coche != 'p') && (coche != 'g'));

        do {
            pos = (prompt("Indique la plaza (de 0 a 13):"));
        } while (((pos < 0) || (pos > 14)) || (isNaN(pos)));

        if ((coche == 'p') && (plazas[0][pos] == 'O')) plazas[0][pos]  = 'L';        
        else if ((coche == 'g') && (plazas[1][pos] == 'O')) plazas[1][pos]  = 'L';        
        else console.log("En esa plaza no hay ningún coche aparcado..");

        seguir = (prompt("¿Sacar otro? (S/N)").toLowerCase());
        if (seguir === "s") seguir = true;
        else seguir = false;

    } while (seguir);
}

function mostrarAparcamiento () {
    console.log("Situación del aparcamiento: ");
    
    plazas.forEach((fila) => {
        console.log(fila);
    });
    
}

function main () {
    llenarAparcamiento();

    let opcion = 0;
    let salir = false;

    while (!salir) {
        do {
            opcion = (Number(prompt(`Opción a elegir:
                Aparcar vehículo - 1
                Sacar vehículo - 2
                Mostrar aparcamiento - 3
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
                salir = true;
                console.log("Vuelva pronto a nuestro aparcamiento!!");
        }
    }    
}






//Funciones mias

function llenarAparcamiento () {
    let i = 0, j = 0;

    //Plazas grandes
    while (i < 1) {
        j = 0;
        while (j < 10) {
            plazas[i].push('L');            
            j++;
        }
        i++;        
    }


    //Plazas pequeñas
    i = 1, j = 0;

    while (i < 2) {
        j = 0;
        while (j < 14) {
            plazas[i].push('L');
            j++;
        }
        i++;
    }
}