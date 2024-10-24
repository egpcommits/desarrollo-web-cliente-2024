let timer;

window.onload = function () {
    let div = document.getElementsByTagName("div")[0];
    let i = 1;

    let botonReset = document.getElementsByTagName("input")[0];
    botonReset.onclick = function () {
        div.style.left = "0px";
        i = 1;
    }

    let salto = 50;

    div.onmouseenter = function () {
        timer = setInterval(() => {
            if ((salto* i) <= (screen.width - div.offsetWidth)) {
                this.style.left = (salto * i) + "px";
                i++;
            }    
            else{
                this.style.left =  (screen.width - div.offsetWidth) + "px";
            }        
        }, 50);
    }

    div.onmouseleave = function () {
        clearInterval(timer);
    }
    
}