let listaProdutos = [
    produto = {
        nomeProduto: 'Pão françes',
        imgProduto: 'img/pao-frances.jpg',
        descProduto: 'Tradicional pão feito com farinha refinada, água, sal e fermento',
        precoProduto: '11,99kg',

    },

    produto = {
        nomeProduto: 'Pao de Queijo',
        imgProduto: 'img/pao-queijo.jpg',
        descProduto: 'Típico da culinária brasileira, é um pão de massa de polvilho com queijo, geralmente servido como petisco.',
        precoProduto: 'R$24,99 kg',

    },

    produto = {
        nomeProduto: 'Pão Doce',
        imgProduto: 'img/pao-doce.jpg',
        descProduto: 'Pão feito com ingredientes doces, como açúcar, frutas ou mel, ideal para o café da manhã ou lanches.',
        precoProduto:'R$10,99 kg'

    },

    produto = {
        nomeProduto: 'Pão Integral',
        imgProduto: 'img/pao-integral.jpg',
        descProduto: 'Feito com farinha de trigo integral, é mais nutritivo e rico em fibras do que o pão branco, beneficiando a saúde.',
        precoProduto:'R$12,99 kg'

    }
];

let divRow = document.createElement('div');

if (listaProdutos.length > 0) {
    for (let i = 0; i < listaProdutos.length; i++) {
        let img = document.createElement('img');
        img.classList.add('img-produto');
        img.setAttribute('src', listaProdutos[i].imgProduto);
        img.setAttribute('alt', listaProdutos[i].nomeProduto);

        let divDescricao = document.createElement('div');
        divDescricao.classList.add('descricao');
        divDescricao.innerText = listaProdutos[i].descProduto;

        let divPreco = document.createElement('div');
        divPreco.classList.add('preco');
        divPreco.innerText = listaProdutos[i].precoProduto;

        let button = document.createElement('button')
        button.classList.add('clss', 'btn', 'btn-success');
        button.innerText = "Comprar >>>";

        let divNomeProduto = document.createElement('div');
        divNomeProduto.classList.add('nome-produto');
        divNomeProduto.innerText = listaProdutos[i].nomeProduto;

        let divCol = document.createElement('div');
        divCol.classList.add('col-3', 'produto');
        divCol.appendChild(img);
        divCol.appendChild(divNomeProduto);
        divCol.appendChild(divDescricao);
        divCol.appendChild(divPreco);
        divCol.appendChild(button);


        divRow.classList.add('row');
        divRow.appendChild(divCol);
    }
}



let divProdutos = document.getElementById('produtos');
divProdutos.appendChild(divRow);