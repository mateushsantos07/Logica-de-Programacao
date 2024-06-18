import leia from 'readline-sync'

console.log("INFORME O VALOR DA DOACAO")
console.log("R$10,00")
console.log("R$25,00")
console.log("R$50,00")
console.log("QUANTO VOCE QUISER")
var qdoada = leia.questionInt("QUANTO VC QUER DOAR?")

if (qdoada === 10) {
    console.log("VOCE DOOU R$10,00 OBRIGADO PELA DOACAO")
} else if (qdoada === 25) {
    console.log("VOCE DOOU R$25,00 OBRIGADO PELA DOACAO")
} else if (qdoada === 50) {
    console.log("VOCE DOOU R$50,00 OBRIGADO PELA DOACAO")
} else {
    console.log("VOCE DOOU R$" + qdoada + " OBRIGADO PELA DOACAO")
}