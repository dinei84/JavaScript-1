// percorre o objeto e transforma em um array

const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];

const names = users.reduce((acc, user) => {
    acc.push(user.name);
    return acc;
}, []);

console.log(names); // Saída: ['Alice', 'Bob', 'Charlie']