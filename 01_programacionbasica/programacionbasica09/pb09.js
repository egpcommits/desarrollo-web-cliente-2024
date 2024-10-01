function mostrarMatriz () {
    let tamanio = 0, i = 0, j = 0, multiplicador = 1;
    let array = [];

    do {
        tamanio = (parseInt(prompt("Introduce el tamaño de la matriz (mínimo 2): ")));
    } while ((tamanio < 2) || (isNaN(tamanio)));

    while (i < tamanio) {
        array.push([]);
        i++;
    }

    i = 0;

    while (i < array.length) {
        j = 0;
        while (j < array.length) {
            array[i][j] = tamanio * multiplicador;            
            multiplicador++;
            j++;
        }
        console.log(array[i]);
        i++;
    }

    //b)Mostrar la matriz mostrando las filas como columnas.
    /*
        3 12 21
        6 15 24
        9 18 27
                */

}