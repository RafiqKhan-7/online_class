// LOGIN

const submit = document.querySelector(".login-form form");

if (submit) {
    const email = document.querySelector(".email");
    const password = document.querySelector(".password");

    submit.addEventListener("submit", function (e) {
        e.preventDefault();
        const emailValue = email.value.trim();
        const passwordValue = password.value;
        if (!emailValue || !passwordValue) {
            alert("Please fill in all fields.");
            return;
        }

        if (passwordValue.length < 8) {
            alert("Password must be at least 8 characters.");
            return;
        }

        const User = JSON.parse(
            localStorage.getItem("User")
        ) || [];

        const user = {
            email: emailValue,
            password: passwordValue
        };

        User.push(user);

        localStorage.setItem("User", JSON.stringify(User));
        const userFound = User.some((user)=> {
            return user.email === emailValue && user.password === passwordValue;
        });
        if (userFound) {
    
            localStorage.setItem("loggedIn", "true");
            window.location.href = "dashboard.html";
        } else {
            alert("Email or password is incorrect.");
        }
    });

}


// LOGOUT
let logoutButtons = document.querySelectorAll(".sign-out");
logoutButtons.forEach(function (button) {
    button.addEventListener("click", function (e) {
        window.location.href = "login.html";
    });
});



