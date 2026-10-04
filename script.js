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

const createButton = document.querySelector(".create-btn");
const discountList = document.querySelector("#discount-list");

if (createButton && discountList) {

    let discounts = JSON.parse(localStorage.getItem("discounts")) || [];
    function displayDiscounts() {
        discountList.innerHTML = "";
        discounts.forEach(function(discount) {
            const row = document.createElement("tr");
            row.classList.add("discount-arr");
            row.innerHTML = `
                <td>
                    <span class="code-badge">${discount.code}</span>
                </td>
                <td class="offer"style="display: flex; gap: 10px; align-items: center;">
                    <div>
                        <strong>${discount.value}<br> -</strong><br>
                        <strong class="get-offer">max<br>${discount.cap}</strong><br>
                    </div>
                    <span class="new-customer">New customer</span>
                </td>
                <td>
                    <strong class="redeemed">0 / 500</strong><br>
                    <small class="cap">0% of cap</small>
                </td>
                <td class="ends">${discount.runsUntil}</td>
                <td>
                    <label class="switch"><input type="checkbox" checked><span class="slider"></span></label>
                </td>
            `;
            discountList.appendChild(row);
        });
    }

    let code = document.querySelector("#code");
        code.addEventListener("input", function(e){
            e.preventDefault();
            code.value = code.value.toUpperCase();
        })
    // Create a new discount
    createButton.addEventListener("click", function() {

        const code = document.querySelector("#code").value.trim();
        const value = document.querySelector("#value").value.trim();
        const cap = document.querySelector("#cap").value.trim();
        const runsUntil = document.querySelector("#runs-until").value.trim();

        if (!code || !value || !cap || !runsUntil) {
            alert("Please fill all fields.");
            return;
        }
        // Create new discount
        const discount = {
            code: code,
            value: value,
            cap: cap,
            runsUntil: runsUntil
        };
        discounts.push(discount);
        localStorage.setItem("discounts",JSON.stringify(discounts));

        displayDiscounts();

        document.querySelector("#code").value = "";
        document.querySelector("#value").value = "";
        document.querySelector("#cap").value = "";
        document.querySelector("#runs-until").value = "";
    });

    displayDiscounts();
}