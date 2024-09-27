// Função que conta a quantidade de elementos de um array

function countFruits(fruits) {
    return fruits.reduce((acc, fruit) => {
      acc[fruit] = (acc[fruit] || 0) + 1;
      return acc;
    }, {});
  }
  
  module.exports = countFruits;
  
  // Exemplo de uso:
  // const fruits = ['apple', 'banana', 'orange', 'apple', 'orange', 'banana'];
  // console.log(countFruits(fruits)); // Saída: { apple: 2, banana: 2, orange: 2 }