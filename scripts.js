// Modal functionality
const newBook = document.getElementById("new-book");
const modal = document.getElementById("inputModal");
const span = document.getElementsByClassName("close")[0];
const submitBook = document.getElementById('submit-btn');

newBook.addEventListener('click', () => {
    modal.style.display = 'block';
})
span.onclick = function() {
    modal.style.display = 'none';
}
window.onclick = function(e) {
    if (e.target == modal) {
        modal.style.display = 'none'
    }
}
submitBook.addEventListener('click', displayBook);
submitBook.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'none';
})
// End of Modal functionality

const bookTable = document.getElementById('book-table');

function displayBook(Book) {
    const bookForm = document.getElementById('bookForm');
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const status = document.getElementById('status').value;

    const book = new Book(title, author, status);
}

const myLibrary = [];

function Book(title, author, status, removeBook) {
    this.title = title,
    this.author = author,
    this.status = status
    removeBook() {
        
    } // add property that removes an individual book
}

// Adds books to library array
function addBooktoLibrary() {

}
// Displays books on table


