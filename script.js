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
                        <strong>${discount.value} % <br> -</strong><br>
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


// MENU PAGE
const addItemButton = document.querySelector(".add-items-btn");
const closeMenuButton = document.querySelector(".close-menu-btn");
const menuForm = document.querySelector(".create-menu");
const createMenuButton = document.querySelector(".create-menu-btn");
const menuList = document.querySelector("#menu-list");


// OPEN MENU ITEMS
if (addItemButton && menuForm) {
    addItemButton.addEventListener("click", function() {
        menuForm.classList.add("show");
    });

}
// CLOSE MENU ITEMS 
if (closeMenuButton && menuForm) {
    closeMenuButton.addEventListener("click", function() {
        menuForm.classList.remove("show");
    });
}

if (createMenuButton && menuList) {
    let menuItems = JSON.parse(localStorage.getItem("menuItems")) || [];
    function displayMenuItems() {
        menuList.innerHTML = "";
        menuItems.forEach(function(menu) {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td><strong>${menu.section}</strong></td>
                <td>${menu.item}<br><span>${menu.description}</span></td>
                <td>AFN ${menu.price}</td><td>${menu.status}</td>
                <td><label class="switch"><input type="checkbox" class="menu-stock" ${menu.inStock ? "checked" : ""}><span class="slider"></span></label></td>
                `;
            menuList.appendChild(row);
        });
    }


    createMenuButton.addEventListener("click", function() {
        const section =document.querySelector("#section").value.trim();
        section.toUpperCase();
        const item =document.querySelector("#item").value.trim();
        const description =document.querySelector("#description").value.trim();
        const price =document.querySelector("#price").value.trim();
        const status =document.querySelector("#status").value;
        const inStock = document.querySelector("#in-stock").checked;

        if (!section || !item || !description || !price) {
            alert("Please fill all fields.");
            return;
        }

        const menu = {
            section: section,
            item: item,
            description: description,
            price: price,
            status: status,
            inStock: inStock
        };

        menuItems.push(menu);
        localStorage.setItem("menuItems",JSON.stringify(menuItems));
        displayMenuItems();
        document.querySelector("#section").value = "";
        document.querySelector("#item").value = "";
        document.querySelector("#description").value = "";
        document.querySelector("#price").value = "";
        document.querySelector("#status").value = "Available";
        document.querySelector("#in-stock").checked = true;
        menuForm.classList.remove("show");
    });

    displayMenuItems();
}
