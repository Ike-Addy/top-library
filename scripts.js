const myLibrary = [];

function Book(title, author, pagesRead) {
  this.title = title; 
  this.author = author; 
  this.pagesRead = pagesRead; 
}

function render() {
    let libraryBook = document.querySelector('#library');
    libraryBook.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookElement = document.createElement('div');
        bookElement.innerHTML = `
            <h1>${book.title}</h1>
            <p>by ${book.author}</p>
            <p>${book.pagesRead}</p>
            <button class='remove-btn' onclick='removeBook(${i})'>Remove</button>`;        
        libraryBook.appendChild(bookElement);
    }
}

function removeBook(index) {
    myLibrary.splice(index, 1)
    render()
}

function addBookToLibrary() {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pagesRead = document.querySelector('#pages-read').value;

    let newBook = new Book(title, author, pagesRead);
    myLibrary.push(newBook);

    render();
}

let addBookBtn = document.querySelector('#add-book');
addBookBtn.addEventListener('click', function(event) {
    event.preventDefault()
    addBookToLibrary();    

    // After rendering the new book, clear all fields    
})



let myBookForm = document.querySelector('#my-books-form');
let newBookBtn = document.querySelector('#new-book-btn');
newBookBtn.addEventListener('click', function() {
    myBookForm.style.display = 'block';
})
