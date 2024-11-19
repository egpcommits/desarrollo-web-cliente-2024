
window.onload = () => {
    let formulario = document.forms[0];
    
    formulario.elements[0].onkeydown = () => {
        console.log(formulario.elements[0].value);
        formulario.elements[1].value = formulario.elements[0].value;
    }
    
}