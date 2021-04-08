//findByID uses a given array and searches through it.
//It checks each object for an id key that matches the given id
const findByID = (dataArray, id) =>
  dataArray.find((object) => object.id === id);

//checks whether books are checked out, given the desired param.
const bookIsCheckedOut = (booksArray, boolean) =>
  booksArray.filter((item) => {
    return item.borrows[0].returned == boolean;
  });


module.exports = {
  findByID: findByID,
  bookIsCheckedOut: bookIsCheckedOut,
};
