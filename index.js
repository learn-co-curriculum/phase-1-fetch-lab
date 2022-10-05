// function fetchBooks() {
//   fetch("https://anapioficeandfire.com/api/books")
//   .then(res => res.json())
//   .then(x => renderBooks(x))
// }

// function renderBooks(books) {
//   const main = document.querySelector("main")
//   books.forEach(book => {
//     const h2 = document.createElement("h2");
//     h2.innerHTML = book.name
//     main.appendChild('h2')
//   })
// }

// document.addEventListener("DOMContentLoaded", function () {
//   fetchBooks()
// })
























 function fetchBooks() {
   fetch("https://anapioficeandfire.com/api/books")
   .then((res) => res.json())
   .then(json => renderBooks(json))
 }

function renderBooks(books) {
   const main = document.querySelector('main');
   books.forEach(book => {
     const h2 = document.createElement('h2');
     h2.innerHTML = book.name;
     main.appendChild(h2);
   });
 }

 document.addEventListener('DOMContentLoaded', function() {
   fetchBooks();
});
