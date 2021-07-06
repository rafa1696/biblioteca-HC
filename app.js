// Pegar o input
// Se for sim, mostrar as categorias disponíveis e perguntar qual categoria ela quer escolher
// Senão, mostrar todos os livros em ordem crescente, pela quantidade de páginas

const livros = require("./database");
const readline = require("readline-sync");

const entradaInicial = readline.question("Deseja buscar um livro? S/N");

if (entradaInicial.toLocaleUpperCase()=== "S") {
    console.log("Essas são as categorias disponíveis");
    console.log("Produtividade e estilo de vida", "/Thriller", "/História e Teoria Política");

    const entradaCategoria = readline.question("Qual categoria irá escolher?")

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria);

    console.table(retorno);
} else {
    const livrosOrdenados = livros.sort((a, b) => a.paginas - b.paginas);
    console.log("Essas são todos os livros disponíveis:");
    console.table(livrosOrdenados);
}