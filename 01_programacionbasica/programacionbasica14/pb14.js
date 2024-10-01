let array_colores = ["red", "yellow", "green", "white", "blue", "brown", "pink", "black"];
let numero_franjas = 0, i = 0;

function generar_bandera () {
    do {
        numero_franjas = (parseInt(prompt("Introduce el número de franjas que tendrá la bandera (entre 1 y 5):")))
    } while ((numero_franjas < 1) || (numero_franjas > 5) || (isNaN(numero_franjas)));

    document.write("<table>");
    while (i < numero_franjas) {
        let color = array_colores[Math.floor(Math.random() * (array_colores.length ))];
        document.write(`<tr><td style = 'background-color: ${color}; width: 400px; height: 100px;'></td></tr>`);
        i++;
    }
    document.write("</table>");

}
