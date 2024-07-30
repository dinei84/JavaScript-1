const converterTemperatura = ()=>{
    if(unidade == 'C'){
        celsius = (fahrenheit - 32) / 1.8
        return celsius.toFixed(1)
    }else if(unidade == 'F'){
        fahrenheit = (celsius * 1.8) + 32
        return fahrenheit.toFixed(1)
    }else{
        alert('Nenhuma unidade encontrada')
    }
}

console.log(`Conversão de Fahrenheit para Celcius`,converterTemperatura(fahrenheit = 100 , unidade = 'C'))
console.log(`Conversão de Celcius para Fahrenheit`,converterTemperatura(celsius = 50, unidade = 'F'))
