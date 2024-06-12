/*Faça um programa de computador que realiza o cálculo do salário dos funcionários que é
composto por um salário fixo mais uma certa porcentagem pela qtd de dependentes do
funcionário. Solicite o nome do funcionário, salário fixo e também a quantidade de
dependentes e por fim exiba o seu salário final.
0 Dependente 2%
1 Dependente 5%
2 Dependentes 7%
3 Dependentes 10%
4 ou mais dependentes 15%*/

import leia from 'readline-sync'
 
var sf = leia.questionInt("QUANTO E SEU SALARIO? ")
var qd = leia.questionInt("QUANTOS DEPENDENTES VC TEM? ")

    if (qd === 0){
        var dzero = sf * 0.02;
        console.log("SEU SALARIO E: " + (sf + dzero))
    } else if(qd === 1){
        var dum = sf * 0.05;
        console.log("SEU SALARIO E DE: " + (sf + dum))
    } else if(qd === 2){
        var ddois = sf * 0.07;
        console.log("SEU SALARIO E DE: " + (sf + ddois))
    } else if (qd === 3){
        var dtres = sf * 0.10;
        console.log("SEU SALARO E DE: " + (sf + dtres))
    } else { 
        var d4mais = sf * 0.15;
        console.log("SEU SALARIO E DE: " + "R$" + (sf + d4mais))
    }

