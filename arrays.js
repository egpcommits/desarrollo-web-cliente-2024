let lista = [1, 2, 3, 4, 5];
let otra = ['uno', 'dos,true'];

let res = lista.concat(6, 7, 8, 9);
//res = lista.concat(otra); //concatena

/*//Meter
res.push('flipao'); //Mete por el final
res.unshift('por delante'); //Mete por delante

//Sacar
let ultimo = res.pop(); //devuelve el ultimo elemento, por lo que hay que capturarlo.
//Ya no se va a mostrar abajo.
let primero = res.shift();
console.log(primero);

res = res.reverse(); //DEVUELVE el array alterado (hay que capturarlo)
let salida = res.join("-");
console.log(salida); //cojo un array y lo uno con lo que yo le diga, y devuelve una cadena*/

//console.log(res.length);

/*Asi se haria de forma comun
function mayorEdad (edad) {
    return edad > 8;
}*/

let ok = res.some(function(edad) {
    return edad == 8;
});
console.log(ok);

let flecha = res.some((edad) => edad > 0)
console.log(flecha);

//anonima
res.forEach (function(elemento) {
    if (elemento % 2 == 0) {
        console.log("Es par");
    } else {
        console.log("Es impar")
    }
}
);

//flecha
res.forEach ((elemento) => {
    if (elemento % 2 == 0) {
        console.log("Es par");
    } else {
        console.log("Es impar")
    }
}
);


//Funcion map - sirve para filtrar
//el segundo parametro indica la posicion del elemento por el que vaya
let otro = res.map((elemento, posicion) => {
    if (elemento % 2 !== 0) {
        return elemento;
    } else {
        return posicion;
    }
    
});

//SPREAD OPERATOR [...] - acelera el trabajo con arrays.
let ulti = "MARTILLO VA!";
//let luis = [...lista, ...otra]
let luis = [...ulti] //te hace un split

console.log(luis)

console.log(otro);

console.log(res);


let a, b, c, otros;
let array = [4, 8, 15, 16, 23, 42];

[a, b, c, ...otros] = array;

//Intercamiar valor 1 con el valor 4
[array[1],array[4]]=[array[4],array[1]];

function paco () {
    return [4, 7]
}

let posx, posy;
[posx] = paco();

console.log(a);
console.log(b);
console.log(c);
console.log(otros);