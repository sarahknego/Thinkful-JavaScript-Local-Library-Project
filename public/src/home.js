function getTotalBooksCount(books) {
  return books.length;
  }

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  // start with books borrowed count = 0
  //loop through books array
  //if borrows[0].returned = false, add 1
  //return final count
  let booksBorrowedCount = 0;
    books.map((book) => {
   if (book.borrows[0].returned === false) {
    booksBorrowedCount++
   }
  })
  return booksBorrowedCount
}

function getMostCommonGenres(books) {
  //set up empty array for solution
  //go through books array and count each instance of each genre
  //add up the total of each
  //sort genres by highest number of appearance 
  //push the top 5 into the empty array
  //profit
  const mostCommonGenres = [];
  //const genreCountObject = books.reduce((genreCount, book) => {
    //genreCount[book.genre] = book.
 // })
 if 
}

function getMostPopularBooks(books) {}

function getMostPopularAuthors(books, authors) {}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
