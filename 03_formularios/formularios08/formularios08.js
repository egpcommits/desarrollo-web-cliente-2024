window.onload = () => {
    let formulario = document.forms[0];
    let longitud = document.querySelectorAll("input[type='radio']").length;
    let i = 0;

    /*while (i < longitud) {
        let radio = document.querySelectorAll("input[type='radio']")[i];
        radio.addEventListener("click", () => {
            let div = document.getElementById("vi");
            console.log(div);
            
            let nuevoColor = radio.value;
            console.log(nuevoColor);
            div.setAttribute("style", "background-color: " + nuevoColor);
        }, false);        
        i++;
    }*/

}