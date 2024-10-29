let timer;

window.onload = function () {
    let barra = document.getElementsByTagName("progress")[0];
    document.getElementsByTagName("input")[0].onclick = function () {
        this.disabled = true;
        let valorInicial = barra.getAttribute("value");
        
        timer = setInterval(() => {
            let div = document.getElementsByTagName("div")[0];
            let maximoBarra = barra.getAttribute("max");
            let valorBarra = barra.getAttribute("value");
            if (valorBarra != maximoBarra) barra.value += 10;
            else {
                div.innerText = (parseInt(div.innerText)) + 1;
                clearInterval(timer);
                this.disabled = false;
                barra.setAttribute("value", valorInicial);
            }
        }, 500);
        
    }
}