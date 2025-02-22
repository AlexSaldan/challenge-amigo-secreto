// Array para armazenar os participantes
let participantes = [];

// Função para adicionar um novo participante
function adicionarAmigo() {
  const inputAmigo = document.getElementById("amigo");
  const nomeAmigo = inputAmigo.value.trim();

  if (nomeAmigo !== "") {
    if (participantes.includes(nomeAmigo)) {
      alert("Este nome já foi adicionado!");
    } else if (participantes.length >= 30) {
      alert("Você atingiu o limite máximo de 30 participantes!");
    } else {
      participantes.push(nomeAmigo); // Adiciona o novo nome ao array
      inputAmigo.value = ""; // Limpa o campo de input
      atualizarListaAmigos(); // Atualiza a lista na tela
    }
  } else {
    alert("Por favor, digite um nome válido.");
  }
}

// Função para atualizar a lista de participantes na tela
function atualizarListaAmigos() {
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = ""; // Limpa a lista atual

  participantes.forEach((participante) => {
    const itemLista = document.createElement("li");
    itemLista.textContent = participante;
    listaAmigos.appendChild(itemLista);
  });
}

// Função para sortear um nome aleatório
function sortearAmigo() {
  if (participantes.length < 2) {
    alert("Adicione pelo menos 2 participantes para sortear!");
    return;
  }

  // Gera um índice aleatório com base no tamanho da lista
  const indiceSorteado = Math.floor(Math.random() * participantes.length);
  const nomeSorteado = participantes[indiceSorteado];

  // Exibe o resultado na tela
  exibirResultado(nomeSorteado);
}

// Função para exibir o resultado na tela
function exibirResultado(nomeSorteado) {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = ""; // Limpa o resultado anterior

  const itemResultado = document.createElement("li");
  itemResultado.textContent = `Nome amigo sorteado foi : ${nomeSorteado}`;
  resultado.appendChild(itemResultado);
}

// Exibe a lista de participantes ao carregar a página (opcional)
window.onload = function () {
  // Se quiser inicializar com uma lista vazia, não é necessário fazer nada aqui
};
