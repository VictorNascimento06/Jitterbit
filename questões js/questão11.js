let pessoas = [
    {nome: "John", idade: 18},
    {nome: "Jonas", idade: 21},
]
let nomes = pessoas.map(function (pessoa) {
    return `${pessoa.nome} ${pessoa.idade}`;
});
console.log(nomes);

let idadesFuturas = pessoas.map(function (pessoa) {
    return pessoa. idade + 2;
});
console.log(idadesFuturas);

/* No dia a dia, o map() e o forEach() são mais usados
para trabalhar com dados de APIs e manipular arrays JSON
de forma prática
 */