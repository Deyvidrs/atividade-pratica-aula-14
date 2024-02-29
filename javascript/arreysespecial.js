

//OPIÇÃO 1 DE USAR O FILTER ( INLINE )
var numeros = [1,2,3,4,5,6,7,8,9,10];

var resultado = numeros.filter(item => item % 2 ==0);

console.log(resultado)
//OPIÇÃO [ 2 ] DE USAR O FILTER, (fUNÇAÕ DENTRO DO FILTER)
var numerosFiltrados = numeros.filter(
function(valor){
    return valor > 5;

}
);
console.log(numerosFiltrados);

 //OPIÇÃO [ 3 ] DE USAR O FILTER ( fUNÇÃO FORA , E  DEPOIS JOGAR DENTRO DO FILTER )

function buscarValores(valor){
    return valor < 5;
}
var numerosEncontrados = numeros.filter(buscarValores)
console.log(numerosEncontrados);
 
// OPIÇÃO [ 4 ] DE USAR O FILTER ( USAR UMA FUNÇÃO ANONIMA)

var r1 = numeros.filter ((valor) =>{
    return valor > 5;
}

);
console.log(r1);

// OPIÇÃO [ 5 ], DE USAR O FILTER (FORMA SIMPLIFICADA)

var r2 = numeros.filter(valor => valor < 6);
console.log(r2);


// OPIÇÃO [ 6 ], DE USAR O FILTER, (USANDO OBJETOS => {} )

var funcionarios = [
    {nome: "Luiz" ,idade: 53},
    {nome: "Davi" ,idade: 53 },
    { nome: "João" ,idade: 50},
    {nome: "Maria" ,idade: 50},
]
var pessoasLista = funcionarios.filter(
    function(valor){
        return valor.nome.length < 6, valor.idade == 53;
       
        
    }
);

console.log (pessoasLista);

// exercicio descobrir a categoria eletronico

var produtos = [
    {id:1,descricao: "Smartphone" ,categoria: "Eletrônico"},
    {id:2,descricao: "Televisão" ,categoria: "Eletrônico"},
    {id:3,descricao: "Geladeira" ,categoria: "Eletrodomestico"},
    {id:4,descricao: "Armário" ,categoria: "Moveis"},
    {id:5,descricao: "Desktop" ,categoria: "Eletrônico"},
]

var produtosLista = produtos.filter(
    function(valor){
        return valor.id,valor.descricao, valor.categoria == "Eletrônico"
        
    }
);
console.log(produtosLista);