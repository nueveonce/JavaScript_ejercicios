var minimo, maximo, promedio, numero, contador = 0, suma=0;
do {
    contador++;
    numero = prompt("ingrese un numero entero ( " + contador + " ): ");
    numero = parseInt(numero);
    suma=parseInt(suma)+numero;
    asignacionValores(numero, contador);
    maximo=valorMaximo(numero);
    minimo=valorMinimo(numero);
    promedio=suma/parseInt(contador);
    
} while (numero !== 0);

document.write("El valor maximo es: " + maximo);
document.write("<br>El valor minimo es: " + minimo);
document.write("<br>El valor Promedio es: " + promedio);

function valorMaximo(nunero) {
  
    if (numero>maximo) {
        return parseInt(numero);
    } else {
        return parseInt(maximo);
    }
}
function valorMinimo(numero) {
  
    if (numero<minimo) {
        return parseInt(numero);
    } else {
        return parseInt(minimo);
    }
}
function asignacionValores(numero, contador) {
    if (contador==1) {
        maximo=numero;
        minimo=numero;        
    }
    
}