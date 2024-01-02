const bookTable = document.getElementById('book-table')

const myLibrary = [
    {title: "HPRT", author: "JFK", status: "read"}
];

function Book(title, author, status) {
    this.title = title,
    this.author = author,
    this.status = status
}

function addBooktoLibrary() {

}

function displayBook(myLibrary) {
    for (let i in myLibrary) {
        bookTable.textContent += myLibrary[i].title;
        bookTable.textContent += myLibrary[i].author;
        bookTable.textContent += myLibrary[i].status;
    }
}

displayBook(myLibrary);

