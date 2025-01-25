window.onload = () => {


    //PARTE 1

    //EJERCICIO 1
    let tutor = {
        nombre : "Jotaro",
        edad : 25,
        dni : "12345678A",
        titulo_universitario : "Ciencias del mar",
        mostrar : function () {
            let cadena = "Datos del profesor: \n";
            for(profe in tutor) {
                if (profe != "mostrar" && profe != "cambiarNombre") {
                    cadena += (`${profe} : ${tutor[profe]}\n`);
                }
            }
            return cadena;
        },
        cambiarNombre : (nuevo) => {
            tutor.nombre = nuevo;            
        }
    }

    tutor.cambiarNombre("Kujo")
    // console.log(tutor.mostrar())


    //EJERCICIO 2
    let asignaturas = [
        { //Primer objeto - asignatura            
            nombre: "Biología",
            curso : 2,
            num_horas : 12,
            mostrar : function () {
                let cadena = "";
                for(let asignatura of asignaturas) {
                    if (asignatura != "mostrar" && asignatura != "cambiarHoras") {
                        cadena += `${asignatura} - ${asignaturas[asignatura]}`;
                    }                    
                }
                return cadena;
            },
            cambiarHoras : (nueva) => {
                asignaturas.num_horas = nueva;
            }          
        },
        { //Segundo objeto - asignatura            
            nombre : "Dinámica marina",
            curso : 1,
            num_horas : 4,
            mostrar : function () {
                let cadena = "";
                for(let asignatura of asignaturas) {
                    if (asignatura != "mostrar" && asignatura != "cambiarHoras") {
                        cadena += `${asignatura} - ${asignaturas[asignatura]}`;
                    }                    
                }
                return cadena;
            },
            cambiarHoras : (nueva) => {
                asignaturas.num_horas = nueva;
            }           
        },
        { //Tercer objeto - asignatura            
            nombre : "Acuicultura",
            curso : 3,
            num_horas : 6,
            mostrar : function () {
                let cadena = "";
                for(let asignatura of asignaturas) {
                    if (asignatura != "mostrar" && asignatura != "cambiarHoras") {
                        cadena += `${asignatura} - ${asignaturas[asignatura]}`;
                    }                    
                }
                return cadena;
            },
            cambiarHoras : (nueva) => {
                asignaturas.num_horas = nueva;
            }
        },
        { //Cuarto objeto - asignatura            
            nombre : "Oceanografía marina",
            curso : 2,
            num_horas : 10,
            mostrar : () => {
                let cadena = "";
                for(let asignatura of asignaturas) {
                    if (asignatura != "mostrar" && asignatura != "cambiarHoras") {
                        cadena += `${asignatura} - ${asignaturas[asignatura]}`;
                    }                    
                }
                return cadena;
            },
            cambiarHoras : (nueva) => {
                asignaturas.num_horas = nueva;
            }
        }
    ]; //Acaba el array de asignaturas


    //EJERCICIO 3
    let array_asignaturas = []; //Primero creo el array para asignarle las asignaturas que le corresponden por curso
    let array_notas = []; //Tambien el array para guardar las notas correspondientes

    let alumno = {
        nombre : "Estela",
        edad : 25,
        ciclo : "Biología marina",
        curso : 2,
        tutor : tutor, //objeto
        asignaturas : array_asignaturas, //array
        notas : array_notas, //aray
        calcularMedia : () => {
            let suma = 0;
            for(nota of alumno.notas) {
                suma += nota;
            }            
            return "La media del curso es: " + (suma / alumno.notas.length);
        },
        mediaAsignatura : () => {
            let cadena = "";
            for(let i = 0; i < alumno.notas.length; i++) {
                if (i != alumno.notas.length -1) {
                    cadena += `${alumno.asignaturas[i].nombre}: ${alumno.notas[i]} - - `;
                } else { //para que en el ultimo elememto no salga el separador
                    cadena += `${alumno.asignaturas[i].nombre}: ${alumno.notas[i]}`;
                }
            }
            return cadena;
        },
        mostrar : function () {
            let cadenaSuprema = "";
            for(valor in alumno) {  
                if (valor == "tutor") {
                    cadenaSuprema += alumno[valor].mostrar();
                } else if (valor == "asignaturas") {
                    for (elemento of valor) {
                        cadenaSuprema += valor[elemento].mostrar();
                    }                    
                } else if (valor != "mostrar" && valor != "mediaAsignatura" && valor != "calcularMedia") {                    
                    cadenaSuprema += `${valor} -> ${alumno[valor]} \n`;
                }
            }
            return cadenaSuprema;
        }
    }

    

    for(let asignatura of asignaturas) {
        //si el curso de la asignatura corresponde con el curso del alumno, se agrega a sus asignaturas
        if (asignatura["curso"] == alumno["curso"]) {
            array_asignaturas.push(asignatura);
            //aprovecho y relleno las notas de las asignaturas con un random
            array_notas.push(Math.floor(Math.random() * (10 - 0 + 1) ) + 0);
        }
    }
    console.log(alumno.mostrar());

    //EJERCICIO 4
    //MOSTRANDO TUTOR
    for(clave in tutor) {
        if (clave != "mostrar" && clave != "cambiarNombre") {
            let padre = document.getElementById("tutor");
            crearContenido(`${clave} - ${tutor[clave]}`, padre);
        }        
    }

    //MOSTRANDO ASIGNATURAS
    for(clave of asignaturas) {
        let padre = document.getElementById("asignaturas");
        for(valor in clave) {            
            crearContenido(`${valor} - ${clave[valor]}`, padre);
        }
        padre.innerHTML += "<br>"; //para añadir al final de cada objeto un salto de linea. += porque sino me cargo lo de dentro
    }

    //MOSTRANDO ALUMNO
    for(clave in alumno) {
        let padre = document.getElementById("alumno");
        if (clave == "asignaturas") { //array -> for-of            
            crearTitulo(padre,"Asignaturas:");
            for(let asignatura of alumno.asignaturas) {
                for(valor in asignatura) {
                    crearContenido(`${valor} - ${asignatura[valor]}`, padre);
                }
                padre.innerHTML += "<br>"; //para añadir al final de cada objeto un salto de linea. += porque sino me cargo lo de dentro
            }
        } else if (clave == "notas") { //array -> for-of
            crearTitulo(padre, "Notas:");
            for(let i = 0; i < alumno.notas.length; i++) {
                crearContenido(`${alumno.asignaturas[i].nombre}: ${alumno.notas[i]}`, padre);
                padre.innerHTML += "<br>"; //para añadir al final de cada objeto un salto de linea. += porque sino me cargo lo de dentro
            }
        } else if (clave == "tutor") { //objeto -> for-in
            crearTitulo(padre, "Tutor asignado:");
            for(clave in tutor) {
                crearContenido(`${clave} - ${tutor[clave]}`, padre);
            }
            padre.innerHTML += "<br>"; //para añadir al final de cada objeto un salto de linea. += porque sino me cargo lo de dentro
        } else if (clave != "calcularMedia" && clave != "mediaAsignatura" && clave != "mostrar") { //no salen las propiedades que sean funciones
            crearContenido(`${clave} - ${alumno[clave]}`, padre);
            padre.innerHTML += "<br>"; //para añadir al final de cada objeto un salto de linea. += porque sino me cargo lo de dentro
        } 
    }


    //let padre = document.getElementById("alumno");
    // crearContenido(alumno.calcularMedia(), padre); 
    //hay que llamr a la funcion despues de crearse las asignaturas y las notas,
    //porque sino va a acceder al valor de una propiedad que todavia no se ha formado.
    
    // crearContenido(alumno.mediaAsignatura(), padre);

    //crearContenido(alumno.mostrar(), padre);



    //Funcion para crear titulos
    function crearTitulo (padre, mensaje) {
        let titulo = document.createElement("h4");
        titulo.setAttribute("class", "text-success");
        let textoTitulo = document.createTextNode(mensaje); 
        titulo.append(textoTitulo);
        padre.append(titulo);
    }


    //Funcion para crear el contenido
    function crearContenido (codigo, padre) {
        let parrafo = document.createElement("p");
        let texto = document.createTextNode(codigo);
        parrafo.append(texto);
        padre.append(parrafo);
    }

   
    

}