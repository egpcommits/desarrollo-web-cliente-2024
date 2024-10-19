window.onload = function() {

    let variable = document.getElementsByTagName("a")[0];

    let botonMostrar = document.getElementsByTagName("input")[0];
    botonMostrar.onclick = function () {
        console.log(variable.getAttribute("href"));
        console.log(variable.innerText);        
    }

    let botonCambiar = document.getElementsByTagName("input")[1];
    botonCambiar.onclick = function () {
        variable.setAttribute("href", "https://github.com/");
        variable.innerText = "He cambiado";
    }
}