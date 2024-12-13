
window.onload = () => {
    let formulario = document.forms[0];
    let campo1 = formulario["campo1"];
    let campo2 = formulario["campo2"];
    
    campo1.addEventListener("input", () => {
        campo2.value = campo1.value;
    }, false);
}