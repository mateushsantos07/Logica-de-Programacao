/*import leia from 'readline-sync'

var qmc = leia.questionFloat("QUANTAS MACAS VOCE COMPROU: ")



if(qmc<12){
    var vd = qmc * 0.3
    var tdc = parseFloat(vd.toFixed(2));
}else{
    var vd = qmc * 0.25
    var tdc = parseFloat(vd.toFixed(2));
}
    tdc = qmc - vd;

    console.log("VOCÊ COMPROU " + qmc + " MAÇÃS");
    console.log("O TOTAL DA SUA COMPRA FOI DE R$" + tdc )*/

import leia from 'readline-sync'

var qtd = leia.questionFloat("QUANTAS MACAS VOCE COMPROU: ")



if (qmc < 12) {
    var total = qtd * 0.30;
    console.log("VALOR TOTAL R$" + total.toFixed(2));
} else {
    var total = qtd * 0.20;
    console.log("VALOR TOTAL R$" + total.toFixed(2));
}
