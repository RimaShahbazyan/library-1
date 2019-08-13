function Permissions(){
    return{
        canAddBook:false,
        canDeleteBook:false,
        getUser: false,
        issueBook: false,
        returnBook: false,
        acceptIssue: false,
        refuseIssue: false,
    }
}

function UserPermission(){
    let perm = new Permissions();
    perm.etUser = true;
    perm.issueBook = true;
    perm.returnBook = true;

    return perm;
}
