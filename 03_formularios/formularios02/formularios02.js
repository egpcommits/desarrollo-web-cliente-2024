
window.onload = () => {
    let formulario = document.forms[0];
    let campo1 = formulario["campo1"];
    let campo2 = formulario["campo2"];
    
    campo1.addEventListener("keypress", (ev) => {
        campo2.value += ev.key;
    }, false);
}