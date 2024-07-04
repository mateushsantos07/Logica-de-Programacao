/*var lista = []

for (var i = 0; i < 10; i++) {
    lista.push(parseInt(Math.random() * 30))
}*/

/*var lista2 = [];
for (var i = lista.length -1; i >= 0; i--) {
    lista2.push(lista[i]);
}

console.log(lista)
lista = lista2;
console.log(lista)*/

/*console.log(lista)
var inicio = 0
var fim = lista.length - 1;
while (inicio < fim) {
    var aux = lista[inicio];
    lista[inicio] = lista[fim];
    lista[fim] = aux;

    inicio++;
    fim--;
}
console.log(lista)*/

var lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var lista2 = [];

for (var i = lista.length - 1; i > 0; i--) {
    lista2.push(lista[i])
}

console.log(lista)
lista = lista2;
// OU lista.reverse();

console.log(lista)