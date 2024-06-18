import leia from 'readline-sync'

var idade = leia.questionInt("QUAL A SUA IDADE? ");

if (idade < 18){

    var nomepais = leia.question("SEUS PAIS PERMITIRAM? \n 1 - SIM\n 2 - NAO ")
    if (nomepais === "1"){
        var nome = leia.question("INFORME SEU NOME: ");
    console.log("VOCE PODE VIAJAR TRANQUILO")
    } else if (nomepais === "2") {
    console.log("NAO PODE VIAJAR")
    } else {
    console.log("OPÇAO INVALIDA");
    }
} else {
    var nome = leia.question("INFORME SEU NOME ")
    console.log("VOCE PODE VIAJAR TRANQUILO " + nome)
}

