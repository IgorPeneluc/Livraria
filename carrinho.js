// Função para renderizar os livros no carrinho
function renderizarCarrinho() {
    const container = document.querySelector('.livro-container');
    const mensagemVazio = document.getElementById('mensagem-vazio');
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    container.innerHTML = ''; // Limpa o container antes de renderizar novamente

    if (carrinho.length === 0) {
        mensagemVazio.textContent = 'Seu carrinho está vazio.';
    } else {
        carrinho.forEach((livro, index) => {
            const livroDiv = document.createElement('div');
            livroDiv.classList.add('livro');
            livroDiv.innerHTML = `
                <img src="${livro.imagem}" alt="${livro.nome}">
                <h3>${livro.nome}</h3>
                <p>Autor: ${livro.autor}</p>
                <p>Preço: R$ ${livro.preco}</p>
                <button class="excluir" onclick="excluirDoCarrinho(${index})">Excluir</button>
            `;
            container.appendChild(livroDiv);
        });
    }
}

// Função para excluir o livro do carrinho
function excluirDoCarrinho(index) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.splice(index, 1); // Remove o item da lista pelo índice
    localStorage.setItem('carrinho', JSON.stringify(carrinho)); // Atualiza o LocalStorage
    renderizarCarrinho(); // Re-renderiza o carrinho
}

// Função para atualizar a página do carrinho (recarregar os livros do LocalStorage)
function atualizarCarrinho() {
    renderizarCarrinho();
}

// Chama a função para renderizar os livros no carrinho quando a página carregar
window.onload = function() {
    renderizarCarrinho();
};
