//a) Mostrar por consola todos los sueldos uno debajo del otro.
//b) Aplicar el 15% de retencion a cada sueldo y devolver otro array (netos) con los nuevos valores.
//c)Crear el array "fiscalAlto" y guardar en el todos los sueldos mayores a 1935.

function sueldos () {
    let brutos = [1000, 1300, 1500, 1700, 2000, 2200, 2800, 3000];
    let longitud = brutos.length;
    let netos = [];
    let fiscalAlto = [];
    let i = 0, j = 0, k = 0;

    while (i < brutos.length) {
        console.log(brutos[i]);
        i++;
    }

    console.log(" ");

    while (j < brutos.length) {
        netos.push(brutos[j] - ((brutos[j] * 15)/100));
        console.log(netos[j]);
        j++;
    }

    console.log("\n");

    while (k < brutos.length) {
        if (brutos[k] > 1935) {
            fiscalAlto.push(brutos[k]);
            console.log(brutos[k]);
        }
        k++;
    }

}


