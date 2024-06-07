import leia from 'readline-sync'

var senha = leia.questionInt("DIGITE A SENHA: ")
    
    if (senha === 1234){
        console.log("ACESSO PERMITIDO ")
    }else{
        console.log("ACESSO NEGADO ")
    }