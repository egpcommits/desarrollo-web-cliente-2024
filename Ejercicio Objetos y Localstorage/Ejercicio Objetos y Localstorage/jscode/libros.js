window.onload = () => {
    //para que no se cree cada vez que se cargue la pagina
    //si en el localstorage no existe biblioteca, se crea, sino sigue palante como los de alicante
    if (localStorage.getItem("biblioteca") == null) {
        localStorage.setItem("biblioteca", JSON.stringify(library));
    }    

    let numLibros = 0; //va a guardar el numero de libros

    var nuevaBiblio = JSON.parse(localStorage.getItem("biblioteca"));

    for(libros of nuevaBiblio) {
        numLibros++; //numero de objetos que tiene el array
        for (libro in libros) {
            if (libro == "title") { //para que solo salga una vez. Sin el if se repite X veces (el numero de propiedades del objeto)
                mostrar(libros["title"], libros["cover"]);
            }            
        }
    }
    
    //Mostrar el numero de libros en el h1
    let padre = document.getElementsByTagName("h1")[0];
    let texto = document.createTextNode("El número de libros en la biblioteca es de " + numLibros);
    padre.appendChild(texto);


    //evento con el que detectar que libro se selecciona, ese subirlo al local sotrage y redireccionar a mostrar.html
    let longitud = document.getElementsByTagName("article").length;
    let i = 0;

    while (i < longitud) {
        let presentacion = document.getElementsByTagName("article")[i];        
        presentacion.addEventListener("click", function () {     
            for(libros of library) {
                for (libro in libros) {                    
                    if (libro == "title" && libros[libro] == this.innerText) { //necesito que el titulo del objeto y el que se selecciona sea el mismo
                        localStorage.setItem("librillo", JSON.stringify(libros)); //se pasa a string y se puede subir al local storage
                        window.location.href = "mostrar.html";
                    } 
                }
            }           
        }, false);
        i++;
    }
}

function mostrar (titulo, imagen) {
    let padre = document.getElementsByTagName("section")[0];
    let article = document.createElement("article");
    article.setAttribute("class", "presentacion");
    let h3 = document.createElement("h3");
    let img = document.createElement("img");
    img.setAttribute("src", imagen);
    h3.appendChild(document.createTextNode(titulo));
    article.appendChild(h3);
    article.appendChild(img);
    padre.appendChild(article);
}

