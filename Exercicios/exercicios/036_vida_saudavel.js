// 36) Um programa de vida saudável quer dar pontos atividades físicas que podem 
// ser trocados por dinheiro. O sistema funciona assim:
//  - Cada hora de atividade física no mês vale pontos
//  - até 10h de atividade no mês: ganha 2 pontos por hora
//  - de 10h até 20h de atividade no mês: ganha 5 pontos por hora
//  - acima de 20h de atividade no mês: ganha 10 pontos por hora
//  - A cada ponto ganho, o cliente fatura R$0,05 (5 centavos)

let hrpontos = 0
let hrpremio = 0
let hr = 25

if(hr < 10){
    hrpontos = hr * 2
    hrpremio = hrpontos * hr
}else if(hr > 10 && hr <= 20 ){
    hrpontos = hr * 5
    hrpremio = hrpontos * hr
}else{
    hr > 20
    hrpontos = hr * 10
    hrpremio = hrpontos * hr
}

console.log(`Você fez ${hr} horas, ${hrpontos} pontos e sua premiação é de ${hrpremio}`)