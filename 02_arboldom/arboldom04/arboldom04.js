let fotos = ["byakuya.jpg", "gintoki.jpg", "giorno.jpg", "gojo.jpg", "kakashi.jpg", "rengoku.jpg", "roy.jpg", "zoro.jpg"];
let timer;

window.onload = function () {
    let imagenes = document.getElementsByTagName("img")[0];
    let i = 0;

        //retroceder
        document.getElementsByTagName("input")[0].onclick = function () {
            if (i > 0) {
                i--;
                imagenes.setAttribute("src", "imagenes/" + fotos[i]);
            }
        }

        //avanzar
        document.getElementsByTagName("input")[1].onclick = function () {
            if (i < fotos.length - 1) {
                i++;
                imagenes.setAttribute("src", "imagenes/" + fotos[i]);
            }
        }

        //añadir
        document.getElementsByTagName("input")[2].onclick = function () {
            fotos.push("asahi.jpg");
        }

        //automatico
        let j = 0;
        document.getElementsByTagName("input")[3].onclick = function () {
            timer = setInterval(() => {
                if (j == fotos.length) j = 0;
                imagenes.setAttribute("src", "imagenes/" + fotos[j]);
                j++;
            }, 1000);
        }

        //parar
        document.getElementsByTagName("input") [4].onclick = function () {
            clearInterval(timer);
        }
}