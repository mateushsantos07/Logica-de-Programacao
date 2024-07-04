import leia from 'readline-sync'

var lista =[];
var pares = []

for (var i = 0; i < 5; i++) {
    lista[i] = leia.questionInt("DIGITE UM NUMERO: ")
    if(lista[i] % 2 === 0 ){
        pares.push(lista[i])
    }
}
console.log(pares)