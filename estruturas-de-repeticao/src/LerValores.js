import leia from "readline-sync"

var maior
var menor

for (var i = 0; i < 15; i++) {
    var valor = leia.questionFloat(" Digite um numero " + (i + 1) + ": ")
    
    if(i === 0){
        menor = valor 
        maior = valor 
    }

    if (valor < menor) {
        menor = valor
    }

    if (valor > maior) {
        maior = valor
    }
}
    console.log("MAIOR NUMERO: " + maior)
    console.log("MENOR NUMERO: " + menor) 