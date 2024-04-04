//    DOAÇÃO DO CRIAÇA ESPERANÇA

// [1] PARA DOAR 10 REAIS
// [2] PARA DOAR 20 REAIS
// [5] PARA DOAR 50 REAIS
// [10] PARA DOAR 100 REAIS

let doacao = 10
let valor  

switch (doacao){
    case 1:
        valor = "R$10,00"
        break
    case 2:
        valor = "R$20,00"
        break
    case 5:
        valor = "R$50,00"
        break
    case 10:
        valor = "R$100,00"
        break
    default:
        valor = ""
}

console.log (`O valor doado foi de ${valor} reais`)

if (valor === "") {
    console.log(`Esse valor não existe, por favor insira um valor correto!!`)    
}else{
    console.log(`Muito obrigado pela ligação`)
}