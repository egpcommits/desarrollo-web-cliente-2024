window.onload = () => {
    let imagen = document.getElementsByTagName("img")[0];
    const anchoReal = imagen.dataset.width;
    const altoReal = imagen.dataset.height;

    let body = document.getElementsByTagName("body")[0];
    let div = document.createElement("div");
    let nuevaImagen = document.createElement("img");
    
    imagen.onclick = () => {
        imagen.setAttribute("style", "display: none");

        body.setAttribute("style", "background-color: gray; opacity: 0.5;");

        nuevaImagen.setAttribute("src", "imagenes/bleach-fight-redimensionado.jpg");
        nuevaImagen.setAttribute("style", `width: ${anchoReal}px; height: ${altoReal}px; position: absolute; z-index: 1;`);
        div.setAttribute("style", `display: flex; 
            justify-content: center; 
            align-items: center;
            width: ${screen.availWidth}px;
            height: ${screen.availHeight}px;
            position: relative;
            z-index: 2`);
        div.appendChild(nuevaImagen);

        body.appendChild(div);
    }

    div.onclick = () => {
        imagen.setAttribute("style", "display: block");
        body.setAttribute("style", "background-color: white;");

        div.removeChild(nuevaImagen);
        body.removeChild(div);

        imagen.setAttribute("style", "width: 640px; height: 360px");
    }
}