import leia from 'readline-sync'

var lista = [];
var MoI = [];

for (var i = 0; i < 5; i++) {
    lista[i] = leia.questionInt("DIGITE UM NUMERO: ")
    if (lista[i] >= 10) {
        MoI.push(lista[i]) 
    }
}
console.log(lista)
console.log(MoI)