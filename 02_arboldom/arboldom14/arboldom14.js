window.onload = () => {
    let titulos = document.getElementsByClassName("list__item");
    
    Array.from(titulos).forEach((elemento, pos) =>  {
        elemento.onclick = function () {
            let lista = document.getElementsByClassName("item__submenu")[pos];            
            if (pos != titulos.length - 1) {
                let estilos = window.getComputedStyle(lista);
                if (estilos.getPropertyValue("display") == "none") lista.style.display = "block";
            }            
        }
    });    
}