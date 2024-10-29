let timer;

window.onload = function () {
    let descargar = document.getElementsByTagName("input")[0];
    descargar.onclick = function () {        
        let meter = document.getElementsByTagName("meter")[0];
        timer = setInterval(function () {
            if (meter.value != meter.max) {
                meter.value += 5;
                console.log(meter);
            } else clearInterval(timer);
        }, 250);
    }

    let cargar = document.getElementsByTagName("input")[1];
    cargar.onclick = function () {
        let progress = document.getElementsByTagName("progress")[0];
        timer = setInterval(function () {
            if (progress.value != progress.max) {
                progress.value += 5;
                console.log(progress);
            } else clearInterval(timer);
        }, 250);
    }
}