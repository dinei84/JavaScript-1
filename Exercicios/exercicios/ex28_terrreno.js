//  VAMOS CALCULAR A METRAGEM DO TERRENO E CLASSIFICALO
// MEDIDA:
// - Abaixo de 100m² = TERRENO POPULAR
//  - Entre 100m² e 500m² = TERRENO MASTER
//  - Acima de 500m² = TERRENO VIP

var larg = 25
var comp = 55
var area = larg * comp

if (area < 100){
    console.log(`O terreno tem ${area}m2 e é um TERRENO POPULAR!`)
}else if (area > 100 && area < 500){
    console.log(`O terreno tem ${area} e é um TERRENO MASTER!`)
}else {
    console.log(`O terreno está acima de 500m2 e é um terreno VIP!!`)
}
