const form = {
  firstNumber: () => document.getElementById('sort'),
  secondNumber: () => document.getElementById('sort2'),
}

const clear= document.getElementById('clean')
const botao = document.getElementById('sorting');

botao.addEventListener('click', () => {
  function sortear(min, max) {
    min = parseInt(min);
    max = parseInt(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const resultElement = document.getElementById('result');
  const min = form.firstNumber().value;
  const max = form.secondNumber().value;

  const resultado = sortear(min, max);
  resultElement.textContent = resultado;
});

clear.addEventListener('cleick',()=>{
  
  form.firstNumber().value = ''
  form.firstNumber().value = ''

})