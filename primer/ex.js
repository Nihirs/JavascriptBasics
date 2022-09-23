// TODO: define addFavoriteBook(..) function

// TODO: define printFavoriteBooks() function

var favoriteBooks = [];

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

function addFavoriteBook(book) {
    if (!book.includes("Great")) {
        favoriteBooks.push(book);
    }

}
console.log(favoriteBooks);

// TODO: print out favorite books
function printFavoriteBooks() {
    console.log(
        `Favorite Books: ${favoriteBooks.length}`
    );
    for (let bookName of favoriteBooks) {
        console.log(bookName);
    }
}
printFavoriteBooks();