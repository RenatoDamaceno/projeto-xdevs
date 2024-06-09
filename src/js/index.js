//- passo 1 - dar um jeito de pegar o elemento HTML da seta avançar
const btnAvancar = document.getElementById('btn-avancar');

//- passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
const btnVoltar = document.getElementById("btn-voltar");
let cartaAtual = 0;

// - passo 3 - fazer aparecer o próximo cartão da lista, colocando a classe selecionado nele
const cartoes = document.querySelectorAll('.cartao');

//- passo 2 - dar um jeito de identificar o clique do usuário.
btnAvancar.addEventListener('click', function(){
    const ehUltimoCartao = cartaAtual === cartoes.length - 1;
    if(ehUltimoCartao) return;

    // - passo 4 - buscar o cartão que está selecionado e esconder
    esconderCartaoSelecionado();

    
    cartaAtual++;
    mostrarCartao();
});

// Objetivo 2
//- passo 2 - dar um jeito de identificar o clique do usuário na seta voltar
btnVoltar.addEventListener("click", function(){
    const ehPrimeiroCartao = cartaAtual === 0;
    if(ehPrimeiroCartao) return;

     esconderCartaoSelecionado();

    // -passo 3 - fazer aparecer o cartão anterior da lista
        
    cartaAtual--;
    mostrarCartao();

})



function mostrarCartao() {
    cartoes[cartaAtual].classList.add('selecionado');
}

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove("selecionado");
}

