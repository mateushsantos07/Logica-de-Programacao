import leia from 'readline-sync'

export function gabarito(){
    var opcao = ["A", "B", "C", "D", "E"]
    var gabarito = []
    var respostaAluno = []
    var nota = 0

    for(var i =0; i <10; i++){
        gabarito[i] = leia.question("INFORME A RESPOSTA DA QUESTAO: " + (i + 1) + " ")
    }

    console.log("digite sua resposta")
    for(var i =0; i <10; i++){
        respostaAluno[i] = leia.question("INFORME A QUESTAO " + (i + 3) + " ")
    }
    for(var i =0; i <gabarito.length; i++){
        if(gabarito[i] === respostaAluno[i]){
            nota++
        }
    }
    console.table(gabarito)
    console.table(respostaAluno)
    console.log(nota)
}