/*Eventos del cursor:
    - clientx y clienty -> relativos a la VENTANA (se cuenta desde la esquina sup-izq y cambia cuando se desplaza la pagina)
    - pagex y pagey -> relativos al DOCUMENTO (se cuenta desde la esquina sup-izq del documento y no cambia cuando se desplaza la pagina)*/

window.onload = () => {
    let fondos = ["red","green","blue","yellow","orange","pink","lightblue","lightgreen"];
    let ccolores = ["#00FF48","#D4478E","#FFD100","#0070FF","#7AAA83","#385B66","#ED91BF","#95AD95"];
    const notas = ["do.mp3", "doMayor.mp3", "fa.mp3", "la.mp3", "mi.mp3", "re.mp3", "sol.mp3"]; //falta 'si' :(

    let body = document.querySelector("body");
    let main = document.querySelector("main");
    main.setAttribute("position", "relative");
    let i = -1; //variable para ir rotando los fondos

    main.onclick = () => {
        i++;
        if (i < fondos.length) main.setAttribute("style", `background-color: ${fondos[i]}`);
        else {
            i = 0;
            main.setAttribute("style", `background-color: ${fondos[i]}`);
        }

        let notaMin = 0, notaMax = notas.length - 1;
        let sonido = new Audio();
        sonido.src = "./audios/" + notas[Math.floor(Math.random() * (notaMax - notaMin + 1) + notaMin)];
        sonido.play();
    }


    let figura = document.createElement("div");

    main.onmousedown = (event) => { //se le pasa por parametro el propio evento
        let minColores = 0, maxColores = ccolores.length - 1;
        let minFigura = 1, maxFigura = 2;
        let random = Math.floor(Math.random() * (maxFigura - minFigura + 1) + minFigura);        

        if (random == 1) { //body.clientWith pporque siempre va a ser 10% del ancho de la pantalla
            figura.setAttribute("style", `width: ${body.clientWidth * 0.1}px; 
                height: ${body.clientWidth * 0.1}px;
                border: 1px solid black;
                background-color: ${ccolores[Math.floor(Math.random() * (maxColores - minColores + 1) + minColores)]}`);
        } else {
            figura.setAttribute("style", `width: ${body.clientWidth * 0.1}px; 
                height: ${body.clientWidth * 0.1}px; 
                border: 1px solid black;
                background-color: ${ccolores[Math.floor(Math.random() * (maxColores - minColores + 1) + minColores)]};
                border-radius: 50%`);
        }

        main.appendChild(figura);

        let x = event.clientX; //obtengo posicion x del cursor
        let y = event.clientY; //obtengo posicion y del cursor
        figura.style.position = "absolute";
        figura.style.left = x - figura.offsetWidth / 2 + "px"; //a la coordenada se le resta la mitad de su tamaño para que el centro de la fifura coincida con el cursor
        figura.style.top = y - figura.offsetHeight / 2 + "px"; //igual con la y

        //se vuelven a crear las coordenadas para que se vayan actualizando conforme se mueve el raton
        //y cree las fiugras con el movimiento del cursor
        main.onmousemove = (event) => {  //se le pasa de nuevo el evento
            let x = event.clientX;
            let y = event.clientY;
            
            figura.style.left = x - figura.offsetWidth / 2 + "px";
            figura.style.top = y - figura.offsetHeight / 2 + "px";
        }   
    }
    
    main.onmouseup = () => {
        main.removeChild(figura);
    }
}