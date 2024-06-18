import leia from "readline-sync"

var valordoproduto = leia.questionInt("QUAL O VALOR TOTAL DO PRODUTO? ")

var moed1r = leia.questionInt("QUANTAS MOEDAS DE UM 1 POSSUEM NO COFRINHO? ")
var moed050r = leia.questionInt("QUANTAS MOEDAS DE 50 CENTAVOS POSSUEM NO COFRINHO? ")
var moed25 = leia.questionInt("QUANTAS MOEDAS DE 25 CENTAVOS POSSUEM NO COFRINHO? ")
var moed010r = leia.questionInt("QUANTAS MOEDAS DE 10 CENTAVOS POSSUEM NO COFRINHO? ")
var moed005r = leia.questionInt("QUANTAS MOEDAS DE 5 CENTAVOS POSSUEM NO COFRINHO? ")

var vaidarpcomprar = (moed1r * 1) + (moed050r * 0.5) + (moed25 * 0.25) + (moed010r * 0.10) + (moed005r * 0.05);

if (vaidarpcomprar >= valordoproduto) {
    console.log("VAI DAR PRA COMPRAR")
} else {
    console.log("NÃO VAI DAR PRA COMPRAR")
}
console.log(vaidarpcomprar)





