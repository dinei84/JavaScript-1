//   VAMOS CALCULAR O ALUGUEL DE VEICULOS POPULARES E DE LUXO
//
//  REGRA: POPULAR R$90,00 / DIA
//  ATE 100KM R$0,20 / KM
//  ACIMA DE 100KM R$ 0,10 / KM 

//  REGRA: LUXO R$150,00 / DIA
//  ATE 200KM R$0,30 / KM
//  ACIMA DE 200KM R$ 0,25 / KM 

let cliente = 'Dinei'
let tipoveiculo = 'Popular'
let dia = 4
let kmrodado = 150
let kmtotal

if (tipoveiculo == 'Popular') {
    if (kmrodado > 100) {
        kmtotal = (dia * 90) + ((kmrodado - 100) * 0.1)
        console.log(`O cliente rodou um total de ${kmrodado}km`)
        console.log(`O Cliente ${cliente}, excedeu a quantidade mínima de km`)
        console.log(`O total em R$ por km rodado foi: R$${(kmrodado - 100) * 0.1}`)
        console.log(`Total a pagar: R$${kmtotal}`)
    } else {
        kmtotal = dia * 90
        console.log(`O cliente rodou um total de ${kmrodado}km`)
        console.log(`O cliente ${cliente}, alugou o carro por ${dia} dias`)
        console.log(`O total a pagar é R$${kmtotal}`)
    }
}

if (tipoveiculo == 'Luxo') {
    if (kmrodado > 200) {
        kmtotal = (dia * 150) + ((kmrodado - 200) * 0.25)
        console.log(`O cliente rodou um total de ${kmrodado}km`)
        console.log(`O Cliente ${cliente}, excedeu a quantidade mínima de km`)
        console.log(`O total em R$ por km rodado foi: R$${(kmrodado - 200) * 0.25}`)
        console.log(`Total a pagar: R$${kmtotal}`)
    } else {
        kmtotal = dia * 150
        console.log(`O cliente rodou um total de ${kmrodado}km`)
        console.log(`O cliente ${cliente}, alugou o carro por ${dia} dias`)
        console.log(`O total a pagar é R$${kmtotal}`)
    }
}