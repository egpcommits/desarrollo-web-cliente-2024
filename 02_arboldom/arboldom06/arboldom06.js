window.onload = function () {
    let botones = document.getElementsByTagName("input");
    let i = 0;

    for(boton of botones) {
        boton.onclick = function () {
            document.bgColor = this.getAttribute("value");
        }
    }
}