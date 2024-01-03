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
// End of Modal functionality


// DOM Input && Table Variables
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const statusInput = document.querySelector('#status');
const table = document.getElementById('book-table');
// DOM End of input && table variables

// Display book in table
submitBook.addEventListener('click', displayBook);

function displayBook(e) {
    e.preventDefault();

    if (titleInput.value == '' && authorInput.value == '') {
        return;
    }

    const row = document.createElement('tr');

    const newTitle = document.createElement('td');
    newTitle.textContent = titleInput.value;
    row.appendChild(newTitle);

    const newAuthor = document.createElement('td');
    newAuthor.textContent = authorInput.value;
    row.appendChild(newAuthor);

    const newStatus = document.createElement('td');
    newStatus.textContent = statusInput.checked ? 'Read' : 'Not Read';
    row.appendChild(newStatus);

    table.appendChild(row);
    modal.style.display = 'none';
}
// End of display book

const myLibrary = [];

function Book(title, author, status, removeBook) {
    this.title = title,
    this.author = author,
    this.status = status
}

// Adds books to library array
function addBooktoLibrary() {

}
// Displays books on table


