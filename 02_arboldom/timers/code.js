let timer;

window.onload = function () {
    //Timer
    //setInterval - repite una funcion cada x segundos

    //Set timeout - se espera x segundos y lanza la funcion 1 vez (a no ser que se configure para que se repita)
    //clearTimeout

    document.getElementsByTagName("input")[0].onclick = function () {
        let contador = 0;
        
        timer = setInterval(function () {
            let dedo = document.querySelector("div");
            contador++;
            dedo.innerText = contador;
        }, 100); //funcion, tiempo

        this.disabled = true; //Se desactiva el boton de empezar, porque si se le vuelve a dar se empiezan a acumular timers.
    }

    document.getElementsByTagName("input")[1].onclick = function () {
        clearInterval(timer); //Para el timer.

        document.getElementsByTagName("input")[0].disabled = true;
    }

    
}