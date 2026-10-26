// LOGIN

let submit = document.querySelector(".login-form form");

if (submit) {
    let email = document.querySelector(".email");
    let password = document.querySelector(".password");
    const User = JSON.parse(localStorage.getItem("User")) || [];


    submit.addEventListener("submit", function(e) {
        e.preventDefault();

        if (password.value.length < 8) {
            alert("Password must be at least 8 characters");
            return;
        }
        const user = {
            email: email,
            password:password
        }

        User.push(user);
        localStorage.setItem("User", JSON.stringify(User));
        
        email.value = "";
        password.value = "";
        window.location.href = "dashboard.html";
    });
}

// LOGOUT
let logoutButtons = document.querySelectorAll(".sign-out");
logoutButtons.forEach(function(button) {
    button.addEventListener("click", function(e) {
        window.location.href = "login.html";
    });
});



