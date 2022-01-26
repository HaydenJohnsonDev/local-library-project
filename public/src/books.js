function findAuthorById(authors, id) {
  const result = authors.find((author) => author.id == id);
  return result;
}

function findBookById(books, id) {
  const result = books.find((book) => book.id == id);
  return result;
}

function partitionBooksByBorrowedStatus(books) {
  const isReturned = books.filter((book) => book.borrows[0].returned == true);
  const notReturned = books.filter((book) => book.borrows[0].returned == false);

  const allBooksStatus = [notReturned, isReturned];
  return allBooksStatus;
}

function getBorrowersForBook(book, accounts) {
  const { borrows } = book;
  const borrowersForBook = [];

  for (let i = 0; i < borrows.length; i++) {
    let borrower = borrows[i].id;
    let returned = borrows[i].returned;

    for (let j = 0; j < accounts.length; j++){
      let account = accounts[j];

      if (borrower == account.id) {
        let { id, picture, age, name, company, email, registered } = account;
        borrowersForBook.push({
          id,
          returned,
          picture,
          age,
          name,
          company,
          email,
          registered
        });
      }
    }
  }
  if (borrowersForBook.length > 10){
    const [first, second, third, forth, fifth, sixth, seventh, eight, ninth, tenth, ...rest] = borrowersForBook;
    const newResult = [first, second, third, forth, fifth, sixth, seventh, eight, ninth, tenth];
    return newResult;
  }
  return borrowersForBook;
}


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
