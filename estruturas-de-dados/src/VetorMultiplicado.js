import leia from "readline-sync"

var lista = [];
var lista2 = [];

for (var i = 0; i < 10; i++) {
    lista[i] = leia.questionInt("DIGITE UM NUMERO: ")
    //lista[i] = parseInt(Math.random() * 100)
}
console.log(lista)

for (var i = 0; i < lista.length; i++) {
    lista2[i] = lista[i] * 5;
    //lista2.push(lista[i] * 5)
    console.log(lista2[i])
}