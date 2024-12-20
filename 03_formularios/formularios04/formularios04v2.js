window.onload = () => {
    let formulario = document.forms[0];
    let convertir = formulario["convertir"];
    let select = formulario["select"];

    convertir.addEventListener("click", () => {
        let campo1 = formulario["campo1"];
        let campo2 = formulario["campo2"];
        if (select.selectedIndex == 1) { //de dolar a euro
            const VALORDOLAR = 1.04;
            if (campo1 != '') {
                campo2.value = (Number(campo1.value) * VALORDOLAR).toFixed(2); //para quedarme solo con dos decimales. Lo malo es que redondea (hacia arribay hacia abajo)
            }
        } else if (select.selectedIndex == 2) { //de euro a dolar
            const VALOREURO = 0.83;
            if (campo1 != '') {
                campo2.value = (Number(campo1.value) * VALOREURO).toFixed(2); //para quedarme solo con dos decimales. Lo malo es que redondea (hacia arribay hacia abajo)
            }
        }
    }, false);
}