import leia from 'readline-sync'

var lista = []

/*lista[0] = "Cleber";

console.log(lista[0])

console.log(lista.length)

lista.push("Vai dar ruim")

console.log(lista[3])*/

/*for (var i = 0; i < 10; i++) {
    lista[i] = leia.question("DIGITE UM NOME: ")
}*/

var i = 4;
while(i >= 0){
    lista[i] = leia.question("DIGITE UM NOME: ")
    i--;
} 

    // PARA PERCORRER A LISTA
/*var soma = 0

for (var j = 0; j < lista.length; j++) {
    console.log(lista[j])
    soma += lista[j];
}*/

        //PARA PERCORRER A LISTA ESPECÍFICO PARA VETORES

for(let valor of lista){
    if(valor.includes("eus")){
        console.log(valor)
    }
}    
