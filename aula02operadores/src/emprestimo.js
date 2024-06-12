import leia from "readline-sync"

var SL = leia.questionFloat("QUANTO VOCE RECEBE POR MES? ")
var limiteparc = SL * 0.30;
var VE = leia.questionFloat("QUAL O VALOR DO EMRESTIMO? ")
var NP = leia.questionInt("EM QUANTAS PARCELAS VOCE VAI FAZER? ")
var VFE = VE / NP;

if(VFE > limiteparc){
    console.log("ESSE VALOR NAO PODE SER CONCEDIDO")
} else {
    console.log("O VALOR DAS SUAS PARECELAS FICARAO R$" + VFE + " POR MES")
}