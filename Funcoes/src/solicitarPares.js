/*Criar um vetor de 4 posições 
e solicitar ao usuário que forneça
4 números pares para armazenar nele. 
Caso o usuário digite
um número ímpar, o algoritmo deve avisar e solicitar um novo
valor.*/
import leia from 'readline-sync'
export function verificarPares(){

var result = [];

for (var i = 0; i < 4; i++) {
    var num = leia.questionInt("DIGITE UM NUMERO PAR: ");
    if (num % 2 === 0) {
        result[i] = num
    } else {
        console.log("VALOR INVALIDO! DIGITE UM NUMERO PAR " )
    }
}
}
console.table(result)
