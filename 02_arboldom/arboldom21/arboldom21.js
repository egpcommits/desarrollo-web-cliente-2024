window.onload = () => {
    let enlace = document.getElementsByTagName("a")[0];

    enlace.onmouseover = () => {
        //Primer paso - crear el nuevo nodo
        let nuevoDiv = document.createElement("div");
        
        //Segundo paso - atributos
        nuevoDiv.setAttribute("style", `background-color: #3BF093; 
            font-size: 18px;
            padding: 20px;
            box-shadow: 5px 7px 10px gray;
            border-radius: 15px;
            float: right;
            width: 120px;
            height: 70px;
            text-align: center;
            color: #5589F0;`);

        //Tercer paso - crear el texto
        //let texto = document.createTextNode("Esto es un enlace");
        let texto = document.createTextNode("La URL de este enlace es: " + enlace.getAttribute("href"));

        //Cuarto paso - enlazar el texto al nodo
        nuevoDiv.appendChild(texto);

        //Quinto paso - enlazar el nodo al padre
        let padre = document.getElementsByTagName("body")[0];
        padre.appendChild(nuevoDiv);
    }
}