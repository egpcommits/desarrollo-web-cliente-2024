window.onload = function () {
    let parras = document.getElementsByTagName("table");

    let dedo = parras[0];

    console.log(dedo.id);
    dedo.id = "iker"; //va a camiar el id

    dedo.className = "pepe"; //va a cambiar la clase

    dedo.setAttribute('width', 2000);
    dedo.setAttribute('class', "goku");
    dedo.setAttribute("name", "carlos");
    let valor = dedo.getAttribute("height");
    console.log(valor + 3); //cuidado que los valores que se cojan de la web SON CADENAS.
    valor = Number(dedo.getAttribute("width"));//Habrá que usar o Number o parseInt para pasarlo a numero.
    console.log(valor + 500);
    
    let bombi = document.getElementById("bombom");



    console.log(bombi.innerHTML);
    console.log(bombi.innerText);
    console.log(bombi.textContent);
    

    

    

}

function xanxe () {
    let bombi = document.getElementById("bombom");

    //let body = document.getElementsByTagName("body")[0];
    //body.bgColor = "green";
    document.bgColor = "palegreen"; //para tocar el body se usa document

    console.log(bombi.innerHTML);
    //bombi.innerHTML = "<b onclick = \"alert('hackeado')\">ACABO DE CARGARME EL ARBOL DOM</b>"; //se hace click en acabo de cargarme el arbol dom y sale el alert
    console.log(bombi.innerText);
    //se puede igualar dos innertext para añadir ese texto.
}

function cambia () {
    //Llegar al elemento
    let dedo = document.getElementsByTagName("input")[0];
    //Hacer el cambio
    dedo.type = "password"; //ahora el tipo va a ser password
    valor =+30;
    dedo.setAttribute("width", valor);
}

/*
Acceso a atributos:

1) Notacion PUNTO

2) GET y SET

3) Atributos que tienen todas las etiquetas
    - (muy peligrosa) .innerHTML - devuelve todo el contenido de esa etiqueta
    - innerText - devuelve texto sin etiquetas, le afecta el css, mete salto de linea entre texto de cada hijo y si hay varios espacios lo corrige y pone solo 1.
    - textContent - devuelve el texto sin etiquetas, pero no respeta nada del anterior. Va a devolver el texto tal cual. No interpreta etiquetas, entonces no se puede "añadir" por ejemplo un texto en negrita.
*/