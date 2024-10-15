function cambiar () {
    let parrafo = document.getElementsByTagName("p")[0];

    if (parrafo.getAttribute("class") == "uno") parrafo.setAttribute("class", "dos");
    else parrafo.setAttribute("class", "uno");
}