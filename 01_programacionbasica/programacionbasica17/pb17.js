function moviendo_arrays () {
    let i = 0;
    let numeros = []
    
    do {
        numeros[i] = (parseInt(prompt("Introduce un número: ")));
        i++;
    } while (i < 10);
    
    console.log(numeros);
}
