const pessoa = {
    nome: "João",
    idade: 30,
    profissao: "Desenvolvedor",
    peso: 85,
    altura: 1.80
  };
  
  function contarPropriedades(obj) {
    let count = 0;
    for (let prop in obj) {
      count++;
    }
    return count;
  }
  
  const numProp = contarPropriedades(pessoa);
  console.log(numProp); // Output: 3
  