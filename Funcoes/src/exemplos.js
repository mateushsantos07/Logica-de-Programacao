import leia from "readline-sync"

import { preencherVetor } from '.exemplos.js';  //PARA IMPORTAR A FUNÇÃO EM OUTRO ARQUIVO


function mostrar() {
    var nome = leia.question("Digite um nome: ")
    console.log("Ola, " + nome)
}


function somar(num1, num2) {
    var num1 = leia.questionInt("Digite o Numero: ");
    var num2 = leia.questionInt("Digite o Numero: ");
    var result = num1 + num2;
    console.log("O Resultado e: " + result);
}

function subtrair(num1, num2) {
    var result = num1 - num2;
    console.log("O Resultado e: " + result);
}

function multi(num1, num2) {
    var result = num1 * num2;
    return result;
}

function preencherVetor(tamanhoVetor, min, max) {
    var vetor = [];
    for (var i = 0; i < tamanhoVetor; i++) {
        vetor[i] = parseInt(Math.random() * (max - min)) + min  //PARA DEFINIR OS VALORES MAXIMOS E MINIMOS
    }
    return vetor;
}

var vetor = preencherVetor(10, 50, 200)
console.log(vetor)


somar();
subtrair(10, 5)
var Resultado = multi(5, 5)
console.log(Resultado)
mostrar();

export function preencherVetor(tamanhoVetor, min, max) {
    var vetor = [];
    for (var i = 0; i < tamanhoVetor; i++) {
        vetor[i] = parseInt(Math.random() * (max - min)) + min  //PARA DEFINIR OS VALORES MAXIMOS E MINIMOS
    }
    return vetor;
}

export function verificarNumerosIguais(tamanhoVetor, min, max) {
    var vetor = [];
    for (var i = 0; i < tamanhoVetor; i++) {
        do {
            var numeroGerado = gerarNumero(max, min)
            var jaGerou = verificarNumerosIguais(vetor, numeroGerado);
        } while (jaGerou)
        vetor[i] = numeroGerado;

        return vetor;
    }

    function gerarNumero(max, min) {
        return parseInt(Math.random() * (max - min)) + min
    }

    function verificarNumerosReptido(vetor, numeroGerado) {
        for (var j = 0; j < vetor.length; j++) {
            if (vetor[j] === numeroGerado) {
                return true;
            }
        }
    }
    return false;
}

export function obterItensValor(vetor, vResultado, min, max) {
    for (var i = min; i < max; i++) {
        vResultado[i] = vetor[i];
    }
    return vResultado;
} 
    /*SIMPLIFICAÇÃO DO DEBAIXO
for (var i = 0; i < v1.length; i++) {
    if (i >= 0 && i <= 2) {
        vResultado[i] = v1[i]
    } else if (i >= 3 && i <= 5) {
        vResultado[i] = v2[i]
    } else if (i >= 6 && i <= 8) {
        vResultado[i] = v3[i]
    }
}*/