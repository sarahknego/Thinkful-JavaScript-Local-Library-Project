function findAuthorById (authors, id) {
  let authorId = authors.find((author) => author.id === id);
return authorId;
}

function findBookById (books, id) {
  let bookId = books.find((book) => book.id === id);
  return bookId;
}

function partitionBooksByBorrowedStatus(books) {
  let borrowedBooks = [];
  let returnedBooks = [];

//loop through books array (map?)
//if returned = false, push to borrowedBooks
//else, push to returnedBooks

books.map((book) => {
  book.borrows[0].returned ? returnedBooks.push(book) : borrowedBooks.push(book);
});
return [borrowedBooks, returnedBooks];
}

function getBorrowersForBook(book, accounts) {
  // for loop?
  let { borrows } = book;
  let borrowed = borrows.map((borrow) => {
    return borrowed
  } )
 
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
