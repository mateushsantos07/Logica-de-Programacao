import leia from 'readline-sync'

var contador = 1;

while(contador <= 500){
    var valor = contador * 0.33;
    console.log(contador + " COPIA = R$  " + valor.toFixed(2) )
    contador++
}
