const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó", categoria: "Limpeza", preco: 10.80 }
 ]
 
const novoArray = produtos.filter((item) => item.categoria === "Limpeza" );
console.log(novoArray)

//1 - Retorne os produtos maiores de 7 reais
const acimdaDe7 = produtos.filter((item) => item.preco > 7);
console.log(acimdaDe7);

// - Retorne os produtos menores de 7 reais
const abaixoDe7 = produtos.filter((item) => item.preco < 7);
console.log(abaixoDe7);

// - Retorne apenas os nome dos produtos
const nomeDosProdutos = produtos.map((item) => item.nome);
console.log(nomeDosProdutos);

// - Retorne  apenas os nomes dos produtos com precos.
// - A frase a ser retornada deve ficar assim: O produto Alface Lavada custa R$ 2.50'
const nomesPrecos = produtos.map((item) => `O produto ${item.nome} custa ${item.preco.toFixed(2)}.`);
console.log(nomesPrecos);

//Vamos somar o valor total os produtos no array acima.
// Crie uma variavel precoTotal e atribua 0 a ela.
// Utilize o for of para percorrer todos os produtos
// dentro do escopo do for faça a soma para saber o valor total dos produtos
let precoTotal = 0;

for (let produto of produtos){
    precoTotal = precoTotal + produto.preco
};

console.log("O preço total dos produtos ficou R$",precoTotal)





