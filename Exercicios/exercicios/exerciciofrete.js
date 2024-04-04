var valor = 200
var ped = 150
var peso = 48000
var vcd = ped / peso
var pcd = vcd * 1000
var res = valor - pcd
var vfcd = res * peso 
var corr = vfcd / 1000
var adianta = corr * 0.7
var corr2 = adianta * 0.014
var corr3 = adianta - corr2

console.log(`O valor do seu frete é de R$ ${res} reais por tonelada`)
console.log(`Seu adiantamneto é de R$ ${corr3} reais`)