import leia from 'readline-sync'

/*var estacarregando = true;
var porc = 0;

while (estacarregando) {
    console.log(porc + "% CARREGANDO...");
    if (porc < 1000000) {
        porc += 5;
    } else {
        estacarregando = false;
    }
}*/

/*var nota = leia.questionFloat("DIGITE A NOTA: ");
while (nota < 0.0 || nota > 10.0) {
    console.log("NOTA INVALIDA")
    nota = leia.questionFloat("DIGITE UMA NOVA NOTA: ")
}
console.log("NOTA VALIDA");*/

    /*ACRESCENTAÇÃO DE NUMERO
for (var i = 0; i < 10; i++) {
    console.log("VALOR DE I = " + i)

}

var j = 0;
while (j < 10) {
    console.log("VALOR DE J = " + j)
    j++;
}*/

    /*TABUADA
var numero = leia.questionInt("DIGITE UM NUMERO: ")

var multiplicador = 0;
while (multiplicador <= 10) {
    console.log(numero + " X " + multiplicador + " = " + (multiplicador * numero))
    multiplicador++;
}

for(var i = 0; i <=100; i++){
    console.log(i * numero)
}*/

    /*PLACA DO CARRO
var PLACA = leia.question("DIGITE PLACA: ")

for(var i = 0; i < PLACA.length; i ++){
    console.log(PLACA[i])
}*/

/*var j = 0;
do {
    console.log(j)
    j++;
}while (j < 10)*/

var n1 = leia.questionInt("DIGITE PRIMEIRO NUMERO: ")
var n2 = leia.questionInt("DIGITE SEGUNDO NUMERO: ")
var passos = leia.questionInt("NUMEROS DE PASSOS: ")

for(var i = n1; i<=n2; i+= passos){
    console.log(i);
}