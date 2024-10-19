window.onload = function () {
    let parrafo = document.getElementsByTagName("p")[0];

    parrafo.onclick = function () {
        if (parrafo.getAttribute("class") == "uno") parrafo.setAttribute("class", "dos");
        else parrafo.setAttribute("class", "uno");
    }
}