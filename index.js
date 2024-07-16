function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

function fetchBooks() {
  // Return the fetch promise
  return fetch("https://anapioficeandfire.com/api/books")
    .then(response => response.json())
    .then(data => {
      renderBooks(data); // After fetching, call renderBooks to render the data
      return data; // Optionally return data if needed further downstream
    })
    .catch(error => {
      console.error('Error fetching books:', error);
      throw error; // Re-throw the error so it can be caught elsewhere if needed
    });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
