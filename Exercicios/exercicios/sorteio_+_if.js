function sample(array, size) {
    if (size > array.length) {
        throw new Error('O tamanho da amostra não pode ser maior que o tamanho do array.');
    }
    
    // Crie uma cópia do array original
    const shuffled = array.slice();
    
    // Implemente o algoritmo de Fisher-Yates para embaralhar o array
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    // Retorne uma amostra de tamanho 'size' do array embaralhado
    return shuffled.slice(0, size);
}

// Exemplo de uso:
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const mySample = sample(myArray, 3);
console.log(mySample); // Saída: uma amostra aleatória de 3 elementos do array original
