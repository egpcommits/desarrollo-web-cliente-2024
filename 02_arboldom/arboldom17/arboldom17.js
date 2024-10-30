let timer1, timer2, timer3, timer4;

window.onload = () => {
    let salto = 120;
    let i = 1, j = 1, k = 1, l = 1;
    let ganador = 0;
    let imagen1 = document.getElementsByTagName("div")[0];
    let imagen2 = document.getElementsByTagName("div")[1];
    let imagen3 = document.getElementsByTagName("div")[2];
    let imagen4 = document.getElementsByTagName("div")[3];

    document.getElementsByTagName("input")[0].onclick = () =>  {
        document.getElementsByTagName("input")[0].disabled = true;
        timer1 = setInterval(() => {
            if ((salto * i) <= (screen.width - imagen1.offsetWidth)) {
                imagen1.style.left = (salto * i) + "px";
                i++;
            } else imagen1.style.left = (screen.width - imagen1.offsetWidth) + "px"; 
            comprobarGanador(imagen1, i);
        }, Math.floor(Math.random() * (1500 - 250) + 250));

        timer2 = setInterval(() => {
            if ((salto * j) <= (screen.width - imagen2.offsetWidth)) {
                imagen2.style.left = (salto * j) + "px";
                j++;
            } else imagen2.style.left = (screen.width - imagen2.offsetWidth) + "px";
            
            comprobarGanador(imagen2, j);
        }, Math.floor(Math.random() * (1500 - 250) + 250));

        timer3 = setInterval(() => {
            if ((salto * k) <= (screen.width - imagen3.offsetWidth)) {
                imagen3.style.left = (salto * k) + "px";
                k++;
            } else imagen3.style.left = (screen.width - imagen3.offsetWidth) + "px";
            comprobarGanador(imagen3, k);
        }, Math.floor(Math.random() * (1500 - 250) + 250));

        timer4 = setInterval(() => {
            if ((salto * l) <= (screen.width - imagen4.offsetWidth)) {
                imagen4.style.left = (salto * l) + "px";
                l++;
            } else imagen4.style.left = (screen.width - imagen4.offsetWidth) + "px";         
            comprobarGanador(imagen4, l);
        }, Math.floor(Math.random() * (1500 - 250) + 250));
        console.log(screen.width);
        
    }

    document.getElementsByTagName("input")[1].onclick = () => {
        document.getElementsByTagName("input")[0].disabled = false;
        i = 1, j = 1, k = 1, l = 1;
        resetear(timer1, imagen1);
        resetear(timer2, imagen2);
        resetear(timer3, imagen3);
        resetear(timer4, imagen4);
    }

    function resetear (timer, imagen) {
        clearInterval(timer);
        imagen.style.left = 0;
        ganador = 0;    
    }
    
    function comprobarGanador (imagen) {         
        if (((parseInt(imagen.style.left) + imagen.clientWidth) >= screen.width) && ganador == 0) {
            alert(`${imagen.dataset.nombre} ha ganado!!`); //el atributo data "guarda" informacion de etiquetas html. Despues se pueden usar para sacar informacion por pantalla.
            ganador = 1;
        }
    }
}