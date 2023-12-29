let accounts = require("../../public/data/accounts")
let authors = require("../../public/data/authors")
let books = require("../../public/data/books")
let account = accounts[2]

//FIND ACCOUNT BY ID
function findAccountById (accounts, id) {
  let accountId = accounts.find((account) => account.id === id);
  return accountId;
}

//SORT ACCOUNTS BY LAST NAME
function sortAccountsByLastName(accounts) {
  accounts.sort((accountA, accountB) => 
  accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1
  );
  return accounts
}

//GET TOTAL NUMBER OF BORROWS
function getTotalNumberOfBorrows(account, books) {
  //filter user id from borrows object within books
  //count number of times id appears
    let borrowNumber = 0
  for (let i = 0; i < books.length; i++) {
    let { borrows } = books[i];
    borrows.forEach((element) => {
    if (element.id === account.id) {
     borrowNumber++
    }
  })
  }
  return borrowNumber
}
//getTotalNumberOfBorrows(account, books)

//GET BOOKS POSSESSED BY ACCOUNT
function getBooksPossessedByAccount(account, books, authors) {};

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
