function signIn() {
    let newUser = {};
    newUser.name = document.getElementById('name').value;
    newUser.surname = document.getElementById('surname').value;
    newUser.age = document.getElementById('age').value;
    newUser.email = document.getElementById('email').value;
    newUser.phoneNumber = document.getElementById('phoneNumber').value;
    newUser.username = document.getElementById('username').value;
    newUser.password = document.getElementById('password').value;

    try{
        window.lms.authService.umService.addUser(newUser);
        window.location = '../account/account.html';
    }catch (e) {
        if(e instanceof UserAlreadyExists){
            console.log('Error: ' + e);
        }
    }

    Window.aaa = newUser;

}
