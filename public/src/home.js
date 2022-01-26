function getTotalBooksCount(books) {
  const initialValue = 0;
  let result = books.reduce((total) => total += 1, initialValue);
  return result;
}

function getTotalAccountsCount(accounts) {
  let total = 0;
  for (let account in accounts){
    total += 1;
  }
  return total;
}

function getBooksBorrowedCount(books) {
  let total = 0;
  for (let i = 0; i < books.length; i++){
    if (!books[i].borrows[0].returned) total += 1;
  }
  return total;
}

function getMostCommonGenres(books) {
  const mostCommonGenres = [];

  for (let i = 0; i < books.length; i++) {
    let genre = books[i].genre;

    for (let j = 0; j < mostCommonGenres.length; j++){
      if (genre == mostCommonGenres[j].name) {
        mostCommonGenres[j].count += 1;
      }
    }
    mostCommonGenres.push({"name": genre, "count": 1});
  }

  mostCommonGenres.sort((pos1, pos2) => pos2.count - pos1.count);

  if (mostCommonGenres.length > 5) {
    const result = [mostCommonGenres[0], mostCommonGenres[1], mostCommonGenres[2], mostCommonGenres[3], mostCommonGenres[4]];
    return result;
  }
  return mostCommonGenres;
}

function getMostPopularBooks(books) {
  const sortedBooks = books.sort((book1, book2) => book2.borrows.length - book1.borrows.length);
  const result = sortedBooks.map((book) => {return {"name": book.title, "count": book.borrows.length}});

  if (result.length > 5) {
    const newResult = [result[0], result[1], result[2], result[3], result[4]];
    return newResult;
  }
  return result;
}

function getMostPopularAuthors(books, authors) {
  const mostPopularAuthors = [];

  for (let k = 0; k < authors.length; k++){
    let author = authors[k];
    for (let i = 0; i < books.length; i++){
      if (author.id == books[i].authorId){
        let name = `${author.name.first} ${author.name.last}`
        
        for (let j = 0; j < mostPopularAuthors.length; j++){
          if (name == mostPopularAuthors[j].name) {
            mostPopularAuthors[j].count += books[i].borrows.length;
          }
        }
        mostPopularAuthors.push({"name": `${name}`, "count": books[i].borrows.length});
      }
    }
  }
  const authorSorted = mostPopularAuthors.sort((author1, author2) => author2.count - author1.count);

  if (authorSorted.length > 5){
    const result = [authorSorted[0], authorSorted[1], authorSorted[2], authorSorted[3], authorSorted[4]];
    return result;
  }
  return authorSorted;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
