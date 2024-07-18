document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('orderForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = {
            centroCusto: document.getElementById('centroCusto').value,
            cliente: document.getElementById('cliente').value,
            coleta: document.getElementById('coleta').value,
            coletaUF: document.getElementById('coletaUF').value,
            entrega: document.getElementById('entrega').value,
            entregaUF: document.getElementById('entregaUF').value,
            produto: document.getElementById('produto').value,
            veiculoCavalo: document.getElementById('veiculo-cavalo').value,
            veiculoPlaca2: document.getElementById('veiculo-placa2').value,
            veiculoDolly: document.getElementById('veiculo-dolly').value,
            veiculoPlaca3: document.getElementById('veiculo-placa3').value,
            capacidade: document.getElementById('capacidade').value,
            motorista: document.getElementById('motorista').value, // Corrigido
            CPFmotorista: document.getElementById('CPFmotorista').value, // Corrigido
            previsaoCarregamento: document.getElementById('previsaoCarregamento').value,
            pedido: document.getElementById('pedido').value,
            observacoes: document.getElementById('observacoes').value
        };

        localStorage.setItem('orderData', JSON.stringify(formData));
        window.location.href = 'index.html';
    });

    const limpar = document.getElementById('clean');

    limpar.addEventListener('click', () => {
        document.getElementById('centroCusto').value = '';
        document.getElementById('cliente').value = '';
        document.getElementById('coleta').value = '';
        document.getElementById('coletaUF').value = '';
        document.getElementById('entrega').value = '';
        document.getElementById('entregaUF').value = '';
        document.getElementById('produto').value = '';
        document.getElementById('veiculo-cavalo').value = '';
        document.getElementById('veiculo-placa2').value = '';
        document.getElementById('veiculo-dolly').value = '';
        document.getElementById('veiculo-placa3').value = '';
        document.getElementById('capacidade').value = '';
        document.getElementById('motorista').value = '';
        document.getElementById('CPFmotorista').value = '';
        document.getElementById('previsaoCarregamento').value = '';
        document.getElementById('pedido').value = '';
        document.getElementById('observacoes').value = '';
    });
});
