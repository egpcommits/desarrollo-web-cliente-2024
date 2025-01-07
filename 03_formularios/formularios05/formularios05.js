window.onload = () => {
    let formulario = document.forms[0];
    let comprobar = formulario["comprobar"];

    comprobar.addEventListener("click", () => {
        let campo1 = formulario["campo1"];
        let campo2 = formulario["campo2"];
        if (campo1 != '' && campo2 != '') {
            let i = 0;
            let anagrama = false;
            let arrayCampo1 = [...campo1.value];
            let arrayCampo2 = [...campo2.value];
            arrayCampo1.sort();
            arrayCampo2.sort();

            while (i < arrayCampo1.length || i < arrayCampo2.length) {
                if (arrayCampo1[i] != arrayCampo2[i]) {
                    i = arrayCampo1.length;
                    anagrama = false;
                } else {
                    anagrama = true;
                }
                i++;
            }

            if (anagrama) alert("Son anagrama.");
            else alert("No son anagrama.");   
        }
    }, false);
}