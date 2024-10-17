window.onload = function () {
    let colores = ["pink", "orange", "palevioletred", "cyan"];
    let i = 0;
    let celdas = document.getElementsByTagName("td");
    for (elemento of celdas) {
        elemento.onclick = function () {            
            /* if (this.bgColor == "white"  || this.bgColor == "") this.bgColor = "black";
            else if (this.bgColor = "black") this.bgColor = "white"; */
            if (i == (colores.length)) i = 0;
            this.bgColor = colores[i];
            i++;            
        }
    }

}