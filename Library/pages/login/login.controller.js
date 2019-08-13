window.onload = function () {
    window.lms = new LMS();

    if (window.lms.authService.isLogined()) {
        window.location = '../home/home.html'
    }
};


function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    try {
        let info = window.lms.authService.login(username, password);
        window.location = '../account/account.html';
    } catch (e) {
        console.log(e);
        document.getElementById('error-message').innerText = e.message;
    }
}
