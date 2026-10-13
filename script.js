// LOGIN
let submit = document.querySelector(".login-form form");

if (submit) {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const User = JSON.parse(localStorage.getItem("User")) || [];

    submit.addEventListener("submit", function (e) {
        e.preventDefault();
        if (password.value.length < 8) {
            alert("Password must be at least 8 characters");
            return;
        }

        const user = {
            email: email.value,
            password: password.value
        }

        User.push(user);
        localStorage.setItem("User", JSON.stringify(User));

        const userFound = User.some((user)=> {
            return user.email === emailValue && user.password === passwordValue;
        });

        if (userFound) {
            email.value = "";
            password.value = "";
            localStorage.setItem("loggedIn", "true");
            window.location.href = "dashboard.html";
        } else {
            alert("Email or password is incorrect.");
        }
    });
}

// LOGOUT
let logoutButtons = document.querySelectorAll(".sign-out");
logoutButtons.forEach(function(button) {
    button.addEventListener("click", function(e) {
        window.location.href = "login.html";
    });
});




