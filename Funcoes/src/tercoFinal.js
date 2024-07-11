export function preencherVetor(tamanhoVetor, min, max) {
    var vetor = [];
    for (var i = 0; i < tamanhoVetor; i++) {
        vetor[i] = parseInt(Math.random() * (max - min)) + min
    }
    return vetor;
}
var vResultado = [];

function obterItensVetor(vetor, vResultado, min, max) {
    for (var i = min; i <= max; i++) {
        vResultado[i] = vetor[i];
    }
    return vResultado;
}
var v1 = preencherVetor(9, 0, 100)
var v2 = preencherVetor(9, 0, 100)
var v3 = preencherVetor(9, 0, 100)

/*for (var i = 0; i < v1.length; i++) {
    if (i >= 0 && i <= 2) {
        vResultado[i] = v1[i]
    } else if (i >= 3 && i <= 5) {
        vResultado[i] = v2[i]
    } else if (i >= 6 && i <= 8) {
        vResultado[i] = v3[i]
    }
}*/
var vResultado = []
vResultado = obterItensVetor(v1, vResultado, 0, 2);
vResultado = obterItensVetor(v2, vResultado, 3, 5);
vResultado = obterItensVetor(v3, vResultado, 6, 8);

console.log(v1)
console.log(v2)
console.log(v3)
console.table(vResultado)