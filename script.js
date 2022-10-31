const bookSection = document.querySelector('#book-section');
const addBook = document.getElementById('add-book');
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');

// Setting an Empty Array for the Books
let bookArr = [];

// This function will display the book value on the page and in the local storage
function displayBooks() {
  if (localStorage.getItem('My Books') === null) {
    bookArr = [];
  } else {
    bookArr = JSON.parse(localStorage.getItem('My Books'));
  }

  bookArr.forEach((book, i) => {
    bookSection.innerHTML += `
        <div>
            <p>${book.title}</p> 
            <p>${book.author}</p> 
            <button type="button" onclick="removeBook(${i})">Remove</button>
            <hr>
        </div>`;
  });
}

window.onload = displayBooks();

function addingBook() {
  if (bookTitle.value !== '' || bookAuthor.value !== '') {
    bookArr.push({ title: bookTitle.value, author: bookAuthor.value });
    localStorage.setItem('My Books', JSON.stringify(bookArr));
  }
}

/* eslint-disable no-unused-vars */
function removeBook(index) {
  bookArr.splice(index, 1);
  bookSection.innerHTML = '';
  localStorage.setItem('My Books', JSON.stringify(bookArr));
  displayBooks();
}

addBook.addEventListener('click', () => {
  bookSection.innerHTML = '';
  addingBook();
  displayBooks();
  bookTitle.value = '';
  bookAuthor.value = '';
});