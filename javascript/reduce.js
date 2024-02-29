//1 Opição Usando Redulce.

var total = 0;
var numeros 




// Opição usando o for.

var numeros = [1,2,3,4,5,6,7,8,9,10];
var total = 0;
for(var i = 0; i < numeros.length;i++){
    total += numeros[i];
}
console.log(total);



var escolha = prompt("Escolha uma bebida:", café, leite, chá );

var valor;

switch (escolha) {
  case "café":
    valor = 2.50;
    break;
  case "leite":
    valor = 3.00;
    break;
  case "chá":
    valor = 2.00;
    break;
  default:
    alert("Opção inválida. Escolha entre:", café, leite, ou, chá.);
    return;
}

alert("Você escolheu " + escolha + ". O valor a ser pago é R$ " + valor.toFixed(2) + ".");





