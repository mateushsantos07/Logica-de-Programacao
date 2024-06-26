import leia from "readline-sync"

var contador = 0;

do {
    var num = leia.questionInt("DIGITE UM NUMERO: ");
    if (num > 100 && num < 200) {
        contador++;
    }
} while (num !== 0);

console.log("FORAM DIGITADOS " + contador + " ENTRE 100 E 200")