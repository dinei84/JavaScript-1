const numbers = [1,2,3,4,5,'Dinei','Fernanda']


const result = numbers.filter(item1 => 
    typeof item1 === 'string'
)

const result2 = numbers.filter(item =>
    typeof item == 'number'
)

console.log(result.length)
console.log(result2)