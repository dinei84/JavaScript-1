function realizarCalculo() {
    const numero1 = parseFloat(document.getElementById('valor1').value);
    const numero2 = parseFloat(document.getElementById('valor2').value);
    
    if (isNaN(numero1) || isNaN(numero2)) {
        document.getElementById('resultado').textContent = 'Por favor, insira números válidos.';
        return;
    }
    
    const resultado = numero1 + numero2;
    document.getElementById('resultado').textContent = `Resultado: ${resultado}`;