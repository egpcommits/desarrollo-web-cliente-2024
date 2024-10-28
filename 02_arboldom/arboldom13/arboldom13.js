window.onload = function () {
    let parrafo = document.getElementsByTagName("p")[0];

    let boton = document.getElementsByTagName("h4")[0];
    boton.onclick = function () {
        if (parrafo.style.display == "none") {
            parrafo.style.display = "block";
            this.innerText = "Ocultar";
        } else {
            parrafo.style.display = "none";
            this.innerText = "Mostrar";
        }
        
    }
}