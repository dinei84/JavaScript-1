// Programa para ler dois objetos e seus valores e fazer a soma deles

const frutas = {
    coco: 12,
    maçã: 8,
    melancia: 10
  };
  
  const frutasCaras = {
    melão: 120,
    abacate: 150,
    pera: 100
  };
  
  // Função para somar os valores de um objeto
  function somarValores(obj) {
    return Object.values(obj).reduce((acc, valor) => acc + valor, 0);
  }
  
  // Função para somar os valores de múltiplos objetos
  function somarFrutas(...objetos) {
    return objetos.reduce((total, obj) => total + somarValores(obj), 0);
  }
  
  // Chamada da função para somar os valores de frutas e frutasCaras
  const total = somarFrutas(frutas, frutasCaras);
  console.log(total); // Output: 400