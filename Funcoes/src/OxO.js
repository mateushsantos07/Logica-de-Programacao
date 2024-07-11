var matriz = [[]]
var maioresQueDez = [];

for (var i = 0; i < 8; i++) {
    matriz[i] = [];
    for (var j = 0; j < 8; j++) {
        matriz[i][j] = parseInt(Math.random() * 100);
        if (matriz[i][j] > 10) {
            maioresQueDez.push(matriz[i][j])
        }
    }

console.table(matriz)
console.log(maioresQueDez)
}