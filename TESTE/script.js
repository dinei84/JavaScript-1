function submitForm() {
    // Captura os dados do formulário
    const form = document.getElementById('form');
    const formData = new FormData(form);

    // Converte os dados do formulário em um objeto
    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    // Armazena os dados no localStorage
    localStorage.setItem('formData', JSON.stringify(formObject));

    // Redireciona para a página de resultado
    window.location.href = 'result.html';
}

// Verifica se está na página de resultado
if (window.location.pathname.endsWith('result.html')) {
    // Recupera os dados do localStorage
    const formData = JSON.parse(localStorage.getItem('formData'));

    // Preenche os spans com os dados
    document.getElementById('result-name').innerText = formData.name;
    document.getElementById('result-email').innerText = formData.email;
    document.getElementById('result-age').innerText = formData.age;
}
