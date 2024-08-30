// Função que conta a quantidade de elementos de um array

const fruits = ['apple', 'banana', 'orange', 'apple', 'orange', 'banana'];

const countFruits = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});

console.log(countFruits); // Saída: { apple: 2, banana: 2, orange: 2 }