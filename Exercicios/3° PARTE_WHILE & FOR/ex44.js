let inicial = 10
let final = 0
let passo = 1

if (inicial < final) {
    while (inicial < final) {
        console.log(inicial)
        inicial = inicial + passo
    }
} else {
    while (final < inicial) {
        console.log(final)
        final = final + passo
    }
}
console.log('Acabou!')
