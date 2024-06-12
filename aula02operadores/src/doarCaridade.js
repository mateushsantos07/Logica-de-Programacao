import leia from 'readline-sync'

var qdoada = leia.questionInt("QUANTO VC QUER DOAR?")

    if(qdoada === 10){
        console.log("VOCE DOOU R$10, OBRIGADO PELA DOACAO" )
    } else if(qdoada === 25){
        console.log("VOCE DOOU R$25, OBRIGADO PELA DOACAO" )
    } else if(qdoada === 50){
        console.log("VOCE DOOU R$50, OBRIGADO PELA DOACAO" )
    } else {
        console.log("VOCE DOOU " + qdoada + ", OBRIGADO PELA DOACAO")
    }