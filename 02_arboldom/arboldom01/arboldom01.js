function mostrar () {
    let variable = document.getElementsByTagName("a")[0];
    
    console.log(variable.innerText);
    console.log(variable.getAttribute("href"));    
}

function cambiar () {
    let variable = document.getElementsByTagName("a")[0];

    variable.setAttribute("href", "https://github.com/");
    variable.innerText = "He cambiado";
}