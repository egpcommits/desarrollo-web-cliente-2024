window.onload = () => {
    let campo1 = document.getElementsByTagName("input")[0];
    let campo2 = document.getElementsByTagName("input")[1];
    let copiar = document.getElementsByTagName("input")[2];

    copiar.addEventListener(
        "click",
        copiadora,
        true
    );

    function copiadora () {
        if (campo1 != "") {
            campo2.value = campo1.value;
            campo1.value = "";
        }
    }
}