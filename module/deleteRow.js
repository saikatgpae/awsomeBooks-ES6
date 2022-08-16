import { Books } from './book.js';

function deleteRow() {
  const index = this.previousElementSibling.innerHTML;
  const books = new Books();
  const booksStored = JSON.parse(localStorage.getItem('books'));
  books.list = booksStored;
  books.removeItem(index);
  localStorage.setItem('books', JSON.stringify(books.list));
  /* eslint-disable */
    location.reload();
    /* eslint-enable */
}
/* eslint-disable */
export { deleteRow };
/* eslint-enable */