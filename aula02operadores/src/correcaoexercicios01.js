import leia from 'readline-sync'

var valorproduto = leia.questionFloat("DIGITE O VALOR DO PRODUTO DESEJADO: \n")

if (valorproduto < 20) {
    var valorlucro = valorproduto * 0.45;
    var valorfinal = valorproduto + valorlucro
    console.log("VALOR DE VENDA: " + valorfinal)
} else {
    var valorlucro = valorproduto * 0.30;
    var valorfinal = valorproduto + valorlucro
    console.log("VALOR DE VENDA: " + valorfinal)
}

