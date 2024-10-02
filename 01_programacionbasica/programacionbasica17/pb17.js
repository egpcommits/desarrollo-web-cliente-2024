function moviendo_arrays () {
    let i = 0;
    let numeros = []
    
    do {
        numeros[i] = (parseInt(prompt("Introduce un número: ")));
        console.log(`Numero: ${numeros[i]} Índice: ${i}`);
        i++;
    } while (i < 10);


    let es_menor = true;
    let inicial = 0, final = 0;

    do {
        es_menor = true;
        inicial = (parseInt(prompt("Introduce posición inicial (entre 0 y 9): ")));
        final = (parseInt(prompt("Introduce posición final (entre 0 y 9): ")));        

        if (inicial > final) {
            es_menor = false;
        }
    } while ((!es_menor) || ((inicial < 0 || inicial > 9) || (final < 0 || final > 9)));

    

}