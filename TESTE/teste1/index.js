let numeros = [10.0, 15.5, 13.2, 9.8]
let abaixo = []

let soma = 0

for (let i = 0; i < numeros.length; i++){    
    soma += numeros[i];
}

let media = soma / numeros.length;

for (let index = 0; index < numeros.length; index++) {
    if (numeros[index] !== 0 && numeros[index] < media) {
        abaixo[index] = numeros[index]
    }
}
console.log(media)
console.log(abaixo)
