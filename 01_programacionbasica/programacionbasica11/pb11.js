//ADN = GCAT
//ARN = GCAU
// transformar ADN a ARN

function transformar(cadena) {
    let i = 0;
    while (i < cadena.length) {
        if (cadena.charAt(i) == "T") {
            cadena = cadena.replaceAll("T", "U");
        }
        i++;
    }
    return cadena;

}