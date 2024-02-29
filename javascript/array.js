var arr2 = [1,2,3,4,5,6,7];

arr2.splice(1,3);

console.log (arr2);



var nomes = ["Guilherme","Manoel","Samuel","Davi","João"];

nomes.unshift ("Monica");
nomes.splice (4);


var novos = nomes.splice (2,1,"Emanoel");

console.log (nomes);
console.log (novos);
console.log("Posição do Samuel é:"  + nomes.indexOf("Samuel"));

