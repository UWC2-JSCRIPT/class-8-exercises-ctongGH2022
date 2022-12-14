/**
 * Cecilia Tong
 * Class 8 Exercise & Homework
 * Dec 6, 2022
 * FETCH
 */

const formEl = document.getElementById('best-books-form');
const yearEl = document.getElementById('year');
const monthEl = document.getElementById('month');
const dateEl = document.getElementById('date');

formEl.addEventListener('submit', function (e) {
  e.preventDefault();

  const year = yearEl.value;
  const month = monthEl.value;
  const date = dateEl.value;

  // Fetch bestselling books for date and add top 5 to page
  // create api-key.js file with const API_KEY="your_api_key" in this same directory to use
  const BASE_URL = 'https://api.nytimes.com/svc/books/v3/lists.json';
  const API_KEY = 'Tco7QxYy46coo9YjBsRUY5lxGjUEIF9H' //book API
  const formInput = 'friction';
  let onDate = `${year}-${month}-${date}`;
  const url = `https://api.nytimes.com/svc/books/v3/lists/${onDate}/hardcover-fiction.json?api-key=${API_KEY}`
  const urlFirstFive = `https://api.nytimes.com/svc/books/v3/lists/${onDate}/hardcover-fiction.json?api-key=${API_KEY}`

  fetch(url)
    .then(function (data) {
      return data.json();
    })
    .then(function (responseJson) {
      console.log(responseJson);

      //list book
      const listBooks = responseJson.results.books;
      document.getElementById('books-container').innerText = '';
      for (let i = 0; i < listBooks.length; i++) {
        const pEl = document.createElement('p');
        const pText = document.createTextNode(`${i+1} : ${listBooks[i].title}, by ${listBooks[i].author}.  Description: ${listBooks[i].description}`);
        pEl.appendChild(pText);
        let divEl = document.getElementById('books-container');//referance <div>
        divEl.appendChild(pEl); // add new <p> to <div>
      }
    }); //end fetch
}); //end form