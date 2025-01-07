window.onload = () => {
    let formulario = document.forms[0];
    let publicar = formulario["publicar"];
    let textito = formulario["texto"];

    publicar.addEventListener("click", () => {        
        let texto = document.createTextNode(textito.value);
        let div = document.createElement("div");
        div.setAttribute("style", "background-color: #52AC9C; margin-bottom: 20px; border-radius: 5px; color: white; padding: 10px")
        div.appendChild(texto);
        let publicaciones = document.getElementById("publicaciones");
        publicaciones.appendChild(div);
    }, false);
}