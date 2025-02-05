const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

// Movimento de rotação ao passar o mouse
document.querySelectorAll('.cartao').forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -2;
    card.style.setProperty('--ratio-x', x.toFixed(2));
    card.style.setProperty('--ratio-y', y.toFixed(2));
  });

  card.addEventListener('mouseleave', () => {
    card.style.setProperty('--ratio-x', 0);
    card.style.setProperty('--ratio-y', 0);
  });
});

// Virar carta e mostrar fundo
cartoes.forEach(cartao => {
  cartao.addEventListener("click", function () {
    const cartaVirada = cartao.querySelector(".carta-virada");

    cartao.classList.toggle("virar");
    cartaVirada.classList.toggle("mostrar-fundo-carta");

    const descricao = cartao.querySelector(".descricao");
    descricao.classList.toggle("esconder");
  });
});

// Navegação dos cartões
btnAvancar.addEventListener("click", function () {
  if (cartaoAtual === cartoes.length - 1) return;
  esconderCartaoSelecionado();
  cartaoAtual++;
  mostrarCartao(cartaoAtual);
});

btnVoltar.addEventListener("click", function () {
  if (cartaoAtual === 0) return;
  esconderCartaoSelecionado();
  cartaoAtual--;
  mostrarCartao(cartaoAtual);
});

function mostrarCartao(cartaoAtual) {
  cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecionado() {
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");
}
