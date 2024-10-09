function recogerNumero (mensaje) {
    let num_usuario = 0;
    do {
        num_usuario = (Number(prompt(mensaje)));
    } while (isNaN(num_usuario));

    return num_usuario;    
}

function sumar (numero1, numero2) {
    return (numero1 + numero2);
}

function restar (numero1, numero2) {
    return (numero1 - numero2);
}

function multiplicar (numero1, numero2) {
    return (numero1 * numero2);
}

function dividir (numero1, numero2) {
    if (numero2 == 0) {
        return 0;
    }
    return (numero1 / numero2);
}

function recogeOperacion (primerNumero, segundoNumero) {
    let opcion = 0;

    opcion = (Number(prompt(`¿Qué operación quieres realizar?
        Suma: 1
        Resta: 2
        Multiplicación: 3
        División: 4`)));

        switch (opcion) {
            case 1:
                return sumar(primerNumero, segundoNumero);
            case 2:
                return restar(primerNumero, segundoNumero);
            case 3:
                return multiplicar(primerNumero, segundoNumero);
            case 4:
                return dividir(primerNumero, segundoNumero);
            default:
                console.log("El número introducido no es válido, solo entre 1 y 4.");
        }
}

function main () {
    let mensaje = "Introduce un número:";

    let resultado = recogeOperacion(recogerNumero(mensaje), recogerNumero(mensaje));

    alert(`El resultado de la operación es ${resultado}`); 
}