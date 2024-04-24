document.addEventListener('DOMContentLoaded', function() {
    const valordoFrete = document.getElementById('valordoFrete');
    const margem = document.getElementById('margem');
    const estadoDestino = document.getElementById('estadoDestino');
    const freteParaPJField = document.getElementById('freteParaPJ');
    const freteParaPFField = document.getElementById('freteParaPF');
    const calcular = document.getElementById('calcular');
    const limpar = document.getElementById('limpar');

    // Definição das taxas de ICMS para cada grupo de estados
    const icmsTaxas = {
        setePorcento: ['MS', 'MT', 'GO', 'CE', 'BA', 'SE', 'AP', 'TO', 'AM', 'AL', 'AC', 'PI', 'PE', 'PB', 'PA'],
        dozePorcento: ['PR', 'SP', 'RJ', 'MG', 'RR']
    };

    // Função para obter a taxa de ICMS com base no estado de destino
    function obterTaxaICMS(estadoDestino) {
        if (icmsTaxas.setePorcento.includes(estadoDestino)) {
            return 0.07;
        } else if (icmsTaxas.dozePorcento.includes(estadoDestino)) {
            return 0.12;
        } else {
            // Se o estado não estiver em nenhum grupo, retorna null ou outra indicação de erro
            return null;
        }
    }

    // Função para calcular o frete para pessoa jurídica (PJ) com base na margem
    function calcularFreteParaPJ(valorFrete, margem, taxaICMS) {
        const valorSemICMS = valorFrete / (1 + taxaICMS); // Removendo o ICMS do valor do frete
        return valorSemICMS * (1 + margem); // Aplicando a margem sobre o valor sem ICMS
    }

    // Função para calcular o frete para pessoa física (PF) com base na margem
    function calcularFreteParaPF(valorFrete, margem, taxaICMS) {
        const valorSemICMS = valorFrete / (1 + taxaICMS); // Removendo o ICMS do valor do frete
        const margemComDesconto = margem - 0.0325; // Desconto de 3,25% na margem para pessoa física
        return valorSemICMS * (1 + margemComDesconto); // Aplicando a margem com desconto sobre o valor sem ICMS
    }

    // Adicionando um evento de clique ao botão de calcular
    calcular.addEventListener('click', function() {
        const valorFrete = parseFloat(valordoFrete.value); // Valor do frete
        const margemValor = parseFloat(margem.value); // Margem

        const estadoDestinoValor = estadoDestino.value; // Estado de destino selecionado
        const taxaICMS = obterTaxaICMS(estadoDestinoValor); // Taxa de ICMS para o estado de destino

        // Verificando se o valor do frete, margem e taxa de ICMS são válidos
        if (!isNaN(valorFrete) && !isNaN(margemValor) && taxaICMS !== null) {
            const freteParaPJ = calcularFreteParaPJ(valorFrete, margemValor, taxaICMS);
            const freteParaPF = calcularFreteParaPF(valorFrete, margemValor, taxaICMS);

            // Exibindo os resultados nos campos de texto
            freteParaPJField.value = freteParaPJ.toFixed(2);
            freteParaPFField.value = freteParaPF.toFixed(2);
        } else {
            // Se algum dos valores não for válido, exibe uma mensagem de erro
            alert('Por favor, preencha os campos corretamente.');
        }
    });

    // Função para limpar os campos
    limpar.addEventListener('click', function() {
        valordoFrete.value = '';
        margem.value = '';
        estadoDestino.value = '';
        freteParaPJField.value = '';
        freteParaPFField.value = '';
    });
});
