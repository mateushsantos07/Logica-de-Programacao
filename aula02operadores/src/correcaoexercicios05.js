import leia from 'readline-sync'

var A = leia.questionInt("DIGITE O VALOR DO PRIMEIRO LADO DO TRIANGULO: \n")
var B = leia.questionInt("DIGITE O VALOR DO SEGUNDO LADO DO TRIANGULO: \n")
var C = leia.questionInt("DIGITE O VALOR DO TERCEIRO LADO DO TRIANGULO: \n")

if (A < (B + C) && B < (A + C) && C, (A + B)) {
    if (A === B && B === C && A === C) {
        console.log("EQUILATERO")
    } else if (A !== B && B !== C && A !== C) {
        console.log("ESCALENO ")
    } else {
        console.log("ISOCELES")
    }
} else {
    console.log("VALORES SÃO INVALIDOS")
}
