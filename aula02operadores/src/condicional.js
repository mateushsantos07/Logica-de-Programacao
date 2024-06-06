import leia from 'readline-sync'
//IF/ELSE
//sempre Verdadeiro ou Falso
//var numero = 1;

/*if (numero > 0) {
    console.log("NUMERO POSITIVO...")

} else if (numero < 0) {
    console.log("NUMERO NEGATIVO...")

} else {
    console.log("O NUMERO É ZERO...")
}*/

/*var x = 10;
if (x < 100) {
    console.log("MENOR QUE CEM");
} else if (x < 1000) {
    console.log("MENOR QUE MIL");
}*/

//SEMPRE COMPARA IGUALDADE
var codigoErro = leia.questionInt("DIGITE O CODIGO DO ERRO: ")
switch (codigoErro) {
    case 400:
    case 401:
    case 404:    
        console.log("HTTP CODE ERROR APLICATION")
        break;
    case 500:
    case 501:
    case 502:
        console.log("HTTP CODE - ERROR DE SERVIDOR")
        break;
    default:
        console.log("NÃO É ERRO")
        break;
}