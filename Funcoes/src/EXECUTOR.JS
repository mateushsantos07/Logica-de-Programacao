import leia from 'readline-sync'
import { tercoFinal } from './tercoFinal.js'
import { valorDuplicado } from './valorDuplicado.js'
import { solicitarPares } from './solicitarPares.js'

var opcao = leia.keyInSelect(["EXERCICIO 01", "EXERCICIO 02", "EXERCICIO 3"]) + 1

switch (opcao) {
    case 1:
        tercoFinal();
        break;
    case 2:
        valorDuplicado();
        break;
    case 3:
        solicitarPares();
        break;
}
