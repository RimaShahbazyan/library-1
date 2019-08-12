class IssueService{
    /*
    *Book
    * */
    addNewIssue(book,user,fromDate,toDate){
        let newIssue = new BookIssue(book,user,fromDate,toDate);
        //add to storage
    }

    /*chenq nayum*/
    requestToRenewalTheBook(){

    }

    getHistoryByUserID(){

    }

    getAllPendingIssues(){

    }

    acceptIssue(){

    }

    rejectIssue(){

    }
}
