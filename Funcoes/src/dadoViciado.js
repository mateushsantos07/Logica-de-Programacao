import { preencherVetor } from "./exemplos.js";

export function dadoViciado() {
    var jogadas = preencherVetor(1000, 1, 7);
    var qtdLados = [0, 0, 0, 0, 0, 0, 0];
    var porcLados = [];

    for (var i = 0; i < jogadas.length; i++) {
        qtdLados[jogadas[i]]++;
    }

    for (var i = 1; i < qtdLados.length; i++) {
        porcLados[i] = 100 / jogadas.length * qtdLados[i];
    }

    for (var i = 1; i < porcLados.length; i++) {
        if (porcLados[i] > 22) {
            console.log("DADO VICIADO!!!!")
        }
    }
    console.table(porcLados)
}
dadoViciado()