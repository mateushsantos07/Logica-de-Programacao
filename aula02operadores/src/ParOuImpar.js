import leia from 'readline-sync'

var parouimpar = leia.questionInt("DIGITE UM NUMERO: ")

    if(parouimpar % 2 === 0){
        console.log("PAR ")
    }else{
        console.log("IMPAR")
    }