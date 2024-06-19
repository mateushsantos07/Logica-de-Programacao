import leia from 'readline-sync'

var anobi = leia.questionInt("DIGITE UM ANO: ")

    if(anobi % 4 === 0 && !(anobi % 100 === 0) || (anobi % 400 === 0 )){
        console.log(" ANO BISSEXTO ")
    }else{
        console.log("NAO E BISSEXTO")
    }