let allBooks = [
    {
        title: "1984",
        author: "George Orwell",
        image: "https://www.steimatzky.co.il/pub/media/catalog/product/cache/054fd023ed4beb824f3143faa6fcc008/0/2/021421025-1672643830178515.jpg",
        alreadyRead: true
    },
    {
        title: "Brave New World",
        author: "Aldous Huxley",
        image: "https://m.media-amazon.com/images/I/51LEy8iad2L.jpg",
        alreadyRead: true
    }
]

let list_books = document.querySelector(".listBooks");

allBooks.forEach(function(book) {

    let div = document.createElement("div");

    div.innerHTML = `
        <h2>${book.title} written by ${book.author}</h2>
        <img src="${book.image}" alt="${book.title}" style="width: 100px;">
    `;
    
    if (book.alreadyRead) {
        div.style.color = "red";
    }

    list_books.appendChild(div);
});

