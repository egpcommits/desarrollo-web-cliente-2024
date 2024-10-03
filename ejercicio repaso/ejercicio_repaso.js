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
    let matriz =[];

    while (i < tam) {
        matriz.push([]);
        i++;
    }

    i = 0;
    while (i < tam) {
        j = 0;
        while (j < tam) {
            matriz[i][j] = (Math.floor(Math.random() * ((tam * 2) - tam) + tam));
            if (matriz[i][j] < 10) {
                matriz[i][j] = `0${matriz[i][j]}`;
            }
            j++;            
        }
        console.log(matriz[i]);
        i++;        
    }
    


    //Buscar el mayor número de la matriz y sacarlo por pantalla
    i = 0, j = 0;
    let mayor = Number.MIN_VALUE;
    let menor = Number.MAX_VALUE;

    while (i < matriz.length) {
        j = 0;
        while (j < matriz.length) {
            if (matriz[i][j] > mayor) {
                mayor = matriz[i][j];
            } else if (matriz[i][j] < menor) {
                menor = matriz[i][j];
            }
            j++;
        }
        i++;        
    }
    console.log(`El mayor número es: ${mayor}`);
    console.log(`El menor número es: ${menor}`);
    
}