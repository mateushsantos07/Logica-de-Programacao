var nomes = []
var medias = []

function solicitarMedia(){
var i = 0;

while (i < 3) {
    nomes[i] = leia.question("QUAL O SEU NOME " + (i + 1) + " : ")
    somaNotas = 0.0;
    for (var j = 1; j <= 3; j++) {
        somaNotas += leia.questionFloat("DIGITE A SUA NOTA 0" + j + " : ");
    }
    return somaNotas / 3;
}
    if (maiorMedia === undefined /*OU !maiorMedia sem o undefined*/ || media > maiorMedia) {
        maiorMedia = media;
        nomeMaiorMedia = alunos;
    }
    i++
}
for (var i = 0; i < medias.length; i++) {
    if (!maiorMedia || medias[i] > maiorMedia) {
        maiorMedia = medias[i];
        nomeMaiorMedia = nomes[i];
    }

}
/*    OU
medias.forEach((media, index) => {
    if (maiorMedia || item > maiorMedia) {
        maiorMedia = medias;
        nomes = nomes[index];
    }
})*/

console.log("ESTUDANTE COM MAIOR MEDDIA FOI: " + nomes + " COM " + medias)


