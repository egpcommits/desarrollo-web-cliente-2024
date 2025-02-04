window.onload = () => {
    let datos = JSON.parse(localStorage.getItem("librillo")); //se pasa la cadena a objeto
    console.log(datos);

    let padre = document.getElementById("info");
    let titulo = document.createElement("h2");
    titulo.appendChild(document.createTextNode(datos["title"]));
    padre.appendChild(titulo);

    let tabla = document.createElement("table");
    let tbody = document.createElement("tbody");

    for (let i = 0; i < 1; i++) { //primero filas
        for (let dato in datos) {
            let tr = document.createElement("tr");
            let td1 = document.createElement("td"); //creo el td
            let td2 = document.createElement("td"); //creo el td
            let clavecilla = "";
            let valorcillo = "";

            if (dato != "title" && dato != "cover") {
                if (dato != "author") {
                    valorcillo = document.createTextNode(datos[dato]);
                } else {
                    valorcillo = document.createTextNode(datos[dato]["name"]);
                }
                clavecilla = document.createTextNode(dato);
                td1.appendChild(clavecilla);
                td2.appendChild(valorcillo);
                tr.appendChild(td1);
                tr.appendChild(td2);
                tbody.appendChild(tr);
            }
        }
        tabla.appendChild(tbody);
        padre.appendChild(tabla);
    }

    let imagen = document.createElement("img");
    imagen.setAttribute("class", "portada");
    imagen.setAttribute("src", datos["cover"]);
    padre.appendChild(imagen);
}