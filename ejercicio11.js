var cadena = prompt("INGRESE UNA FRASE");
var palabraMasLarga = 0, cantidadCaracteres, posicion;
var cadena2 = cadena.split(" ");
console.log(cadena2);
buscarPalabraMasLarga();
function buscarPalabraMasLarga() {
    for (let index = 0; index < cadena2.length; index++) {
        cantidadCaracteres = cadena2[index].length;
        if (palabraMasLarga < cantidadCaracteres) {
            palabraMasLarga = cantidadCaracteres
            posicion = index;
        }
    }
}

document.write(cadena2[posicion]);