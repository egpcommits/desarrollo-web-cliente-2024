/*function cambiarBackground () {
    let boton = document.getElementsByTagName("input");

    if (boton[0].getAttribute("value") == "pink") document.bgColor = "pink";
    else if (boton[1].getAttribute("value") == "orange") document.bgColor = "orange";
    else if (boton[2].getAttribute("value") == "violet") document.bgColor = "violet";
    else if (boton[3].getAttribute("value") == "cyan") document.bgColor = "cyan";
    else if (boton[4].getAttribute("value") == "aliceblue") document.bgColor = "aliceblue";
    
}*/

function rosa () {
    let color = document.getElementsByTagName("input")[0];
    document.bgColor = color.getAttribute("value");
}

function naranja () {
    let color = document.getElementsByTagName("input")[1];
    document.bgColor = color.getAttribute("value");
}

function lila () {
    let color = document.getElementsByTagName("input")[2];
    document.bgColor = color.getAttribute("value");
}

function cyan () {
    let color = document.getElementsByTagName("input")[3];
    document.bgColor = color.getAttribute("value");
}

function acuamarina () {
    let color = document.getElementsByTagName("input")[4];
    document.bgColor = color.getAttribute("value");
}