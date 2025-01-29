window.onload = () => {
    let formulario = document.forms[0];
    let titulo = formulario["nombre"];
    let isbn = formulario["isbn"];
    let numpaginas = formulario["numpaginas"];
    let genero;
    let anio = formulario["anio"];
    let cover = formulario["cover"];
    let autor = formulario["autor"];
    let resumen = formulario["resumen"];

    let insertar = document.querySelectorAll("input[type='button'")[0];
    insertar.addEventListener("click", function () {
        
    }, false);
    
}