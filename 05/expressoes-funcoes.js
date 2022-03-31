//declaração de função
// function apresentar() {
// return "ola"
// }


// expressão de fufnção
// const soma = function(num1, num2){ return num1 + num2}
// console.log(soma(1,1))

// diferença principal : HOISTING
// funções e variaveis sao "listadas" no topo do arquivo.
console.log(apresentar())

function apresentar() {
    return "ola"
}


// soma ainda nao foi declarada por isso nao funciona
console.log(soma(1,1))
const soma = function(num1, num2){ return num1 + num2};