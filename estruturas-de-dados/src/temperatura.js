

var menores = [];
var maiores = [];

for (var i = 0; i < 2; i++) {
    var num1 = parseInt(Math.random()) * (35 - 12) + 12
    var num2 = parseInt(Math.random()) * (35 - 12) + 12
    if (num1 < num2) {
        maiores = num1
        menores = num2
    } else if (num1 > num2) {
        maiores - num2
        menores = num1
    }
}
console.log(menores)
console.log(maiores)