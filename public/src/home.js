let helperFuncs = require("./helperfuncs")

function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  return helperFuncs.bookIsCheckedOut(books, false).length
}

function getMostCommonGenres(books) {
 const allGenres = books.reduce((acc, {genre}) => {
   if (acc[genre]) {
     acc[genre] += 1;
   }
   else {
     acc[genre] = 1;
   }
   return acc;
 }, {});

 const sortedGenres = sortObjectByValues(allGenres);

 let finalSortedArr = sortedGenres.map((item) => ({name: item, count: allGenres[item]})).slice(0,5);
 
 return finalSortedArr;

}

const sortObjectByValues = (obj) => {
  const keys = Object.keys(obj);
  return keys.sort((keyA, keyB) => {
    if (obj[keyA] > obj[keyB]) {
      return -1;
    } else {
      return 0;
    }
  });
};


function getMostPopularBooks(books) {
 const allPopularBooks = books.reduce((acc, {title}, counter) => {
  acc[title] = books[counter].borrows.length;
  counter++;
  return acc;
 }, {})

 const sortedBooks = sortObjectByValues(allPopularBooks);

 let formattedBooksArr = sortedBooks.map((item) => ({name: item, count: allPopularBooks[item]})).slice(0,5);

 return formattedBooksArr;
}

function getMostPopularAuthors(books, authors) {
  const allAuthorsById = books.reduce((acc, {authorId}, counter, authorNumberToName) => {
    for (let i = 0; i < authors.length; i++) {
      if (books[counter].authorId === authors[i].id) {
      authorNumberToName = Object.values(authors[i].name).join(' ');
      break;
    }
  }
  if (acc[authorNumberToName]) { 
    acc[authorNumberToName] += books[counter].borrows.length;
  } else {
    acc[authorNumberToName] = books[counter].borrows.length;
  }
  counter++
  return acc;
  }, {});

  const sortedAuthors = sortObjectByValues(allAuthorsById);

  let formattedAuthorsArr = sortedAuthors.map((item) => ({name: item, count: allAuthorsById[item]})).slice(0,5);

  return formattedAuthorsArr;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
