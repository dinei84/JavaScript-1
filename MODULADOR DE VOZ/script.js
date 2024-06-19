const selecaoVoz = document.querySelector('#selecao-voz-box');
const entradaTexto = document.querySelector('#entrada-de-texto');
const botaoOuvir = document.querySelector('#ouvir-btn');
const botaoBaixarTexto = document.querySelector('#baixar-texto-btn');
const uploadArquivo = document.querySelector('#upload-arquivo');
const botaoLimpar = document.querySelector('#limpar-btn');
const botaoGravar = document.querySelector('#gravar-btn');

// API de Vozes
const fala = new SpeechSynthesisUtterance();

let vozesDisponiveis = [];
let mediaRecorder;
let audioChunks = [];

// Preencher o Select
const atualizarValores = () => {
  vozesDisponiveis = window.speechSynthesis.getVoices();

  // Limpar opções existentes
  selecaoVoz.innerHTML = '';

  // Adicionar novas opções
  vozesDisponiveis.forEach((voz, index) => {
    const opcao = document.createElement('option');
    opcao.value = index;
    opcao.textContent = `${voz.name} (${voz.lang})`;
    selecaoVoz.appendChild(opcao);
  });

  fala.voice = vozesDisponiveis[0];
};

window.speechSynthesis.onvoiceschanged = atualizarValores;

botaoOuvir.addEventListener('click', () => {
  fala.text = entradaTexto.value;
  fala.voice = vozesDisponiveis[selecaoVoz.value];
  window.speechSynthesis.speak(fala);
});

botaoBaixarTexto.addEventListener('click', () => {
  const blob = new Blob([entradaTexto.value], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'texto.txt';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});

uploadArquivo.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      entradaTexto.value = e.target.result;
    };
    reader.readAsText(file);
  }
});

botaoLimpar.addEventListener('click', () => {
  entradaTexto.value = '';
});

// Função de Gravação de Voz
botaoGravar.addEventListener('click', async () => {
  if (!navigator.mediaDevices || !window.MediaRecorder) {
    alert('API de MediaRecorder não é suportada neste navegador.');
    return;
  }

  const audioContext = new AudioContext();
  const mediaStreamDestination = audioContext.createMediaStreamDestination();
  const source = audioContext.createMediaStreamSource(mediaStreamDestination.stream);
  mediaRecorder = new MediaRecorder(mediaStreamDestination.stream);

  const speechSynthesisUtterance = new SpeechSynthesisUtterance(entradaTexto.value);
  speechSynthesisUtterance.voice = vozesDisponiveis[selecaoVoz.value];

  speechSynthesisUtterance.onstart = () => {
    audioChunks = [];
    mediaRecorder.start();
  };

  mediaRecorder.ondataavailable = (event) => {
    if (event.data.size > 0) {
      audioChunks.push(event.data);
    }
  };

  speechSynthesisUtterance.onend = () => {
    mediaRecorder.stop();
  };

  mediaRecorder.onstop = () => {
    const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
    const audioUrl = URL.createObjectURL(audioBlob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = audioUrl;
    a.download = 'gravacao.webm';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  window.speechSynthesis.speak(speechSynthesisUtterance);
});
