import leia from 'readline-sync'

var placa = leia.questionInt("DIGITE O FINAL DA PALACA DE SEU CARRO: ")

    switch (placa) {
        case 0:
        case 1:
            console.log("NÃO PODE RODAR NA SEGUNDA");
            break;
        case 2:
        case 3:
            console.log("NÃO PODE RODAR NA TERÇA");
                break;
        case 4:
        case 5:
            console.log("NÃO PODE RODAR NA QUARTA");
                break;
        case 6:
        case 7:
            console.log("NÃO PODE RODAR NA QUINTA")
                break;
        default:
            console.log("NÃO PODE RODAR NA SEXTA")
            break;












    }