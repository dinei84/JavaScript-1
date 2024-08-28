const produtos = {
    maçã: 5,
    banana: 10,
    pera: 25,
    goiaba: 40
  }
  
  function somar (obj){
    let soma = 0
    for (const chave in obj) {  
      soma += obj[chave];
    }
    return soma
  }
  
  const resultado = somar(produtos)
  console.log(resultado)