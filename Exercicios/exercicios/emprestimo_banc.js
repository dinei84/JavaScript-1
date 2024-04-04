//  VAMOS VER SE É APTO A FAZER O FINANCIAMENTO
//
//  REGRA: NÃO PODE ULTRAPASSAR 30% SO SALARIO

var cliente = 'Dinei'
var salario = 50.000
var empr = 150.000
var mesesap = 144
var jurosaa = 9.5

var limite = salario * 0.3
var j = (empr * jurosaa * mesesap) / 100
var m = empr + j
var parcelas = m / mesesap

parcelas = parseFloat(parcelas.toFixed(3))

if (parcelas > limite){
    console.log(`O cliente ${cliente}, ultrapassou 30% do salário em parcelas e não está apto a fazer o empréstimo!!`)
}else{
    console.log(`O Cliente ${cliente} está apto a fazer o emprestimo! sua parcela ficara com o valor de: ${parcelas}`)
}