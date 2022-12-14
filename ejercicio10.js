var frase = prompt("Ingrese una frase");

let invertida = () => frase.split(" ").reverse("").join("");

document.write(invertida(frase));
/*

 función split() en la cadena de entrada. 
 Esta función convierte la cadena en un objeto 
 que contiene todos los caracteres de esa cadena. 
 Después de eso, puede usar la función incorporada de 

 JavaScript reverse() para invertir una cadena. 
 Esta función no trabaja directamente con las cadenas, 
 por lo que primero debe convertir la cadena en un objeto 
 usando la función split().

 Ahora tienes un objeto dentro del cual todos los caracteres están en orden inverso. 
 Para convertir este objeto de nuevo en una cadena, puede usar la función join(). 
 Esta función tomará cada carácter de la cadena y lo unirá para formar una cadena.

*/