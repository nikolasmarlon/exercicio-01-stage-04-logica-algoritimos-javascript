/**
 * 
 *   você irá solicitar ao usuário que ele insira dois números e, a partir daí, calcular:
 * 
    - [ ]  A soma dos dois números;
    - [ ]  A subtração dos dois números;
    - [ ]  A multiplicação dos dois números;
    - [ ]  A divisão dos dois números;
    - [ ]  O resto da divisão dos dois números;

    Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

    - [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
    - [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.
 */


let primeiroNumero = Number(prompt('Informe o primeiro número: '))
let segundoNumero = Number(prompt('Informe o segundo número: '))

let soma = primeiroNumero + segundoNumero
let subtracao = primeiroNumero - segundoNumero
let multiplicacao = primeiroNumero * segundoNumero
let divisao = primeiroNumero / segundoNumero
let restoDivisao = primeiroNumero % segundoNumero

function parOuImpar(numero){
    let par = 'os números são impares'
    if(numero % 2 === 0){
        par = 'os números são pares'
    }    
}


function verificarIgualdade(numero1, numero2){
    let iguais = 'Os números são diferentes'
    if(numero1 === numero1){
        iguais = "Os números são iguais"
    }
}

console.log(soma)
console.log(subtracao)
console.log(multiplicacao)
console.log(divisao)
console.log(restoDivisao)