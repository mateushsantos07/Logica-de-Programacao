import leia from 'readline-sync'

var idade = leia.questionInt("QUAL A SUA IDADE? ");

if (idade >=18){
    var nome = leia.question("FALE SEU NOME COMPLETO ")
}else {
    var nomepais = leia.question("SEUS PAIS PERMITIRAM? ")
    var nomef = leia.question("FALE SEU NOME COMPLETO ")
}