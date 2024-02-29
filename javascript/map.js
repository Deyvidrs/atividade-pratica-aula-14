var numeros = [1,2,3,4,5,6,7,8,9,10];

var num =numeros.map(function(valor){
    return valor * 3;
});
console.log(num);

var funcionarios = [
    {nome: "Luiz" ,idade: 53},
    {nome: "Davi" ,idade: 53 },
    { nome: "João" ,idade: 50},
    {nome: "Maria" ,idade: 50},
]
var nomes = funcionarios.map(pessoas => pessoas.nome);
console.log(nomes);