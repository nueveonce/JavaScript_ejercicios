var vector1 = new Array();


llenadoDeVectores();
mostrarVectores(vector1);
borrarElementos();
mostrarVectores(vector1);

function llenadoDeVectores() {
    for (let index = 0; index < 5; index++) {
        vector1[index] = Math.floor(Math.random() * 10000);        
    }
}

function mostrarVectores(vector) {
    for (let v of vector) {
        console.log(v);
        document.write(" - " + v );
    }
    document.write("<br>");
}
function borrarElementos() {
    vector1.splice(vector1.length-2, 2);
}