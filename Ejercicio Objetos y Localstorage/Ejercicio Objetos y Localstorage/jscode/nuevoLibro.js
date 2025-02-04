window.onload = () => {
    let formulario = document.forms[0];
    let titulo = formulario["titulo"];
    let isbn = formulario["isbn"];
    let numpaginas = formulario["numpaginas"];
    let genero = formulario["genero"];
    let anio = formulario["anio"];
    let imagen = formulario["cover"];
    let autor = formulario["autor"];
    let resumen = formulario["resumen"];

    let insertar = document.querySelectorAll("input[type='button'")[0];
    insertar.addEventListener("click", function () {
        let librico = {
            title: titulo.value,
            pages: numpaginas.value,
            genre: genero.value,
            cover: imagen.value,
            synopsis: resumen.value,
            year: anio.value,
            ISBN: isbn.value,
            author: {
                name: autor.value
            }
        }        

        let biblioteca = JSON.parse(localStorage.getItem("biblioteca"));
        biblioteca.push(librico);

        localStorage.setItem("biblioteca", JSON.stringify(biblioteca));
    }, false);

    let volver = document.querySelectorAll("input[type='button'")[1];
    volver.addEventListener("click", () => {
        history.back();
    });
    
}