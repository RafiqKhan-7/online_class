

// LOGOUT
let logoutButtons = document.querySelectorAll(".sign-out");
logoutButtons.forEach(function(button) {
    button.addEventListener("click", function(e) {
        window.location.href = "login.html";
    });
});


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

