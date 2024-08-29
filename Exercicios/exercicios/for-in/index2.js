// Programa que adiciona somente as propriedades de um objeto a um array

const carro = {
    marca: 'Chevrolet',
    modelo: 'Onix',
    ano: '2022',
  }
  
  function percorrer(obj) {
    const chaves = []; 
    for (let prop in obj) {
      chaves.push(prop);
    }
    return chaves; 
  }
  
 console.log(percorrer(carro))