var vector1 = new Array();
var vector2 = new Array();

llenadoDeVectores();
mostrarVectores(vector1);
mostrarVectores(vector2);

function llenadoDeVectores() {
    for (let index = 0; index < 5; index++) {
        vector1[index] = Math.floor(Math.random() * 10000);
        vector2[index] = Math.floor(Math.random() * 100);
    }
}
function mostrarVectores(vector) {
    for (let v of vector) {
        console.log(v);
        document.write(" - " + v );
    }
    document.write("<br>");
}