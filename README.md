# general.js

**Project name:** general-js-books-axios — Book Retrieval with Axios

**Description:** Retrieve all books and their details based on author, title, and ISBN, using Axios — with promise callbacks and with async/await.

**Main file:** `general.js`
**Language:** JavaScript (Node.js)
**Library:** Axios

## Functions

| Function | Style | What it does |
| --- | --- | --- |
| `getAllBooks()` | Promise callbacks | Get all books |
| `getBookByISBN(isbn)` | Promise callbacks | Get one book by ISBN |
| `getBooksByAuthor(author)` | Promise callbacks | Get books by author |
| `getBooksByTitle(title)` | Promise callbacks | Get books by title |
| `getAllBooksAsync()` | async/await | Get all books |
| `getBookByISBNAsync(isbn)` | async/await | Get one book by ISBN |
| `getBooksByAuthorAsync(author)` | async/await | Get books by author |
| `getBooksByTitleAsync(title)` | async/await | Get books by title |

## Setup

1. Set your books API URL in `general.js` — replace `BASE_URL`
   (`https://your-books-api-url`) with your API's URL. The API is expected
   to expose `GET /books`, `GET /books/isbn/:isbn`,
   `GET /books/author/:author` and `GET /books/title/:title`.
2. Install dependencies:

```bash
npm install
```

3. Run the demo:

```bash
node general.js
```

Or import the functions in your own code:

```js
const { getAllBooksAsync, getBookByISBN } = require(./'general');

getAllBooksAsync().then((books) => console.log(books));
getBookByISBN('9780132350884').then((book) => console.log(book));
```
