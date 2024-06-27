import leia from 'readline-sync'


var num = leia.questionInt("DIGITE UM NUMERO PARA SER FATORADO ")
var result = 1;
var aux = num;

while (num > 0){
    result = result * num;
    num--
}
console.log( "FATORIAL DE " + aux + " E: " + result)