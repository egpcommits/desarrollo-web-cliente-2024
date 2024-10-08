/*
1.- Función que recibe una matriz y devuelve true si hay algún elemento repetido. False si todos son diferentes.

2.- Anagrama. Función que reciba dos cadenas y devuelve true si son anagramas o false si no lo son.
(amor -roma) (amor - mora)
*/

function elementosRepetidos (matriz) {
    let repetido = false;
    let tam = matriz.length;
    /*let repetido = matriz.some(function(elemento) {
        return elemento == elemento + 1;
    });*/

    let i = 0;

    /*while ((i < tam) || (!repetido)) {
        let j = -1;
        while ((j < tam) || (!repetido)) {
            if (matriz[i] == matriz[j + 1]) repetido = true;
            j++;
        }
        i++;
    }*/

    let acumulados = [];
    for(fila of matriz) {
        for(num of fila) {
            if(acumulados.includes(num)) {
                return true;
            }
            acumulados.push(num);
        }        
    }
    return false;
}


function anagrama (cadena1, cadena2) {
    let i = 0;
    let j = 0;

    let array1 = [...cadena1];
    let array2 = [...cadena2];

    while (i < array1.length) {
        j = 0;
        while (j < array2.length) {
            if (array1[i] != array2[i]) return false;       
            j++;
        }
        i++;
    }
}