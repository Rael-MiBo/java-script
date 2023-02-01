/* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Auguto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];
// console.log(booksByCategory[1].books.author.length);

// console.log (booksByCategory[1].books.slice(0, 1).find(author => author.author === "Augusto Cury"));
// console.log (booksByCategory[1].books.slice(1, 2).find(author => author.author === "Augusto Cury"));


// console.log (Array.from(booksByCategory).filter(books => books.category).length);
// console.log (Array.from(booksByCategory).filter(books => author.category).length);

// function countBooksByCategory(books) {

//     return books.filter(book => book.books === books).length;

// }

// console.log(countBooksByCategory(booksByCategory, "T. Harv Eker"));


function getBooksByAuthor(author) {
    let books = [];

    for (let i = 0; i < booksByCategory.length; i++) {
        for (let j = 0; j < booksByCategory[i].books.length; j++) {
            if (booksByCategory[i].books[j].author === author) {
                books.push(booksByCategory[i].books[j]);
            }
        }
    }

    return books;
}


const books = getBooksByAuthor("Augusto Cury");
console.log(books);



// console.log(getBooksByCategory(booksByCategory));