// Codigo percorre um array e verifica qual deles é menor usando o reduce e um op ternario

const numbers = [10, 5, 48, 20, 15];

const maximunNumber = numbers.reduce((number, newNumber)=>{
  return (newNumber > number ? newNumber : number) 
},numbers[0])

console.log(maximunNumber)