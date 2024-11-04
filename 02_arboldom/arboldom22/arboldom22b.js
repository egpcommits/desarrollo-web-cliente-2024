window.onload = () => {

    let imagenes = document.getElementsByTagName("img");
    let body = document.getElementsByTagName("body")[0];
    let div = document.createElement("div");
    let nuevaImagen = document.createElement("img");
    let fondo = document.createElement("div");
    let j = 0;

    for (let i = 0; i < imagenes.length; i++) {
        
        const anchoReal = imagenes[i].dataset.width;
        const altoReal = imagenes[i].dataset.height;

        imagenes[i].onclick = () => {
            imagenes[i].setAttribute("style", "display: none");
    
            //creo otro div. No puedo poner la opacity en el bodyu porque los hijos la heredan.
            fondo.setAttribute("style", "background-color: gray; opacity: 0.5; position: fixed; width: 100%; height: 100%; top: 0; left: 0;");
    
            nuevaImagen.setAttribute("src", "imagenes/" + imagenes[i].dataset.source);
            nuevaImagen.setAttribute("style", `width: ${anchoReal}px; height: ${altoReal}px; position: relative; margin: 0 auto;`);
            div.setAttribute("style", `display: flex; 
                justify-content: center; 
                align-items: center;
                height: ${screen.height}px;`);
                //Sin width, se alinea al medio cuando se modifica el tamño de la pantalla
            div.appendChild(nuevaImagen);
    
            //Nota: primero agrego el fondo porque sino se lia
            body.appendChild(fondo);
            body.appendChild(div);

            j = i;
        }

        fondo.onclick = () => {
            imagenes[j].setAttribute("style", "display: block");
            body.setAttribute("style", "background-color: white;");
    
            div.removeChild(nuevaImagen);
            body.removeChild(fondo);
            body.removeChild(div);
    
            imagenes[j].setAttribute("style", "width: 640px; height: 360px");
        }
    }
}