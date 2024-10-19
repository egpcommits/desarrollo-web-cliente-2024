window.onload = function () {
    let div = document.getElementsByTagName("div")[0];

    let suma = document.getElementsByTagName("input")[0];
    suma.onclick = function () {
        div.innerText = parseInt(div.innerText) + 1; //importante vigilar que el + 1 no vaya dentro con la cadena. CADENA MAS LO QUE SEA ES CADENA 
    }

    let resta = document.getElementsByTagName("input")[1];
    resta.onclick = function () {
        div.innerText = parseInt(div.innerText) - 1;
    }    
}