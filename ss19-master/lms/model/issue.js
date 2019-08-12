class BookIssue{
    constructor(user,book,fromDate = new Date(),toDate){
        this.username = user.username;
        this.bookId = book.bookId;
        this.fromDate = fromDate;
        this.toDate = toDate;
    }
}
