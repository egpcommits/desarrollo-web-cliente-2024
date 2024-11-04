window.onload = () => {
    let imagen = document.getElementsByTagName("img")[0];
    const anchoReal = imagen.dataset.width;
    const altoReal = imagen.dataset.height;

    let body = document.getElementsByTagName("body")[0];
    let div = document.createElement("div");
    let nuevaImagen = document.createElement("img");
    let fondo = document.createElement("div");
    
    imagen.onclick = () => {
        
        imagen.setAttribute("style", "display: none");

        //creo otro div. No puedo poner la opacity en el bodyu porque los hijos la heredan.
        fondo.setAttribute("style", "background-color: gray; opacity: 0.5; position: fixed; width: 100%; height: 100%; top: 0; left: 0;");

        nuevaImagen.setAttribute("src", "imagenes/bleach-fight-redimensionado.jpg");
        nuevaImagen.setAttribute("style", `width: ${anchoReal}px; height: ${altoReal}px; position: relative; margin: 0 auto;`);
        div.setAttribute("style", `display: flex; 
            justify-content: center; 
            align-items: center;
            height: ${screen.availHeight}px;`);
            //Sin width, se alinea al medio cuando se modifica el tamño de la pantalla
        div.appendChild(nuevaImagen);

        //Nota: primero agrego el fondo porque sino se lia
        body.appendChild(fondo);
        body.appendChild(div);
        
    }

    fondo.onclick = () => {
        imagen.setAttribute("style", "display: block");
        body.setAttribute("style", "background-color: white;");

        div.removeChild(nuevaImagen);
        body.removeChild(fondo)
        body.removeChild(div);

        imagen.setAttribute("style", "width: 640px; height: 360px");
    }
}