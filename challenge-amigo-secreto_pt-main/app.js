let amigos = [];

function adicionarAmigo() {
  let inputAmigo = document.getElementById("amigo");
  let nomeAmigo = inputAmigo.value.trim();

  if (nomeAmigo) {
    amigos.push(nomeAmigo);
    atualizarListaAmigos();
    inputAmigo.value = ""; // Limpa o campo de input
  } else {
    alert("Por favor, digite um nome válido.");
  }
}

function atualizarListaAmigos() {
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = ""; // Limpa a lista antes de atualizar

  amigos.forEach((amigo) => {
    let itemLista = document.createElement("li");
    itemLista.textContent = amigo;
    listaAmigos.appendChild(itemLista);
  });
}

function sortearAmigo() {
  if (amigos.length < 2) {
    alert("Adicione pelo menos dois amigos para sortear.");
    return;
  }

  let resultado = document.getElementById("resultado");
  resultado.innerHTML = ""; // Limpa o resultado anterior

  // Sorteia um amigo secreto
  let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
  let mensagem = `O amigo secreto é: ${amigoSorteado}`;

  // Exibe o resultado na tela
  let itemResultado = document.createElement("li");
  itemResultado.textContent = mensagem;
  resultado.appendChild(itemResultado);
}
