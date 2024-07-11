import leia from 'readline-sync'
 export function verificarPares() {

    var vetor = [];

    for (var i = 0; i < 4; i++) {
        var num = leia.questionInt("DIGITE UM NUMERO PAR: ");
        while (num % 2 !== 0){
            num = leia.questionInt("DIGITE UM NUMERO PAR: ");
        }
        vetor[i] = num;
    }
    console.log(vetor)
}
verificarPares()