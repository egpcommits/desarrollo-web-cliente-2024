window.onload = function () {
    let celdas = document.getElementsByTagName("td");
    for (elemento of celdas) {
        elemento.onclick = function () {
            if (this.getAttribute("style") == "background-color: white;") {
                this.style.backgroundColor = "black";
            } else {
                this.style.backgroundColor = "white"; 
            }      
        }
    }

}