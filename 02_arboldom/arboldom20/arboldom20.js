window.onload = () => {
    //generar
    let parrafoOriginal = document.getElementsByTagName("p")[0];
    let generar = document.getElementsByTagName("input")[0];    
    let borrarViejo = document.getElementsByTagName("input")[1];
    let borrarNuevos = document.getElementsByTagName("input")[2];
    let sustituir = document.getElementsByTagName("input")[3];
    borrarNuevos.disabled = true;

    //generar
    generar.onclick = () => {
        //1er paso - crear el nodo
        let nuevoNodo = document.createElement("p");

        //2do paso - atributos (opcional)
        nuevoNodo.setAttribute("class", "segundaClase");

        //3er paso - crear texto para el nodo
        let texto = document.createTextNode(parrafoOriginal.innerText);

        //4to paso - enganchar el texto al nodo
        nuevoNodo.appendChild(texto);

        //5to paso - asignar un padre al nuevo nodo
        let padre = document.querySelector("body");

        //6to paso - enganchar el nodo al padre
        padre.appendChild(nuevoNodo);

        borrarNuevos.disabled = false;
    }


    //borrar viejo
    borrarViejo.onclick = () => {
        let victima = parrafoOriginal;

        let padre = victima.parentNode;
        padre.removeChild(victima);

        borrarViejo.disabled = true;
        sustituir.disabled = true;
    }


    //borrar nuevos
    borrarNuevos.onclick = () => {
        let padre = document.querySelector("body");
        let victimas = document.getElementsByClassName("segundaClase");
        borrarNuevos.disabled = true;

        for(let i = 0; i < victimas.length;) {
            padre.removeChild(victimas[i]);
        }
    }


    //sustituir
    sustituir.onclick = () => {
        let viejito = document.getElementsByTagName("p")[0];
        let padre = viejito.parentNode;
        const numerin = 2, max = 10, min = 1;
        sustituir.disabled = true;
        borrarViejo.disabled = true;
        
        let table = document.createElement("table");
        let tbody = document.createElement("tbody");

        for (let i = 0; i < numerin; i++) {
            let tr = document.createElement("tr");
            for (let i = 0; i < numerin; i++) {
                let random = Math.floor(Math.random() * (max - min + 1) + min);
                let td = document.createElement("td");
                let texto = document.createTextNode(random);
                td.appendChild(texto);
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        }
        table.appendChild(tbody);

        table.setAttribute("border", "1px solid black");
        padre.replaceChild(table, viejito);
    }
}