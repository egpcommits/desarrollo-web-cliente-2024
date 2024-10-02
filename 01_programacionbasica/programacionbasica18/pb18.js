let mesas = []; //No es como en java, no se le indica el tamaño que tendrá el array
let sentados = false;
let numero_clientes = 0, i = 0, numero_mesas = 0, contador = 0;

function colocar_clientes () {

    //Se pide el número de mesas que habrá
    do {
        numero_mesas = (parseInt(prompt("¿Cuántas mesas habrá?:")))
        if (isNaN(numero_mesas)) {
            console.log("Ingrese un número positivo.");
        }
    } while ((isNaN(numero_mesas)) || (numero_mesas <= 0));

    

    //LLenar el array de mesas con numeros random 
    while (contador < numero_mesas) {
        mesas.push(Math.floor(Math.random() * 4)); //Como minimo 0 personas, como maximo 4        
        contador++;
    }
    console.log(`Estado de las mesas: ${mesas}`);


    do {

        //Se obtiene el numero de clientes que quieren mesa
        do {
            numero_clientes = (parseInt(prompt("¿Mesa para cuántas personas?")));
            if (numero_clientes > 4) {
                alert(`Lo sentimos, no admitimos grupos de ${numero_clientes}, haga grupos de 4 personas como máximo e intente de nuevo.`);
            } else if (isNaN(numero_clientes)) {
                alert(`Por favor, introduzca un número.`);
            }
        } while ((numero_clientes > 4) || (isNaN(numero_clientes)));

        if (numero_clientes > 0) {
            console.log(`El usuario pide una mesa para ${numero_clientes}`);
            if (!mesas_llenas()) {
                sentar_clientes();
            } else {
                console.log("Ohhh... No quedan mesas disponibles!");
                numero_clientes = -1;
            }            
        }

    } while (numero_clientes >= 0);
    console.log("Vuelva pronto!!");
}


function sentar_clientes () {
    //A rellenar las mesas.
    i = 0;
    sentados = false;
    while ((i < mesas.length) && (!sentados)) {                
        let encuentra_posicion = buscar_ceros(mesas);
        if (encuentra_posicion != -1) {
            mesas[encuentra_posicion] += numero_clientes;
            console.log(`Por favor, siéntese en la mesa ${(encuentra_posicion + 1)}`);
            sentados = true;
        } else if (mesas[i] + numero_clientes <= 4) {
            mesas[i] += numero_clientes;
            sentados = true;
            console.log(`Por favor, siéntese en la mesa ${(i + 1)}`);
        } 
        i++;
    }
    console.log(`Estado de las mesas: ${mesas}`);
}

//Solo busca mesas con 0 clientes
function buscar_ceros (mesas) {
    let i = 0;
    while (i < mesas.length) {
        if (mesas[i] == 0) {            
            return i;
        }
        i++;
    }
    return -1;
}

function mesas_llenas () {
    return mesas.every((elemento) => (elemento == 4));
}