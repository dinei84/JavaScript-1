// Percorrer o array dessa vez com uma função 

const numbers = [10,30,50,33,54,66,77,88,99,100];

function percorrer(numero){
  return numero.reduce((n1,n2)=>{
    return (n2 > n1 ? n2 : n1)
  },0)
}



console.log(percorrer(numbers))