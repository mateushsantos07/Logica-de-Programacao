import leia from "readline-sync"

var palavra = leia.question("DIGITE PALAVRA OU TEXTO");
var palavraInvertida = "";


for( var i = palavra.length - 1; i >=0; i--){
    palavraInvertida = palavraInvertida + palavra[i];
}

if(palavra=== palavraInvertida){
    console.log("É PALINDROMO")
} else {
    console.log("NÃO É PALINDROMO")
}