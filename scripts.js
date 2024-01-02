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
// submitBook.addEventListener('click', displayBook);
submitBook.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'none';
})
// End of Modal functionality

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

// function displayBook(myLibrary) {
//     for (let i in myLibrary) {
//         bookTable.textContent += myLibrary[i].title;
//         bookTable.textContent += myLibrary[i].author;
//         bookTable.textContent += myLibrary[i].status;
//     }
// }

