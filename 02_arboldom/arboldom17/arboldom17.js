let timer1, timer2, timer3, timer4;

window.onload = () => {
    let salto = 150;
    let i = 1, j = 1, k = 1, l = 1;
    let imagen1 = document.getElementsByTagName("div")[0];
    let imagen2 = document.getElementsByTagName("div")[1];
    let imagen3 = document.getElementsByTagName("div")[2];
    let imagen4 = document.getElementsByTagName("div")[3];

    document.getElementsByTagName("input")[0].onclick = () =>  {
        timer1 = setInterval(() => {
            imagen1.style.left = (salto * i) + "px";
            console.log(i);
            i++;
        }, Math.floor(Math.random() * (2500 - 1500) + 1500));

        timer2 = setInterval(() => {
            imagen2.style.left = (salto * j) + "px";
            j++;
        }, Math.floor(Math.random() * (2500 - 1500) + 1500));

        timer3 = setInterval(() => {
            imagen3.style.left = (salto * k) + "px";
            k++;
        }, Math.floor(Math.random() * (2500 - 1500) + 1500));

        timer4 = setInterval(() => {
            imagen4.style.left = (salto * l) + "px";
            l++;
        }, Math.floor(Math.random() * (2500 - 1500) + 1500));
    }

    document.getElementsByTagName("input")[1].onclick = () => {
        i = 1, j = 1, k = 1, l = 1;
        resetear(timer1, imagen1);
        resetear(timer2, imagen2);
        resetear(timer3, imagen3);
        resetear(timer4, imagen4);
    }
}

function resetear (timer, imagen) {
    clearInterval(timer);
    imagen.style.left = 0;
}