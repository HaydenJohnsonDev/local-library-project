function findAccountById(accounts, id) {
  let output = accounts.find((account) => account.id == id);
  return output;
}

function sortAccountsByLastName(accounts) {
  accounts.sort((pos1, pos2) => 
  pos1.name.last.toLowerCase() < pos2.name.last.toLowerCase() ? -1 : 1);
  return accounts;
}

function getTotalNumberOfBorrows(account, books) {
  const { id } = account;
  let result = 0;

  for (let i = 0; i < books.length; i++) {
    let borrows = books[i].borrows;
    for (let j = 0; j < borrows.length; j++) {
      if (borrows[j].id == id) result += 1;
    }
  }
  return result;
}

function getBooksPossessedByAccount(account, books, authors) {
  const { id } = account;
  possessed = [];

  for (let i = 0; i < books.length; i++) {
    if (books[i].borrows[0].id == id && !books[i].borrows[0].returned) {
      let book = books[i];
      let author = {};

      for (let j = 0; j < authors.length; j++){
        if (authors[j].id == book.authorId) {
          author = authors[j];
          possessed.push(compileBookInfo(book, author));
          break;
        }
      }
    }
  }
  return possessed;
}

function compileBookInfo (book, author) {
  const { id, title, genre, authorId, ...rest } = book;
  
  const newInfo = {
    id,
    title,
    genre,
    authorId,
    author,
    rest
  }

  return newInfo;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
