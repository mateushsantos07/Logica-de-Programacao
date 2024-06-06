import leia from "readline-sync"

console.log("INFORME O VALOR DAS 5 CORRIDAS ");
var c1 = Number(leia.prompt());
var c2 = Number(leia.prompt());
var c3 = Number(leia.prompt());
var c4 = Number(leia.prompt());
var c5 = Number(leia.prompt());

var vb = c1 + c2 + c3 + c4 + c5;
var vl = vb - (vb * 0.25);
console.log("O VALOR ARRECADADO PELO MOTORISTA FOI DE R$" + vl);
