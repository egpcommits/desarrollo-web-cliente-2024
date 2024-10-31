window.onload = () => {
    let botonAniadir = document.getElementsByTagName("input")[0];

    botonAniadir.onclick = () => {

        let textoUsuario = prompt("Escribe algo: ");

        if (textoUsuario != '') {
            //1er paso - crear el nodo
            let nuevoNodo = document.createElement("li");

            //2do paso - crear texto
            let texto = document.createTextNode(textoUsuario);

            //3er paso - enganchar el texto al nodo
            nuevoNodo.appendChild(texto);

            //4to paso - asignar un padre al nuevo nodo
            let padre = document.getElementsByTagName("ul")[0];
            padre.appendChild(nuevoNodo);
        }
    }
}