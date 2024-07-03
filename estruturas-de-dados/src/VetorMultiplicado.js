import leia from "readline-sync"

var lista = [];
var lista2 = [];

for (var i = 0; i < 5; i++) {
    lista[i] = leia.question("DIGITE UM NUMERO: ")
}
console.log(lista)

var x = 5
for (var j = 0; j < lista.length; j++) {
    console.log(lista[j])
    x *= lista[j]
    lista[j] * 5
}

console.log(j) 