let miniHeader = true;
let buttonHidden = true;
let headerItem = null;
let card;
let form;
let cardIsRotated = false;

window.onload = function(){

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

function addFormItems() {
    let x = document.createElement('form')
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

function login(){
    window.location = '../login/login.html';
}

function signIn(){
    window.location = '../signIn/signIn.html';
}

