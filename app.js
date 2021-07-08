const livros = require("./database");

//pegar o input
const readline = require("readline-sync");

const entradaInicial = readline.question("Deseja buscar um livro? S/N: "); //permite fazer pergunta para receber a entrada da pessoa usuária

//Se for SIM, mostra as categorias disponíveis e pergunta qual categoria ela escolhe
if (entradaInicial.toLocaleUpperCase() === "S") {
  console.log("Essas são as categorias disponíveis: ");
  console.log(
    "Produtividade e estilo de vida",
    "/ Administracao",
    "/ Tecnologia"
  );

  const entradaCategoria = readline.question("Qual categoria você escolhe: ");

  const retorno = livros.filter(
    (livro) => livro.categoria === entradaCategoria
  );

  console.table(retorno);
}

//Se NÃO, mostra todos os livros em ordem crescente pela quantidade de páginas
else {
  const livrosOrdenados = livros.sort((a, b) => a.paginas - b.paginas);
  console.log("Essas são todas os livros disponíveis: ");
  console.table(livrosOrdenados);
}
