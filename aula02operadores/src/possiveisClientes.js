import leia from 'readline-sync'

var pcl = leia.question("DIGITE O NOME DO PRIMEIRO CLIENTE QUE COMPROU NA LOJA : ");

var pcg = leia.questionInt("DIGITE QUANTO O PRIMEIRO CLIENTE GASTOU NA LOJA : ");

var scl = leia.question("DIGITE O NOME DO SEGUNDO CLIENTE QUE COMPROU NA LOJA : ");

var scg = leia.questionInt("DIGITE QUANTO O SEGUNDO CLIENTE GASTOU NA LOJA : ");

var vtp = pcg + scg;
var vm = vtp / 2;

if (pcg > 20) {
    console.log(pcl + " FEZ UMA COMPRA ACIMA DE R$20" + "\n")
}

if (scg > 20)
    console.log(scl + " FEZ UMA COMPRA ACIMA DE R$20" + "\n");

console.log("O VALOR TOTAL PAGO PELOS DOIS CLIENTES SÃO: " + "R$" + vtp + "\n");
console.log("O VALOR MEDIO DAS COMPRAS SÃO DE: " + "R$" + vm + "\n");