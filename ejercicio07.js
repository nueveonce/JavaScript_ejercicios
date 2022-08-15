var valorFinal, valorInicial, acum = 0;
valorFinal = prompt("Ingrese un valor maximo");
document.write("El valor final es" + valorFinal + "<BR>");

do {
    valorInicial = prompt("Ingrese un valor:");    
    acum=parseInt(acum)+parseInt(valorInicial);    
    document.write("valor acumulado" + acum + " hasta " + valorFinal + "<br>");

} while (acum<=valorFinal);
