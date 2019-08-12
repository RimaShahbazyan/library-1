class BmService{
    constructor(books = []){
        this.books = books;
    }

    getBookByName(bookName){
        for(let book of this.books){
            if(book.name === bookName){
                return book;
            }
        }
        throw new Error('Ther are no book whit such name');
    }

    addBook(newBook){
        for(let book of this.books){
            if(book === newBook){
                book.count++;
            }
        }
        this.books.push(newBook);
    }

    deleteBook(){

    }

    updateAvailability(){}
}
