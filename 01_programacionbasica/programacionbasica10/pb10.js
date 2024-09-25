function recibir_arrays (array1, array2) {
    let i = 0, contador = 0;
    let lista_final = [];

    while (i < array1.length) {
        let j = 0;
        while (j < array2.length) {
            if (array1[i] == array2[j]) {
                lista_final[contador];
            }
            j++;
        }
        i++;
    }
}