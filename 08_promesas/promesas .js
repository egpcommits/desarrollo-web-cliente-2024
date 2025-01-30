/*window.onload = function () {

    console.log("Pidiendo café...");
    setTimeout( () => { //el set time out para que la consola se espere para sacar el mensaje
        console.log("Café listo!!");
        //ctrl k + q para abrir el quokka
        //se ve que el café estará listo al final
    }, 3000);

    console.log("Le doy cambio a Mateo...");
    console.log("Le vendo tabaco a la ambulancia gitana");


}*/

let pedido = new Promise ((resolve, reject) => {
    if (parseInt(Math.random () * 3 + 1) == 3) {
        reject("Su pedido ha sido cancelado.");
    }

    resolve("Pedido entregado.");    
});

console.log("Pidiendo café...");

pedido
    .then(function (respuesta) {
        //console.log(respuesta);
        return respuesta+23;
    })
    .then(function (otraRespuesta) { //then para la promesa anterior, que viene delreturn then
        console.log(otraRespuesta);
    })
    .catch (function (error) {
        console.log(error);
    });

console.log("Le doy cambio a Mateo...");
console.log("Le vendo tabaco a la ambulancia gitana");
