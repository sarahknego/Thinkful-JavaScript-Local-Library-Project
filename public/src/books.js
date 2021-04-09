//findByID uses a given array and searches through it.
//It checks each object for an id key that matches the given id
const findByID = (dataArray, id) =>
  dataArray.find((object) => object.id === id);

//checks whether books are checked out, given the desired param.
const bookIsCheckedOut = (booksArray, boolean) =>
booksArray.filter((item) => {
  return item.borrows[0].returned == boolean;
});

const findAuthorById = (authors, id) => findByID(authors, id)

const findBookById = (books, id) => books.find((book) => book.id === id)

//PARTITION BOOKS BY BORROWED STATUS
function partitionBooksByBorrowedStatus(books) {
 
  let bookIsborrowed = bookIsCheckedOut(books, false)
  let bookIsReturned = bookIsCheckedOut(books, true)

let allBooks = [bookIsborrowed, bookIsReturned];

return allBooks;
}

// GET BORROWERS FOR BOOK
function getBorrowersForBook(book, accounts) {
  
  //destructure and select just the borrows object 
  let {borrows} = book;
  
  //for every borrow in the borrows object...
  let result = borrows.map((borrow) => {
    
    //create an array of accounts that match the borrow id with the account id
    let accountMatches = accounts.filter((account) => {
      return account.id === borrow.id
    });

    //remove the extra account id and return to a destructured array
    let [accountsWithoutIDs] = accountMatches.map((account) => {
      delete account.id;
      return account;
    });
    
    //add the borrow's object keys and values with the account object key and values.
    let resultingBorrow = {...borrow, ...accountsWithoutIDs}
    
    return resultingBorrow
  })
  
  return result.slice(0, 10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
