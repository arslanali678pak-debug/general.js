// general.js
// Retrieve books and their details using Axios — with promise callbacks
// and with async/await.
//
// Works against a books REST API with these endpoints:
//   GET /books                -> all books
//   GET /books/isbn/:isbn     -> one book, by ISBN
//   GET /books/author/:author -> books by author
//   GET /books/title/:title   -> books by title
//
// Replace BASE_URL below with the URL of your books API.

const axios = require('axios');

const BASE_URL = 'https://your-books-api-url'; // <-- replace with your API URL

// ---------- Promise callbacks ----------

// Get all books
function getAllBooks() {
  return axios.get(`${BASE_URL}/books`)
    .then((response) => response.data)
    .catch((error) => { throw error; });
}

// Get one book by ISBN
function getBookByISBN(isbn) {
  return axios.get(`${BASE_URL}/books/isbn/${isbn}`)
    .then((response) => response.data)
    .catch((error) => { throw error; });
}

// Get books by author
function getBooksByAuthor(author) {
  return axios.get(`${BASE_URL}/books/author/${encodeURIComponent(author)}`)
    .then((response) => response.data)
    .catch((error) => { throw error; });
}

// Get books by title
function getBooksByTitle(title) {
  return axios.get(`${BASE_URL}/books/title/${encodeURIComponent(title)}`)
    .then((response) => response.data)
    .catch((error) => { throw error; });
}

// ---------- Async / await ----------

// Get all books
async function getAllBooksAsync() {
  try {
    const response = await axios.get(`${BASE_URL}/books`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Get one book by ISBN
async function getBookByISBNAsync(isbn) {
  try {
    const response = await axios.get(`${BASE_URL}/books/isbn/${isbn}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Get books by author
async function getBooksByAuthorAsync(author) {
  try {
    const response = await axios.get(`${BASE_URL}/books/author/${encodeURIComponent(author)}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Get books by title
async function getBooksByTitleAsync(title) {
  try {
    const response = await axios.get(`${BASE_URL}/books/title/${encodeURIComponent(title)}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllBooks,
  getBookByISBN,
  getBooksByAuthor,
  getBooksByTitle,
  getAllBooksAsync,
  getBookByISBNAsync,
  getBooksByAuthorAsync,
  getBooksByTitleAsync,
};

// Demo — run with: node general.js
if (require.main === module) {
  (async () => {
    try {
      const books = await getAllBooksAsync();
      console.log('All books:', books);

      const byIsbn = await getBookByISBNAsync('9780132350884');
      console.log('Book by ISBN:', byIsbn);

      const byAuthor = await getBooksByAuthorAsync('Robert C. Martin');
      console.log('Books by author:', byAuthor);

      const byTitle = await getBooksByTitleAsync('Clean Code');
      console.log('Books by title:', byTitle);
    } catch (error) {
      console.error('Error fetching books:', error.message);
    }
  })();
}
