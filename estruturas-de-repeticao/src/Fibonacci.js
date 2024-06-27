import leia from 'readline-sync'

var num = leia.questionInt("DIGITE ATE QUAL VALOR QUER: ")
var anterior = 1;
var atual = 1;

for (var i = 3; i <= num; i++) {
    var next = anterior + atual;
    console.log(anterior + " + " + atual + " = " + next);
    anterior = atual;
    atual = next;
}