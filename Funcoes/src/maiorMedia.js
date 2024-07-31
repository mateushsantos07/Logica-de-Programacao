import leia from "readline-sync"

export function mediaAlunos() {
    var nomeMaiorMedia;
    var maiorMedia;
    var i = 1;
    while (i <= 10) {
        var alunos = leia.question("QUAL O SEU NOME " + i + " : ")
        var somaNotas = 0.0;
        for (var j = 1; j <= 3; j++) {
            somaNotas += leia.questionFloat("DIGITE A SUA NOTA 0" + j + " : ");
        }
        var media = somaNotas / 3;

        if (maiorMedia === undefined /*OU !maiorMedia sem o undefined*/ || media > maiorMedia) {
            maiorMedia = media;
            nomeMaiorMedia = alunos;
        }
        i++
    }
    console.log("ESTUDANTE COM MAIOR MEDDIA FOI: " + nomeMaiorMedia + " COM " + maiorMedia)
}
mediaAlunos()