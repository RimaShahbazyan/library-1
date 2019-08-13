class Book{
    static id;
    constructor({name,author,pageCount,genre,count = 1}){
        this.name = name;
        this.author = author;
        this.pageCount = pageCount;
        this.genre = genre;
        this.count = count;
        this.ID = Book.id;
        this.isAvailable = true;
        Book.id++;

    }
}



