import leia from 'readline-sync'

/*var estacarregando = true;
var porc = 0;

while (estacarregando) {
    console.log(porc + "% CARREGANDO...");
    if (porc < 100) {
        porc += 5;
    } else {
        estacarregando = false;
    }
}*/

var nota = leia.questionFloat("DIGITE A NOTA: ");
while(nota < 0.0 || nota > 10.0){
    console.log("NOTA INVALIDA")
    nota = leia.questionFloat("DIGITE UMA NOVA NOTA: ")
}
console.log("NOTA VALIDA");