const botao = document.getElementById('botao')

botao.addEventListener('click', () => {
    const numeroAleatorio = Math.floor(Math.random() * 3) + 1;
    const meu = document.getElementById('meu').value
    const resultado = document.getElementById('resultado')

    console.log(numeroAleatorio)

    let resultadoGame

    if (numeroAleatorio == 1 && meu.toLowerCase() == "pedra") {
        resultadoGame = `O Computador escolheu Pedra e deu empate`
    } else if (numeroAleatorio == 1 && meu.toLowerCase() == "papel") {
        resultadoGame = `O Computador escolheu Pedra Voce venceu!`
    } else if (numeroAleatorio == 1 && meu.toLowerCase() == 'tesoura') {
        resultadoGame = `O Computador escolheu Pedra O Computador venceu`
    } else if (numeroAleatorio == 2 && meu.toLowerCase() == 'pedra') {
        resultadoGame = `O Computador escolheu Papel O computador venceu`
    } else if (numeroAleatorio == 2 && meu.toLowerCase() == 'papel') {
        resultadoGame = `O Computador escolheu Papel Deu empate`
    } else if (numeroAleatorio == 2 && meu.toLowerCase() == 'tesoura') {
        resultadoGame = `O Computador escolheu Papel Voce venceu`
    } else if (numeroAleatorio == 3 && meu.toLowerCase() == 'pedra') {
        resultadoGame = `O Computador escolheu Tesoura Você venceu`
    } else if (numeroAleatorio == 3 && meu.toLowerCase() == "papel") {
        resultadoGame = `O Computador escolheu Tesoura O computador venceu`
    } else if (numeroAleatorio == 3 && meu.toLowerCase() == 'tesoura') {
        resultadoGame = `O Computador escolheu Tesoura Deu empate`
    } else {
        resultadoGame = `Escolha Incorreta`
    }

    resultado.textContent = resultadoGame
})
