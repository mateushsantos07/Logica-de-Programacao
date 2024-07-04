import leia from 'readline-sync'


var lista = [];
var soma = 0;

for (var i = 0; i < 5; i++) {
    lista[i] = leia.questionInt("DIGITE UM NUMERO: ")
    //lista[i] = parseInt(Math.random() * 100)
}
console.log(lista)
console.log("-------------------------------------------------------")
for (var i = 0; i < lista.length; i++) {
   soma = soma + lista[i]
}
console.log(soma)