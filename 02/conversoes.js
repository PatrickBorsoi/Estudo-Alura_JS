// tipo de dado
// booleanos

//conversão implícita
const numero = 456;
const numeroString = "456";
//console.log(numero == numeroString)
//console.log(numero + numeroString)

//conversão explícita

//number()
//String()
console.log(numero + Number(numeroString))

// teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings
//let telefone = 12341234;
//console.log("O telefone é " + String(telefone)); 
// o .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.
//let telefone = 12341234;
//console.log("O telefone é " + telefone.toString()); 

let usuarioConectado = false;
console.log(String(usuarioConectado)); // teremos a conversão da booleana para string, nesse caso teremos uma string “false”.
usuarioConectado = true;
console.log(String(usuarioConectado)); // agora teremos uma string “true”.