var minimo;
var maximo;
var promedio = 0;
var numero, contador = 1, suma = 0;
numero = ingresarValor(numero);
minimo = numero;
maximo = numero;
suma = numero;

while (numero != 0) {
    contador++;
    numero = ingresarValor(numero);    
    suma = parseInt(suma) + numero;    
    maximo = valorMaximo(numero);
    minimo = valorMinimo(numero);
    promedio = suma / parseInt(contador-1);

} ;

document.write("El valor maximo es: " + maximo);
document.write("<br>El valor minimo es: " + minimo);
document.write("<br>El valor Promedio es: " + promedio);

function valorMaximo(nunero) {
    if (numero > maximo && numero != 0) {
        return parseInt(numero);
    } else {
        return parseInt(maximo);
    }
}
function valorMinimo(numero) {

    if (numero < minimo && numero != 0) {
        return parseInt(numero);
    } else {
        return parseInt(minimo);
    }
}
function ingresarValor(numero) {
    numero = prompt("ingrese un numero entero");
    numero = parseInt(numero);
    return numero;
}