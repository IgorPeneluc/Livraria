// Lista de livros
const livros = [
    { id: 1, nome: 'A Metamorfose', autor: 'Franz Kafka', preco: '19.99', imagem: 'https://m.media-amazon.com/images/I/71mFnG3Bn3L._AC_UF1000,1000_QL80_.jpg' },
    { id: 2, nome: 'O Mundo de Sofia', autor: 'Jostein Gaarder', preco: '14.99', imagem: 'https://m.media-amazon.com/images/I/51t1OmDZw+L.jpg' },
    { id: 3, nome: 'O Poder do Hábito', autor: 'Charles Duhigg', preco: '9.99', imagem: 'https://m.media-amazon.com/images/I/41l+Ibv0jKL._SX326_BO1,204,203,200_.jpg' },
    { id: 4, nome: 'A Casa das Sete Mulheres', autor: 'Letícia Wierzchowski', preco: '15.80', imagem: 'https://m.media-amazon.com/images/I/51SN8HcTqAL._SX327_BO1,204,203,200_.jpg' },
    { id: 5, nome: 'Dom Casmurro', autor: 'Machado de Assis', preco: '12.50', imagem: 'https://m.media-amazon.com/images/I/41bdqTOabLL._SX331_BO1,204,203,200_.jpg' },
    { id: 6, nome: '1984', autor: 'George Orwell', preco: '18.90', imagem: 'https://m.media-amazon.com/images/I/41-SlmYrVcL._SX311_BO1,204,203,200_.jpg' }
];

// Função para renderizar os livros na página inicial
function renderizarLivros() {
    const container = document.querySelector('.livro-container');
    livros.forEach(livro => {
        const livroDiv = document.createElement('div');
        livroDiv.classList.add('livro');
        livroDiv.innerHTML = `
            <img src="${livro.imagem}" alt="${livro.nome}">
            <h3>${livro.nome}</h3>
            <p>Autor: ${livro.autor}</p>
            <p>Preço: R$ ${livro.preco}</p>
            <button onclick="adicionarAoCarrinho(${livro.id})">Adicionar ao Carrinho</button>
        `;
        container.appendChild(livroDiv);
    });
}

// Função para adicionar o livro ao carrinho
function adicionarAoCarrinho(id) {
    const livro = livros.find(livro => livro.id === id);
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || []; // Recupera o carrinho do LocalStorage ou cria um novo array
    carrinho.push(livro); // Adiciona o livro ao carrinho
    localStorage.setItem('carrinho', JSON.stringify(carrinho)); // Atualiza o LocalStorage
    alert(`${livro.nome} foi adicionado ao carrinho!`);
}

// Chama a função para renderizar os livros quando a página carregar
window.onload = function() {
    renderizarLivros();
};
