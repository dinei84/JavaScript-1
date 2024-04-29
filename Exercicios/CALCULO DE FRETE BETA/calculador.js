document.addEventListener('DOMContentLoaded', function(){
    const valordoFrete = document.getElementById('valordoFrete');
    const pedagio = document.getElementById('pedagio');
    const peso = document.getElementById('peso');
    const botao = document.getElementById('botao');
    const clean = document.getElementById('clean');
    const freteUnitario = document.getElementById('freteUnitario');
    const adiantamento = document.getElementById('adiantamento');

    const calculodosValores = () => {
        var pedagioComDesconto = pedagio.value ? parseFloat(pedagio.value) / parseFloat(peso.value) : 0;
        var ajusteOne = pedagioComDesconto * 1000;
        var resultadoParcial = parseFloat(valordoFrete.value) - ajusteOne;
        var valorDoFreteSemDesconto = parseFloat(valordoFrete.value) * parseFloat(peso.value);
        var valorDoFreteSemDescontoAjuste = resultadoParcial * parseFloat(peso.value);
        var valorDoFreteSemDescontoAjusteQuatro = valorDoFreteSemDescontoAjuste / 1000;
        var adiantamentoAjuste = valorDoFreteSemDescontoAjusteQuatro * 0.7;
        var adiantamentoAjusteComSeguro = adiantamentoAjuste * (1 - 0.018);
        var adiantamentoReal = adiantamentoAjusteComSeguro.toFixed(2);

        return [resultadoParcial, adiantamentoReal];
    };

    botao.addEventListener('click', function() {
        const [resultado, adiantamentoValue] = calculodosValores();
        freteUnitario.value = resultado;
        adiantamento.value = adiantamentoValue; // Aqui estava o problema

        if (valordoFrete.value === '' || peso.value === '') {
            alert('Por favor, preencha todos os campos corretamente.');
            return;
        }  
        

    });

    clean.addEventListener('click', function() {
        document.getElementById('valordoFrete').value = "";
        document.getElementById('pedagio').value = "";
        document.getElementById('peso').value = "";
        document.getElementById('freteUnitario').value = "";
        document.getElementById('adiantamento').value = "";
    });
});
