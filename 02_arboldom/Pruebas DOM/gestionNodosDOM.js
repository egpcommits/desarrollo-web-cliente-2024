window.onload = () => {
    let boton1 = document.getElementsByTagName("input")[0];
    let boton2 = document.querySelectorAll("input[type='button']")[1];
    let boton3 = document.getElementsByTagName("input")[2];

    boton1.onclick = function () {
        //1er paso - Creamos el nodo
        let nuevo = document.createElement("p"); //Como no esta enganchado a ningun sitio, no se ve. Se crea un p nuevo, sin texto

        //2do paso (opcional) - ponerle atributos
        nuevo.setAttribute("class", "parra"); //le añade clase / atributos

        //3er paso - Creamos nodo texto
        let texto = document.createTextNode("Soy el nuevo párrafo y me llamo Migue"); //Se añade texto al nodo nuevo

        //4to paso - Enganchamos el nodo texto al nuevo
        nuevo.appendChild(texto);

        //5to paso - asignar un padre al nuevo.
        let papi = document.querySelector("section");
        papi.appendChild(nuevo); //Lanza cuerda al nuevo nodo. Si se usa appendchild se coloca como ultimo hijo
        let bro = document.querySelectorAll("div")[2];
        papi.insertBefore(nuevo, bro);

        this.disabled = true;
        boton2.disabled = false;
    }

    boton2.onclick = function () {
        let victima = document.getElementsByClassName("parra")[0];
        let papi = victima.parentNode; //dedito apuntando al padre (en este caso el section)
        papi.removeChild(victima);
        this.disabled = true;
        boton1.disabled = false;
    }

    boton3.onclick = borrar;

    function borrar () {
        let papi = document.querySelector("section");
        let victimas = document.querySelectorAll("section div"); //devuelve una lista de nodos
        //si usasemos el get... o el .children petaria el bucle de abajo, ya que devuelve una estructura html coleccion.
        //Con el queryselector ES LA FORMA MAS SEGURA

        //el padre puede dar lista de hijos
        let masVictimas = papi.children;

        /*for (let i = 0; i < victimas.length; i++) {
            //let papi = victimas[i].parentNode; //Se puede usr el parent node si no sabemos el padre del hijo
            //papi.removeChild(victimas[i]);
            victimas[i].parentNode.removeChild(victimas[i]);
        }*/

        //formas de que no de probllemas al borrar:
        while (papi.firstChild) { //Mientras el padre tenga hijos, los va borrando. Cuando se acaben, para el bucle.
            papi.removeChild(papi.firstChild);
        }
    }
}