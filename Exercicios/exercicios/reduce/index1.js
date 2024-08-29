// SINTAXE: array.reduce(callback[, initialValue]); é um iterador sobre arrays

const numeros = [4, 8, 3, 4, 5];

const soma = numeros.reduce(/*função de callback*/(acumulador, valorAtual) => {
    return acumulador + valorAtual;
}, 0);

console.log(soma); // Saída: 15