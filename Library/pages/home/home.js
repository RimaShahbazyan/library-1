let miniHeader = true;
let buttonHidden = true;
let headerItem = null;
let card;
let form;
let cardIsRotated = false;

window.onload = function(){
    window.lms = new LMS();
    card = document.getElementById('card');
    form = document.getElementById('form');
}

function rotate (){
    cardIsRotated = !cardIsRotated;
    if(cardIsRotated) {
        card.classList.add('card--rotate');
    } else {
        card.classList.remove('card--rotate');
    }
}

window.addFormItems = function addFormItems(eventElement) {
    let login = "<span id='error-message' class='error-message'></span>" +
                "<div class=\"card__form__list\">\n" +
                "<input type=\"text\" name=\"username\" id=\"username\" placeholder=\"username\" class='shk-input' autocomplete='off'><br>\n" +
                "</div>\n" +
                "\n" +
                "<div class=\"card__form__list\">\n" +
                "<input type=\"password\" name=\"password\" id=\"password\" placeholder=\"password\" class='shk-input' autocomplete='off'><br>\n" +
                "</div>\n" +
                "<div class=\"card__form__Login_button\" onclick='login()'><span>Login<span></div>";

    let signUp = '<span id="error-message" class="error-message"></span>\n' +
                '<div class="card__form__list">\n' +
                '<input type="text" name="username" id="username" placeholder="username" required class="shk-input" autocomplete=\'off\'><br>\n' +
                '</div>\n' +
                '<div class="card__form__list">\n' +
                '<input type="password" name="password" id="password" placeholder="password" required class="shk-input" autocomplete=\'off\'><br>\n' +
                '</div>\n' +
                '\n' +
                '<div class="card__form__list">\n' +
                '<input type="email" name="email" id="email" placeholder="example@gmail.com" required class="shk-input" autocomplete=\'off\'><br>\n' +
                '</div>\n' +
                '\n' +
                '<button class="card__form__sign_up_button raised-button" onclick="signUp()">Sign Up</button>\n';

    if(eventElement === 'login'){
        form.insertAdjacentHTML( 'afterbegin' ,login );
    } else if(eventElement == 'sign up'){
        form.insertAdjacentHTML( 'afterbegin' ,signUp );
    }
}



function header(header) {
        miniHeader = !miniHeader;
        if (buttonHidden) {
            setTimeout(() => { buttonHidden = false; }, 500);
        } else {
            buttonHidden = true;
        }
        if(miniHeader) {
            header.classList.add('header--mini');
        }
}


function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    try {
        let info = window.lms.authService.login(username, password);
        window.location = '../account/account.html';
    } catch (e) {
        console.log(e);
        document.getElementById('error-message').innerText = '! Wrong password.\nTry again or click\nForgot password to reset it.';
    }
}

function signUp() {
    let newUser = {};
    //newUser.name = document.getElementById('name').value;
    //newUser.surname = document.getElementById('surname').value;
    //newUser.age = document.getElementById('age').value;
    newUser.email = document.getElementById('email').value;
    //newUser.phoneNumber = document.getElementById('phoneNumber').value;
    newUser.username = document.getElementById('username').value;
    newUser.password = document.getElementById('password').value;
    if(newUser.email == '' || newUser.password == '' || newUser.username == '')
    {
        return;
    }
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

