window.onload = () => {
    let formulario = document.forms[0];
    let convertir1 = formulario["convertir1"];
    let convertir2 = formulario["convertir2"];

    convertir1.addEventListener("click", () => {
        const VALOREURO = 0.83;
        let dolar1 = formulario["dolar1"];
        let euro1 = formulario["euro1"];
        if (dolar1 != '') {
            euro1.value = (dolar1.value * VALOREURO).toFixed(2); //para quedarme solo con dos decimales. Lo malo es que redondea (hacia arribay hacia abajo)
        }
    }, false);

    convertir2.addEventListener("click", () => {
        const VALORDOLAR = 1.04;        
        let euro2 = formulario["euro2"];
        let dolar2 = formulario["dolar2"];
        if (euro2 != '') {
            dolar2.value = (euro2.value * VALORDOLAR).toFixed(2); //para quedarme solo con dos decimales. Lo malo es que redondea (hacia arribay hacia abajo)
        }
    }, false);
}