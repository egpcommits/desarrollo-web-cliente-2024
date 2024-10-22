window.onload = function () {
    let div = document.getElementsByTagName("div")[0];
    let i = 1;

    let botonReset = document.getElementsByTagName("input")[0];
    botonReset.onclick = function () {
        div.style.left = "0px";
        i = 1;
    }

    div.onmouseout = function () {
        if ((5 * i) <= (screen.width - div.offsetWidth)) {
            console.log("hola");
            this.style.left = (5 * i) + "px";
            i++;
        }
    }
}