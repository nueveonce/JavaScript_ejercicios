var frase = prompt("Ingrese una frase");
console.log(frase);
for (let index = 0; index < frase.length; index++) {
    //console.log(frase.substring(index, index + 1) + " ");
    //var frase2=frase.substring(index, index);
    document.write(frase.substring(index, index + 1) + " ");
    
    
}
