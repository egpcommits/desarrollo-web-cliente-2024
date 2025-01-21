window.onload = () => {


    //PARTE 1

    //EJERCICIO 1
    let tutor = {
        nombre : "Jotaro",
        edad : 25,
        dni : "12345678A",
        titulo_universitario : "Ciencias del mar"
    }

    //EJERCICIO 2
    let asignaturas = [
        { //Primer objeto - asignatura
            asignatura1 : {
                nombre: "Biología",
                curso : 1,
                num_horas : 12
            }
        },
        { //Segundo objeto - asignatura
            asignatura2 : {
                nombre : "Dinámica marina",
                curso : 1,
                num_horas : 4
            }
        },
        { //Tercer objeto - asignatura
            asignatura3 : {
                nombre : "Acuicultura",
                curso : 3,
                num_horas : 6
            }
        },
        {
            asignatura4 : {
                nombre : "Oceanografía marina",
                curso : 2,
                num_horas : 10
            }
        }
    ]; //Acaba el array de asignaturas


    //EJERCICIO 3
    let alumno = {
        nombre : "Estela",
        edad : 25,
        ciclo : "Biología marina",
        curso : 2,
        tutor : {tutor},
        asignaturas : [asignaturas],
    }


}