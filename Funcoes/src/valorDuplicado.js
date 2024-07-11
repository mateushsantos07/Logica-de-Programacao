import {preencherVetor } from "./exemplos.js";

var vetor = preencherVetor(10, 0, 50);

export function verificaDuplicidade(vetor) {
    for (var i = 0; i < vetor.length; i++) {
        for (var j = i; j < vetor.length; j++) {
            if (j !== i && vetor[i] === vetor[j]) {
                return true
            }
        }
    }
    return false
}
console.log(vetor)

var temDuplicidade = verificaDuplicidade(vetor);
if (temDuplicidade) {
    console.log("TEM DUPLICIDADE")
} else {
    console.log("NÃO TEM DUPLICIDADE")
}
