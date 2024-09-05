// Programa para ler um array de objetos e procurar o valor especificado, e tambem procurar a maior idade

const cadastro = [
    {
      nome: 'Dinei',
      idade: '40',
      profissão: 'programador'
    },
    {
      nome: 'Fernanda',
      idade: '36',
      profissão: 'Vendas'
    },
    {
      nome: 'Vini',
      idade: '12',
      profissão: 'Estudante'
    },
    {
      nome: 'Felipe',
      idade: '7',
      profissão: 'Estudante'
    }
  ];
  
  function cadastroDePessoas(cadastro) {
    return cadastro.reduce((prev, curr) => {
      return [...prev, curr.profissão];
    }, []);
  }
  
  function maiorIdade(idades) {
    return idades.reduce((maiorIdadeAtual, idade) => {
      return (idade > maiorIdadeAtual ? idade : maiorIdadeAtual);
    }, 0);
  }
  
  const idades = cadastro.map(pessoa => parseInt(pessoa.idade));
  const idadeMaior = maiorIdade(idades);
  
  console.log(`A maior idade encontrada no cadstro foi: ${idadeMaior}`); // Corrige a chamada da função e exibe o resultado correto
  console.log(cadastroDePessoas(cadastro))