var ingreso
ingreso = prompt("Ingrese un caracter S/N");
ingreso = ingreso.toLowerCase();
console.log(ingreso);

if (ingreso == "s" || ingreso == "n") {
    document.write("CORRECTO");
    console.log("CORRECTO");
} else {
    document.write("INCORRECTO");
    console.log("INCORRECTO");
}