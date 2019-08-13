/*window.onload = function() {
    let content = document.getElementById('content');
    content.innerText = `Hello ${User}`;
}*/

function logout(){
    window.lms.authService.logout();
}
