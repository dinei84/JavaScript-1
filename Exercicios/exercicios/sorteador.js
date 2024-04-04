// Importando o módulo 'random' da biblioteca padrão de Node.js
const { randomInt } = require('crypto');

// Definindo os participantes
const participantes = [
    'Joao', 'Pedro', 'Ton', 'Dinei', 'Thiago', 
    'Geovane', 'Fernanda', 'Vini', 'Lipe', 'Eliana'
];

// Gerando um número aleatório de 1 a 10
const num = randomInt(1, 11);

// Exibindo o número escolhido e o respectivo participante
console.log(`O número escolhido é ${num} e corresponde a ${participantes[num - 1]}`);