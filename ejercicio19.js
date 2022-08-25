var vectorUno = new Array();
var vectorDos = new Array();

llenarVector();
mostrarVector(vectorUno);
ordenarVector();
mostrarVector(vectorUno);

copiarElementos();
mostrarVector(vectorDos);

function llenarVector() {
    for (let index = 0; index < 50; index++) {
        vectorUno[index]=Math.round(Math.random()*100);        
    }    
}
function mostrarVector(vector) {
    let i=0;
    for (const aux of vector) {
        console.log( i +" -> "+ aux);
        i++;
    }
}
function ordenarVector() {
    vectorUno.sort();    
}
function copiarElementos() {
    for (let index = 0; index < 10; index++) {
        vectorDos[index]=vectorUno[index];
    }
     for (let index = 10; index < 20; index++) {
        vectorDos[index]=0.5;
        
     }
}