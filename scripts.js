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

    // Prevents user from submitting empty inputs
    if (titleInput.value == '' && authorInput.value == '') {
        return;
    }

    // Create new row for each book
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
    
    // Edit book button
    const editBookBtn = document.createElement('button');
    editBookBtn.textContent = 'Edit';
    editBookBtn.addEventListener('click', () => editBook(row));

    const editCell = document.createElement('td');
    editCell.appendChild(editBookBtn);
    row.appendChild(editCell);

    table.appendChild(row);
    modal.style.display = 'none';

    // Edit book ++
    function editBook(row) {
        // display modal
        modal.style.display = 'block';
        // display info of selected book
        titleInput.value = newTitle.textContent;
        authorInput.value = newAuthor.textContent;
        statusInput.checked = newStatus.textContent.trim().toLowerCase() === 'read';
        // when user selects done, remove old book and update w/new
        table.removeChild(row);
    }

    // Delete Book Button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', () => removeBook(row));

    const removeCell = document.createElement('td');
    removeCell.appendChild(removeBtn);
    row.appendChild(removeCell);
    // End
  
    // Clear text inside modal
    titleInput.value = '';
    authorInput.value = '';
    statusInput.checked = false;
    // 
}

// Delete book ++
function removeBook(row) {
    table.removeChild(row);
    // remove element from myLibrary array
}
// End of display book

const myLibrary = [];

function Book(title, author, status) {
    this.title = title,
    this.author = author,
    this.status = status
}

// Adds books to library array
function addBooktoLibrary() {

}


