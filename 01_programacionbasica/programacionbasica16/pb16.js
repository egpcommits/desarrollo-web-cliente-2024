function likes(array_nombres) {
    let longitud = array_nombres.length;
    let cadena = "";

    if (longitud == 0) {
        cadena = "No one likes this.";
    } else if (longitud == 1) {
        cadena = array_nombres[longitud - 1] + " likes this."
    } else if (longitud == 2) {
        cadena = array_nombres[longitud - 2] + " and " + array_nombres[longitud - 1] + " like this.";
    } else if (longitud == 3) {
        cadena = array_nombres[longitud - 3] + ", " + array_nombres[longitud - 2] + " and " + array_nombres[longitud - 1] + " like this.";
    } else {
        cadena = array_nombres[0] + ", " + array_nombres[1] + " and " + (longitud - 2) + " others like this.";
    }

    return cadena;
}