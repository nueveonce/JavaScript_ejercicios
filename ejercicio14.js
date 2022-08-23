// PRIMER MANERA DE DEFINIR UN OBJETO
/*var libro = {
    isbn,
    titulo,
    autor,
    numeroPaginas,
}
*/
function Libro(isbn, titulo, autor, numeroPaginas) {
    this.isbn = isbn;
    this.titulo = titulo;
    this.autor = autor;
    this.numeroPaginas = numeroPaginas;
};

console.log(ingresarLibro());

function ingresarLibro() {
    let isbn = prompt("Ingrese el ISBN");
    let  titulo = prompt("titulo");
    let autor = prompt("ingrese el autor");
    let  numeroPaginas = prompt("Ingrese el numero de paginas");
    return new Libro(isbn, titulo, autor, numeroPaginas);
}



