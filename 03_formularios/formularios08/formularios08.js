window.onload = () => {
    let longitud = document.querySelectorAll("input[type='radio']").length;
    let div = document.getElementById("vi");

    //Apartado A con los radiobutton
    let i = 0;

    while (i < longitud) {
        let radio = document.querySelectorAll("input[type='radio']")[i];
        radio.addEventListener("click", () => {
            let div = document.getElementById("vi");            
            
            if (radio.checked) {
                let nuevoColor = radio.value;
                div.setAttribute("style", `width: 100%; height: 200px; background-color: ${nuevoColor}`);
            }
        }, false);        
        i++;
    }

    //Apartado B con el selct
    let j = 0;
    let select = document.getElementsByTagName("select")[0]; //para el length del select

    while (j < select.length) {        
        let option = document.querySelectorAll("select option")[j];
        option.addEventListener("click", () => {
            let nuevoColor = option.value;
            div.setAttribute("style", `width: 100%; height: 200px; background-color: ${nuevoColor}`);
        });        
        j++;
    }

}