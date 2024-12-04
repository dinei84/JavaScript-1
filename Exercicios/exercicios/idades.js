function processarIdades() {
    const readline = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let somaIdade = 0, 
        contador = 0, 
        maioresDe18 = 0, 
        menoresDe5 = 0, 
        maiorIdade = 0;

    console.log("Digite as idades (digite um número negativo ou 0 para encerrar):");

    function lerIdade() {
        readline.question("", (entrada) => {
            const idade = parseInt(entrada, 10);

            if (isNaN(idade)) {
                console.log("Por favor, insira um número válido.");
                return lerIdade();
            }

            if (idade <= 0) {
                readline.close();
                if (contador > 0) {
                    const media = somaIdade / contador;
                    console.log(`A quantidade de pessoas com menos de 5 anos é: ${menoresDe5}`);
                    console.log(`A maior idade lida foi: ${maiorIdade}`);
                    console.log(`A quantidade de pessoas maiores de 18 anos é: ${maioresDe18}`);
                    console.log(`A média das idades é: ${media.toFixed(2)}`);
                } else {
                    console.log("Não foi digitada nenhuma idade.");
                }
                return;
            }

            somaIdade += idade;
            contador++;
            if (idade >= 18) maioresDe18++;
            if (idade < 5) menoresDe5++;
            if (idade > maiorIdade) maiorIdade = idade;

            lerIdade();
        });
    }

    lerIdade();
}

processarIdades();
