import leia from 'readline-sync'

var notafinal = leia.questionFloat("DIGITE SUA NOTA FINAL DE 0 A 10: \n")

if (notafinal < 0) {
    console.log("NOTA INVALIDA")
} else if (notafinal > 10) {
    console.log("NOTA INVALIDA")
} else if (notafinal >= 9) {
    console.log("A")
} else if (notafinal >= 8) {
    console.log("B")
} else if (notafinal >= 7) {
    console.log("C")
} else if (notafinal >= 6) {
    console.log("D")
} else if (notafinal < 6) {
    console.log("F")
} 