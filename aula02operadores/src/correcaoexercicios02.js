import leia from 'readline-sync'

var qht = leia.questionInt("DIGITE QUANTAS HORAS VOCE TRABALHA: \n")
var qvh = leia.questionInt("DIGITE QUANTAS HORAS VOCE TRABALHA: \n")
var qd = leia.questionInt("DIGITE O VALOR DO PERCENTUAL DE DESCONTO: \n")

var SB = qvh * qht;
var VD = SB * (qd / 100)
var SL = SB - VD

console.log("SEU SALARIO BRUTO E DE: " + SB)
console.log("SEU VALOR DE DESCONTO E DE: " + VD)
console.log("SEU SALARIO LIQUIDO E DE: " + SL)