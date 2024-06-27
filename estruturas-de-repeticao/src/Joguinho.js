import leia from "readline-sync"

var numeromagico;

var opcaojogo = leia.keyInSelect(["PvP", "PvE"]);
if (opcaojogo === 0) {
    numeromagico = leia.questionInt("DIGITE O NUMERO MAGICO: ", { hideEchoBack: true });
} else if (opcaojogo === 1) {

} else {

}