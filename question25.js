var library = [
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    },
    {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        readingStatus: false
    },
    {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        readingStatus: true
    }
];
function readBooks(books) {
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var book = books_1[_i];
        if (book.readingStatus) {
            console.log("Already read '".concat(book.title, "' by ").concat(book.author, "."));
        }
        else {
            console.log("You still need to read '".concat(book.title, "' by ").concat(book.author, "."));
        }
    }
}
readBooks(library);
