
let discounts;
const createButton = document.querySelector(".create-btn");
const discountList = document.querySelector("#discount-list");
if (createButton && discountList) {
    discounts = JSON.parse(localStorage.getItem("discounts")) || [];

    const codeInput = document.querySelector("#code");
    const valueInput = document.querySelector("#value");
    const capInput = document.querySelector("#cap");
    const dateInput = document.querySelector("#runs-until");

    function displayDiscounts() {
        discountList.innerHTML = "";
        discounts.forEach(function (discount) {
            const row = document.createElement("tr");
            row.classList.add("discount-arr");
            row.innerHTML = `
                <td>
                    <span class="code-badge">${discount.code}</span>
                </td>
                <td class="offer"style="display: flex; gap: 10px; align-items: center;">
                    <div>
                        <strong>${discount.value} % <br> -</strong><br>
                        <strong class="get-offer">max<br>AFG ${discount.cap}</strong><br>
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

    if (codeInput) {
        codeInput.addEventListener("input", function () {
            codeInput.value = codeInput.value.toUpperCase();
        });
    }

    // Create a new discount
    createButton.addEventListener("click", function () {
        const code = codeInput.value.trim().toUpperCase();
        const value = Number(valueInput.value);
        const cap = Number(capInput.value);
        const runsUntil = dateInput.value.trim();


        if (!code || !valueInput.value.trim() || !capInput.value.trim() || !runsUntil) {
            alert("Please fill all fields.");
            return;
        }

        if (value <= 0 || value > 100 || cap <= 0) {
            alert("Enter a valid discount percentage and cap.");
            return;
        }

        const discount = {
            code: code,
            value: value,
            cap: cap,
            runsUntil: runsUntil
        };
        discounts.push(discount);
        localStorage.setItem("discounts", JSON.stringify(discounts));

        displayDiscounts();

        document.querySelector("#code").value = "";
        document.querySelector("#value").value = "";
        document.querySelector("#cap").value = "";
        document.querySelector("#runs-until").value = "";
    });


    displayDiscounts();
}

// LOGOUT
let logoutButtons = document.querySelectorAll(".sign-out");
if (logoutButtons) {
    logoutButtons.forEach(function (button) {
        button.addEventListener("click", function (e) {
            window.location.href = "login.html";
        });
    });
}
