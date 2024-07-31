import leia from "readline-sync"

/*var a = leia.questionInt("DIGITE O PRIMEIRO NUMERO: ");
var b = leia.questionInt("DIGITE O SEGUNDO NUMERO: ");
var c = leia.questionInt("DIGITE O TERCEIRO NUMERO: ");

if( a < b && b < c ){
    console.log(a, b, c);
} else if( a < c && c < b){
    console.log(a, c, b)
} else if( b < a && a < c){
    console.log(b, a, c)
} else if( b < c && c < a){
    console.log(b, c, a)
} else if( c < a && a < b){
    console.log(c, a, b)
} else{
    console.log(c, b, a)
}*/

var numero = [];

for(var i = 0; i < 3; i++){
    numero[i] = leia.questionInt("INFORME O NUMERO " + (i+1) + ": ");

}

var numeroOrdenado = numero.sort();

console.log(numeroOrdenado)