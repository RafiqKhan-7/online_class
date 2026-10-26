
// LOGOUT
let logoutButtons = document.querySelectorAll(".sign-out");
logoutButtons.forEach(function(button) {
    button.addEventListener("click", function(e) {
        window.location.href = "login.html";

    });
});



