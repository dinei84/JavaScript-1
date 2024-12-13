const produtos = [
    {id: 1, nome: "SmarTV",categoria:"Eletrônicos",peso: 35 }
];

function adicionarProduto(id, nome, categoria, peso){
    const novoRegistro = {
        id: id,
        nome: nome,
        categoria: categoria,
        peso: peso
    };
    if(novoRegistro.length < produtos.length){
        return "Esta  faltando al";
    }

    produtos.push(novoRegistro)
}

function bucasrProdutoPorId(id){
    for(let i = 0; i < produtos.length; i++){
        if(produtos[i].id === id){
            return produtos[i];
        }
    }
    return null;
}

function listarProdutos(categoria){
    for(let i = 0; i < produtos.length; i++){
        if(produtos[i].categoria === categoria){
            console.log(produtos[i]);
        }
    }
}

function deletarPorId(){
    for(let i = 0; i < produtos.length; i++){
        if(produtos[i].id === id){
            produtos.splice(i, 1);
            return true;
        }
    }
    return false;
}

adicionarProduto(2, "Notebook", "Eletrônicos", 2.5);

console.log(produtos);