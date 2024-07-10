import leia from 'readline-sync'
import { exercicio1 } from '.tercoFinal.js';
import { exercicio2 } from '.solicitarPares.js'

var opcao = leia.keyInSelect(["EXERCICIO 01", "EXERCICIO 02"]) + 1

switch(opcao){
    case 1:
        exercicio1();
        break;
    case 2:
        exercicio2();
        break;
}
