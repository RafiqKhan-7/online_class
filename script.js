// LOGIN

let submit = document.querySelector(".login-form form");

if (submit) {
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");

    submit.addEventListener("submit", function(e) {
        e.preventDefault();

        if (password.value.length < 8) {
            alert("Password must be at least 8 characters");
            return;
        }

        email.value = "";
        password.value = "";
        window.location.href = "dashboard.html";
    });
}


// LOGOUT

let logoutButtons = document.querySelectorAll(".sign-out");

logoutButtons.forEach(function(button) {
    button.addEventListener("click", function(e) {
        e.preventDefault();


        window.location.href = "login.html";
    });
});

let accept_btn = document.querySelector(".accept-btn");
let accetp_message = document.querySelector(".Accepted-order");

if(accept_btn)
{

accept_btn.addEventListener("click", function(e)
{
    e.preventDefault()
    accept_btn.textContent = "Acceped";
    accept_btn.style.color = "green";
    accept_btn.style.backgroundColor = "var(--ok-bg)";
    accetp_message.classList.add("show");

    setTimeout(() => {
        accetp_message.classList.remove("show");
        accept_btn.textContent = "Accept order";
        accept_btn.style.color = "";
        accept_btn.style.backgroundColor = ""
        
    }, 3000);
})

}



