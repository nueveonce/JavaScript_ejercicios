var radio = prompt("Ingrese el radio");

perimetro= () => 2 * Math.PI * radio;

area = () => Math.PI * Math.pow(radio, 2);
console.log(perimetro(radio));
document.write("perimetro: " + perimetro(radio));

document.write("<br>");
document.write("area : " + area(radio));

console.log(area(radio));
