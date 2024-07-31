const tentativas = 1000;
var index = 0;
var verde = 0, vermelho = 0, preto = 0;

while (index < tentativas) {
    var valorSorteado = parseInt(Math.random() * 37);
    if (valorSorteado === 0) {
        verde++;
    } else if (valorSorteado % 2 === 0) {
        preto++;
    } else {
        vermelho++
    }

    index++;
}

var pretoPorcent = (preto / tentativas) * 100;
var verdePorcent = (verde / tentativas) * 100;
var vermelhoPorcent = (vermelho / tentativas) * 100;


console.log(`Verde - ${verdePorcent}`)
console.log(`Vermelho - ${vermelhoPorcent}`)
console.log(`Preto - ${pretoPorcent}`)
console.log("                                                 ");

if(verdePorcent > 40 || vermelhoPorcent > 40 || pretoPorcent > 40){
    console.log("PODE ESTAR VICIADO")
} else {
    console.log("NÃO TEM CHANCE DE ESTAR VICIADA")
}