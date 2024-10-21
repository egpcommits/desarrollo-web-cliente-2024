window.onload = function () {
    let parrafo = document.getElementsByTagName("p")[0];
    let estilos = window.getComputedStyle(parrafo);
    let fondo = estilos.getPropertyValue("background-color");

    parrafo.onclick = function () {
        
        if (fondo == 'rgb(176, 224, 230)') {
            this.style.setProperty('background-color', 'rgb(255, 192, 203)');
            this.style.setProperty('border', '3px solid red');
            this.style.setProperty('width', '100px');
            this.style.setProperty('height', '100px');
            this.style.setProperty('color', 'rgb(189, 183, 107)');
            
        } else if (fondo == 'rgb(255, 192, 203)') {
            this.style.setProperty('background-color', 'rgb(176, 224, 230)');
            this.style.setProperty('border', '1px solid black');
            this.style.setProperty('width', '200px');
            this.style.setProperty('color', 'rgb(100, 149, 237)');            
        }
    }
}