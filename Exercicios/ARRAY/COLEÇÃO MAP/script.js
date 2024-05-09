// A grande caracteristica das coleções map é a adição chave / valor

// Eementos do Map()
// get = obter um elemento
// set = permite definir / adicionar um elemento na coleção
// clear = 
// delete = limpar, deletar a coleção
// entries = as entradas da coleção
// forEach = looping para percorrer os elementos da coleção
// has = verifica se existe algum elemento na minha coleção
// keys = obtem as chaves da coleção
// size = tamanho / quantidade de conjuntos  elementos: chave/valor qeu tenho na coleção 
// values = valores da coleção

const caixa = document.querySelector('#caixa')

let mapa = new Map()

mapa.set('curso','javascript') //A sintaxe da coleção Map()(cave / valor)
mapa.set(10,'CFB Cursos')
mapa.set('1',100)
mapa.set('canal',50)

//console.log(mapa)
mapa.delete(10) // Deleta o elemento de chave '1' , obs, tem que estar com o mesmo tipo da chave

let escolha = '1';
let resultado = "";

if (mapa.has(escolha)) {
    resultado = `A chave ${escolha} está na coleção, com o valor: ${mapa.get(escolha)}!!`;    
} else {
    resultado = `A chave ${escolha} NÃO está na coleção!`;
}

resultado += "<br/> O tamanho da coleção é: " + mapa.size;
caixa.innerHTML = resultado;

mapa.forEach((el)=>{
    console.log(el)
})

console.log(mapa)