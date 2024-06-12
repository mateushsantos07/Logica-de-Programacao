import leia from 'readline-sync'

var gum = leia.questionInt("FALE QUANTOS GOLS O PIRMEIRO TIME FEZ: ")
var gdois = leia.questionInt("FALE QUANTOS GOLS O SEGUNDO TIME FEZ: ")

var dg = gum - gdois;

switch (dg){
    case 0:
        console.log("EMPATE")
            break;
    case 1:
    case 2:
    case 3:
        console.log("PARTIDA NORMAL")
            break;
    default:
        console.log("GOLEADA")
            break;
}
