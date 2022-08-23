var radio = prompt("Ingrese el radio");
console.log(perimetro());
document.write("perimetro: " + perimetro());

document.write("<br>");

console.log(area());
document.write("area : " + area());

function perimetro () {
    return 2*Math.PI*radio;
}
function area() {
    return Math.PI * Math.pow(radio,2);
}