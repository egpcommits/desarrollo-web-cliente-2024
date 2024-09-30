function pedircolores () {
    let colores = ["pink", "orange", "purple", "red", "blue"];
    let request = [];
    let sorted_colours = [];
    let trash = [];
    let contador = 0;
    let i = 0;
    
    do {
        request.push(prompt("Introduce una palabra:"));        
        contador++;
    } while (contador < 8);

    console.log(request);

    while (i < request.length) {
        let j = 0;
        let encontrado = false;
        while (j < colores.length) {
            if (request[i] == colores[j]) {
                encontrado = true;
                j = colores.length;
            }            
            j++;
        }
        if (encontrado) {
            sorted_colours.push(request[i]);
        } else {
            trash.push(request[i]);
        }
        i++;
    }

    let res = sorted_colours.concat(trash);

    console.log("--------------------------------")

    console.log(res);
    
}
