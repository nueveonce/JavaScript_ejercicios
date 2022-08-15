var resultado;
function sumar() {
    let a = parseFloat(document.getElementById(numeroA).value);
    let b = parseFloat(document.getElementById(numeroB).value); 
    return a+b;
}
resultado=sumar();
document.write(resultado);