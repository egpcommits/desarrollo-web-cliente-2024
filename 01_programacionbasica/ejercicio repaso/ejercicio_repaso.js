/*
- Pido tamaño de matriz al usuario (N).
- Creo una matriz N con numeros aleatorios entre N y N*2.
a) Obtener el numero mayor de la matriz y mostrarlo por pantalla.
b) Mostrar la matriz por consola en filas y columnas:
    - Elementos separados por espacio.
    - Todos los elementos deben ocupar lo mismo.
c) Sumar todos los elementos de la matriz y mostrar por pantalla.
d) Aplicar FIZZ-BUZZ en los elementos de la matriz y devolver otra matriz con los cambios.
    - Si num es multiplo de 3 -> FIZZ
    - Si num es multiplo de 5 -> BUZZ
    - Si es multiplo de 3 y 5 -> FIZZBUZZ
*/

function main () {

    //Pido tamaño de matriz al usuario (N).
    let tam = 0, i = 0, j = 0;

    do {
        tam = (Number(prompt("Introduce el tamaño de la matriz (mínimo 2):")));
    } while ((tam < 2) || (isNaN(tam)));


    //Creo una matriz N con numeros aleatorios entre N y N*2.
    let matriz = [[]];

    while (i < tam) {
        matriz.push([]);
        i++;
    }

    i = 0;
    while (i < tam) {
        j = 0;
        while (j < tam) {
            matriz[i][j] = (Math.floor(Math.random() * ((tam * 2) - tam) + tam));
            if (matriz[i][j] < 10) matriz[i][j] = `0${matriz[i][j]}`;
            j++;            
        }
        console.log(matriz[i].join(' ')); //Para sacar los elementos de la matriz con espacios de por medio
        i++;        
    }

    /*matriz.forEach((eleI, posI) => {
        eleI.forEach((eleJ, posJ) => {
            eleJ[posI][posJ] = (Math.floor(Math.random() * ((tam * 2) - tam) + tam));
            if (eleJ[posI][posJ] < 10) {
                eleJ[posI][posJ] = `0${eleJ[posI][posJ]}`;
            }
        });
        console.log(matriz[posI].join(' '));
    });*/
    


    //Buscar el mayor número de la matriz y sacarlo por pantalla
    i = 0, j = 0;
    let mayor = Number.MIN_VALUE; //tambien se puede usar -Infinity
    let menor = Number.MAX_VALUE;

    while (i < matriz.length) {
        j = 0;
        while (j < matriz.length) {
            if (matriz[i][j] > mayor) mayor = matriz[i][j];
            else if (matriz[i][j] < menor) menor = matriz[i][j];
            j++;
        }
        i++;        
    }
    console.log(`El mayor número es: ${mayor}`);
    //console.log(`El menor número es: ${menor}`);



    //Sumar todos los elementos de la matriz y mostrar por pantalla.
    let sumaTotal = 0;

    matriz.forEach(elementoI => {
        elementoI.forEach(elementoJ => { //elemento es un array, que se puede recorrer con foreach
            sumaTotal += (Number(elementoJ));
        });
    });
    console.log(`Suma total de los elementos de la matriz: ${sumaTotal}`);



    //FIZZ-BUZZ
    let nuevaMatriz = [
        []
    ];

    i = 0, j = 0;

    while (i < tam) {
        nuevaMatriz.push([]);
        i++;
    }

    i = 0;

    while (i < matriz.length) {
        j = 0;
        while (j < matriz.length) {
            if (matriz[i][j] % 15 == 0) nuevaMatriz[i][j] = "FIZZBUZZ";
            else if (matriz[i][j] % 5 == 0) nuevaMatriz[i][j] = "BUZZ";
            else if (matriz[i][j] % 3 == 0) nuevaMatriz[i][j] = "FIZZ";
            else nuevaMatriz[i][j] = "    ";
            j++;
        }
        console.log(nuevaMatriz[i]);
        i++;
    }

    for (fila of matriz) {
        for (numero of fila) {
            if (valor % 15 == 0) valor = "FIZZBUZZ";
            else if (valor % 5 == 0) valor = "BUZZ";
            else if (valor % 3 == 0) valor = "FIZZ";
            else valor = "    ";
        }
    }

    /*matriz.forEach((elementoI, posI) => {
        elementoI.forEach((elementoJ, posJ) => {
            if (elementoJ % 3 == 0) nuevaMatriz[posJ] = "FIZZ";
            else if (elementoJ % 5 == 0) nuevaMatriz[posJ] = "BUZZ";
            else if (elementoJ % 15 == 0) nuevaMatriz[posJ] = "FIZBUZZ";
            else nuevaMatriz[posJ] = "NADA";
        });
        console.log(matriz[posI]);
    });*/

    
}