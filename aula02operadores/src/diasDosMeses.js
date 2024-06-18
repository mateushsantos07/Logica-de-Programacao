/*No nosso ano, temos meses que tem 31, 30 e 29/28 dias. Crie um programa que ao receber um
número inteiro representando o mês ele informe quantos dias tem esse mês.*/

import leia from "readline-sync"

var mes = leia.questionInt("DE QUAL MES VOCE QUER SABER QUANTOS DIAS TEM?: ")

switch (mes) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 11:
        console.log("ESSE MES TEM 31 DIAS");
        break;
    case 4:
    case 6:
    case 9:
    case 12:
        console.log("ESSE MES TEM 30 DIAS");
        break;
    default:
        console.log("ESSE MES TEM 29 DIAS")
        break;
}