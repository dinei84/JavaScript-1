document.addEventListener('DOMContentLoaded', function() {
    const valordoFrete = document.getElementById('valordoFrete');
    const margem = document.getElementById('margem');
    const estadoOrigem = document.getElementById('estadoSaida');
    const estadoDestino = document.getElementById('estadoDestino');
    const freteParaPJField = document.getElementById('freteParaPJ');
    const freteParaPFField = document.getElementById('freteParaPF');
    const calcular = document.getElementById('calcular');
    const limpar = document.getElementById('limpar');

    // Tabela de taxas de ICMS
    const icmsTaxas = {
        SC: { MT: 7, PR: 12, SC: 17, MS: 7, GO: 7, MG: 12, SP: 12, RS: 12 },
        PR: { MT: 7, PR: 12, SC: 12, MS: 7, GO: 7, MG: 12, SP: 12, RS: 12 },
        MT: { MT: 0, PR: 12, SC: 12, MS: 12, GO: 12, MG: 12, SP: 12, RS: 12}
    };

    // Função para obter a taxa de ICMS com base no estado de origem e destino
    function obterTaxaICMS(estadoOrigem, estadoDestino) {
        return icmsTaxas[estadoOrigem][estadoDestino];
    }

// Função para calcular o frete para pessoa jurídica (PJ) com base na margem
function calcularFreteParaPJ(valorFrete, margem, taxaICMS) {
    const totalPorcentagem = margem + taxaICMS; // Soma das porcentagens de margem e ICMS
    const descontoTotal = valorFrete * (totalPorcentagem / 100); // Calcula o desconto total
    return valorFrete - descontoTotal; // Retorna o valor do frete com o desconto total aplicado
}

// Função para calcular o frete para pessoa física (PF) com base na margem
function calcularFreteParaPF(valorFrete, margem, taxaICMS) {
    const totalPorcentagem = margem + taxaICMS + 3.25; 
    const descontoTotal = valorFrete * (totalPorcentagem / 100); // Calcula o desconto total
    return valorFrete - descontoTotal; // Retorna o valor do frete com o desconto total aplicado
}


    // Adicionando um evento de clique ao botão de calcular
    calcular.addEventListener('click', function() {
        const valorFrete = parseFloat(valordoFrete.value); // Valor do frete
        const margemValor = parseFloat(margem.value); // Margem
        const estadoOrigemValor = estadoOrigem.value; // Estado de origem selecionado
        const estadoDestinoValor = estadoDestino.value; // Estado de destino selecionado

        // Verificando se os campos obrigatórios estão preenchidos
        if (isNaN(valorFrete) || isNaN(margemValor) || estadoOrigemValor === '' || estadoDestinoValor === '') {
            alert('Por favor, preencha todos os campos corretamente.');
            return;
        }

        // Verificando se o estado de origem e destino estão na tabela de taxas de ICMS
        if (!icmsTaxas.hasOwnProperty(estadoOrigemValor) || !icmsTaxas[estadoOrigemValor].hasOwnProperty(estadoDestinoValor)) {
            alert('Taxa de ICMS não encontrada para a combinação de estados selecionados.');
            return;
        }

        const taxaICMS = obterTaxaICMS(estadoOrigemValor, estadoDestinoValor); // Taxa de ICMS para a combinação de estados

        const freteParaPJ = calcularFreteParaPJ(valorFrete, margemValor, taxaICMS);
        const freteParaPF = calcularFreteParaPF(valorFrete, margemValor, taxaICMS);

        // Exibindo os resultados nos campos de texto
        freteParaPJField.value = freteParaPJ.toFixed(2);
        freteParaPFField.value = freteParaPF.toFixed(2);
    });

    // Adicionando um evento de clique ao botão de limpar
    limpar.addEventListener('click', function() {
        valordoFrete.value = '';
        margem.value = '';
        estadoOrigem.value = '';
        estadoDestino.value = '';
        freteParaPJField.value = '';
        freteParaPFField.value = '';
    });
});