const library = [
    {
        "title": "El Señor de los Anillos",
        "pages": 1200,
        "genre": "Fantasía",
        "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg",
        "synopsis": "Una aventura épica en un mundo de fantasía llamado la Tierra Media.",
        "year": 1954,
        "ISBN": "978-0618640157",
        "author": {
            "name": "J.R.R. Tolkien",
            "otherBooks": [
                "El Hobbit",
                "El Silmarillion"
            ]

        }
    },
    {
        "title": "Juego de Tronos",
        "pages": 694,
        "genre": "Fantasía",
        "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1273763400i/8189620.jpg",
        "synopsis": "En un reino donde las estaciones duran años, una batalla épica por el trono se desarrolla.",
        "year": 1996,
        "ISBN": "978-0553103540",
        "author": {
            "name": "George R. R. Martin",
            "otherBooks": [
                "Choque de Reyes",
                "Tormenta de Espadas",
                "Festín de Cuervos"
            ]

        }
    },
    {
        "title": "Harry Potter y la piedra filosofal",
        "pages": 223,
        "genre": "Fantasía",
        "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1550337333i/15868.jpg",
        "synopsis": "Un niño descubre que es un mago y comienza una aventura en una escuela de magia.",
        "year": 1997,
        "ISBN": "978-0747532699",
        "author": {
            "name": "J.K. Rowling",
            "otherBooks": [
                "Harry Potter y la cámara secreta",
                "Harry Potter y el prisionero de Azkaban",
                "Harry Potter y el cáliz de fuego"
            ]

        }
    },
    {
        "title": "1984",
        "pages": 328,
        "genre": "Ciencia ficción",
        "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1657781256i/61439040.jpg",
        "synopsis": "Una inquietante visión de un futuro distópico y totalitario.",
        "year": 1949,
        "ISBN": "978-0451524935",
        "author": {
            "name": "George Orwell",
            "otherBooks": [
                "Rebelión en la granja"
            ]

        }
    },
    {
        "title": "Apocalipsis Zombie",
        "pages": 444,
        "genre": "Zombies",
        "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1422626176i/24762432.jpg",
        "synopsis": "Un gallego se queda en casa en pleno apocalipsis zombie y acaba casi salvando el mundo",
        "year": 2001,
        "ISBN": "978-4444532611",
        "author": {
            "name": "Manel Loreiro",
            "otherBooks": []
        }

    },
    {
        "title": "Dune",
        "pages": 412,
        "genre": "Ciencia ficción",
        "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1555447414i/44767458.jpg",
        "synopsis": "En el inhóspito planeta desértico de Arrakis, una gran intriga política y familiar se desarrolla.",
        "year": 1965,
        "ISBN": "978-0441172719",
        "author": {
            "name": "Frank Herbert",
            "otherBooks": [
                "El mesías de Dune",
                "Hijos de Dune"
            ]
        }

    },
    {
        "title": "La Guía del Autoestopista Galáctico",
        "pages": 216,
        "genre": "Ciencia ficción",
        "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1653311117i/6691227.jpg",
        "synopsis": "Un viaje absurdo y cómico por el espacio, con toallas.",
        "year": 1979,
        "ISBN": "978-0345391803",
        "author": {
            "name": "Douglas Adams",
            "otherBooks": [
                "El restaurante del fin del mundo",
                "La vida, el universo y todo lo demás"
            ]
        }

    },
    {
        "title": "Neuromante",
        "pages": 271,
        "genre": "Ciencia ficción",
        "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1554437249i/6088007.jpg",
        "synopsis": "Una visión profética de la ciber-realidad y la inteligencia artificial.",
        "year": 1984,
        "ISBN": "978-0441569595",
        "author": {
            "name": "William Gibson",
            "otherBooks": [
                "Conde Cero",
                "Mona Lisa Acelerada"
            ]
        }

    },
    {
        "title": "Fahrenheit 451",
        "pages": 249,
        "genre": "Ciencia ficción",
        "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1383718290i/13079982.jpg",
        "synopsis": "Una sociedad futura donde los libros están prohibidos y 'bomberos' queman cualquier libro que encuentren.",
        "year": 1953,
        "ISBN": "978-1451673319",
        "author": {
            "name": "Ray Bradbury",
            "otherBooks": [
                "Crónicas marcianas",
                "El hombre ilustrado"
            ]
        }

    },
    {
        "title": "El resplandor",
        "pages": 688,
        "genre": "Terror",
        "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1641398308i/60038757.jpg",
        "synopsis": "Una familia se muda a un hotel aislado para el invierno donde una presencia siniestra influye en el padre hacia la violencia.",
        "year": 1977,
        "ISBN": "978-0307743657",
        "author": {
            "name": "Stephen King",
            "otherBooks": [
                "Carrie",
                "It"
            ]
        }

    },
    {
        "title": "Drácula",
        "pages": 418,
        "genre": "Terror",
        "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1387151694i/17245.jpg",
        "synopsis": "La historia del infame conde Drácula y su intento de mudarse de Transilvania a Inglaterra.",
        "year": 1897,
        "ISBN": "978-0486411095",
        "author": {
            "name": "Bram Stoker",
            "otherBooks": [
                "La joya de las siete estrellas",
                "La madriguera del gusano blanco"
            ]
        }

    },
    {
        "title": "Frankenstein",
        "pages": 280,
        "genre": "Terror",
        "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1669159060i/63631742.jpg",
        "synopsis": "Un científico obsesionado crea una criatura viva a partir de partes de cuerpos robadas, con consecuencias desastrosas.",
        "year": 1818,
        "ISBN": "978-0486282114",
        "author": {
            "name": "Mary Shelley",
            "otherBooks": [
                "El último hombre",
                "Valperga"
            ]
        }

    },
    {
        "title": "La llamada de Cthulhu",
        "pages": 43,
        "genre": "Terror",
        "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1485924654i/34094154.jpg",
        "synopsis": "La historia de un monstruo ancestral que amenaza con revivir y dominar el mundo.",
        "year": 1928,
        "ISBN": "978-1542461690",
        "author": {
            "name": "H.P. Lovecraft",
            "otherBooks": [
                "El horror de Dunwich",
                "En las montañas de la locura"
            ]
        }

    }
]
