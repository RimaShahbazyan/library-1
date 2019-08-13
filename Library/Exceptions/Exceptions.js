class UserAlreadyExists extends Error{
    constructor(message){
        super(message);
        this.name = "UserAlreadyExists";
    }
}
