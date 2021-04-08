
let helperFuncs = require("./helperfuncs")

//FIND ACCOUNT BY ID
const findAccountById = (accounts, id) => helperFuncs.findByID(accounts, id)


//SORT ACCOUNTS BY LAST NAME
function sortAccountsByLastName(accounts) {
  //sorts the accounts array based on the name.last value of each account object. 
  accounts.sort((accountA, accountB) => accountA.name.last > accountB.name.last ? 1 : -1)
  return accounts
}

//GET TOTAL NUMBER OF BORROWS
function getTotalNumberOfBorrows(account, books) {

  //set up empty variables for later
 let result = 0;
 let allBorrows = [];

//for every book, push the contents of the 'borrows' object to 'allBorrows'

for (let i = 0; i < books.length; i++){
  let {borrows} = books[i]
  allBorrows.push(...borrows)
} 

//for every index in allBorrows, map the 'borrow.id' to 'borrowids'
let borrowids = allBorrows.map((borrow) => borrow.id )

//for every index in borrowids, check if the current id matches the 'account.id'.

for (let i = 0; i < borrowids.length; i++){
  if (borrowids[i] === account.id){
    result++
  }
} 

return result
}

//GET BOOKS POSSESSED BY ACCOUNT
function getBooksPossessedByAccount(account, books, authors) {
  
  /*   We want to check every book and see if its "returned" value is false, 
       and we also want to check if the borrow.id of that book matches the given account.id. */
  let bookIsCheckedOutByAccount = books.filter((book) => {
    
    /* now that we have access to each book, we can check if the "borrows" object of the book
       has an id that matches the given account id, AND the "returned" key is false. If that's
       all true, the Filter method adds the book to the "bookIsCheckedOutByAccount" array. */
    return accountBorrowedThisBook = book.borrows.some((borrow) => borrow.id == account.id && borrow.returned == false);
  });

  /* We have the books that an account has checked out, but now we need to add the author info into each book.
     Let's create a new variable called fullBookInfo to store the final array of objects. We will then take the
     BookIsCheckedOutByAccount array and loop through it, mutating each object along the way. We will call 
     each object in the array "bookInfo". */
  let fullBookInfo = bookIsCheckedOutByAccount.map((bookInfo) => {

    //Let's destructure bookInfo's authorID so we can compare it with the author.id in the authors array.
    let {authorId} = bookInfo;

    /* Now, we need to filter through the authors array and select the author who has an author.id that matches the authorId.
       Since "filter" returns an array instead of a plain object, but will always just return one author, we will destructure 
       the array that "filter" creates, by placing it in []. */
    let [author] = authors.filter((author) => author.id === authorId);

    // Add the author object as a new key in our current bookInfo object
    bookInfo.author = author;

    //return the new object to the fullBookInfo array
    return bookInfo;
    
  });

  return fullBookInfo;

};

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
