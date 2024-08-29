// Programa que filtra produtos mais caros que um valir expecificado

const produtos = {
    maçã: 15,
    banana: 25,
    pera: 23,
    malancia: 11,
    abacate: 14,
};

function filtrarProdutosCaros(obj, valorLimite) {
    let produtosCaros = {}
    for (const prop in obj) {
        if (obj[prop] > valorLimite) {            
            produtosCaros[prop] = obj[prop] 
        }
    }
    return produtosCaros;
}

const produtosCaros = filtrarProdutosCaros(produtos, 20.0);
console.log(produtosCaros);
