import leia from "readline-sync"

var a = leia.questionInt("INFORME A 1 NOTA: ")
var b = leia.questionInt("INFORME A 2 NOTA: ")
var c = leia.questionInt("INFORME A 3 NOTA: ")
var d = leia.questionInt("INFORME A 4 NOTA: ")
var e = leia.questionInt("INFORME A 5 NOTA: ")
var f = leia.questionInt("INFORME A 6 NOTA: ")

/*var maior = a;
var menor = a;

if (b > maior) { maior = b }
if (c > maior) { maior = c }
if (d > maior) { maior = d }
if (e > maior) { maior = e }
if (f > maior) { maior = f }

if (b < menor) { menor = b }
if (c < menor) { menor = c }
if (d < menor) { menor = d }
if (e < menor) { menor = e }
if (f < menor) { menor = f }

var soma = a + b + c + d + e + f;
soma -= maior + menor;

var media = soma / 4;

console.log("A MAIOR NOTA É: " + maior);
console.log("A MENOR NOTA É: " + menor);
console.log("A MEDIA DAS NOTAS É: " + media);*/

var notas = [];
for (var i = 0; i < 6; i++) {
    notas.push(leia.questionInt(`DIGITE A ${i = 1}ª NOTA`));
}
var notasO = notas.sort();
for (var i = 1; i < 5; i++) {
    soma += notasO[i];
}

var media = soma / 4;
console.log(`MEDIA ${media}`);