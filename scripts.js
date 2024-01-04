// MODAL FUNCTIONALITY ***
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
// END OF MODAL FUNCTIONALITY ***

// DISPLAY, TABLE, & BUTTONS FUNCTIONS ***
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const statusInput = document.querySelector('#status');
const table = document.getElementById('book-table');

// Display book in table
submitBook.addEventListener('click', displayBook);

function displayBook(e) {
    e.preventDefault();

    // Prevents user from submitting empty inputs
    if (titleInput.value == '' && authorInput.value == '') {
        return;
    }

    // Create a new book object
    const book = new Book(titleInput.value, authorInput.value, statusInput.checked);

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
    
    // Add book to array library
    addBooktoLibrary(book);

    // Edit book button
    const editBookBtn = document.createElement('button');
    editBookBtn.textContent = 'Edit';
    editBookBtn.addEventListener('click', () => editBook(row, book));

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
        // when user selects done update book properties
        book.title = titleInput.value;
        book.author = authorInput.value;
        book.status = statusInput.checked;
        // update row in table
        updateRow(row, book);
    }

    // Remove Book Button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', () => removeBook(row));

    const removeCell = document.createElement('td');
    removeCell.appendChild(removeBtn);
    row.appendChild(removeCell);
    // End
  
    // Clear text inside modal after user clicks done
    titleInput.value = '';
    authorInput.value = '';
    statusInput.checked = false;
}
// End of book display

// update row with edited book
function updateRow(row, book) {
    row.children[0].textContent = book.title;
    row.children[1].textContent = book.author;
    row.children[2].textContent = book.status ? 'Read' : 'Not Read';
}

// Remove book ++
function removeBook(row, book) {
    // remove from table
    table.removeChild(row);
    // remove element from myLibrary array
    removeFromLibrary(book);
}
// END OF DISPLAY, TABLE, & BUTTONS FUNCTIONS***

// BOOK ARRAY FUNCTIONS ***
const myLibrary = [];

function Book(title, author, status) {
    this.title = title,
    this.author = author,
    this.status = status
}

// Adds books to library array
function addBooktoLibrary(book) {
    myLibrary.push(book);
    console.log(book)
}

// Removes book from library array
function removeFromLibrary(book) {
    const index = myLibrary.indexOf(book);
    if (index !== -1) {
        myLibrary.splice(index, 1);
    }
}
// END OF BOOK ARRAY FUNCTIONS ***


