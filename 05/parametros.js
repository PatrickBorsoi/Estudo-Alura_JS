//parâmetros de função

// function soma(num1, num2){
//     return num1 + num2;
// }

// console.log(soma(32, 20))
// console.log(soma(-322, 20))


//parametros X argumentos

//ordem dos parametros

// function nomeIdade(nome, idade){
// return `meu nome é ${nome} e tenho ${idade} anos de idade`;
// }

// console.log(nomeIdade("Patrick", 24))

// function multiplica(num1, num2){
//     return num1 * num2;
// }

// console.log(multiplica(soma(4, 5), soma(3, 3)))

            // pode receber somente 1 parametro
// function multiplica(num1 = 1, num2 = 1){
//     return num1 * num2;
// }

// console.log(multiplica(soma(4, 5)))

//mais exemplos de funções

function cumprimentaPessoa(pessoa){
    console.log(`oi, ${pessoa}!`)
}
   
cumprimentaPessoa('Helena')

function cumprimentar(){
    return 'Oi gente!'
   }
   
   function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
   }
   
   cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”
