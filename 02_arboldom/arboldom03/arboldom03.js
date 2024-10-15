let div = 0;

function sumar () {
    div = document.getElementsByTagName("div")[0];

    div.innerText = parseInt(div.innerText) + 1; //importante vigilar que el + 1 no vaya dentro con la cadena. CADENA MAS LO QUE SEA ES CADENA 
    
}

function restar () {
    div = document.getElementsByTagName("div")[0];

    div.innerText = parseInt(div.innerText) - 1;
}