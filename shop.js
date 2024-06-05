// Function to sort items by price in descending order
function sortItemsByPriceDesc() {
    var container = document.querySelector(".grid-container");
    var items = Array.from(container.querySelectorAll(".item"));

    items.sort((a, b) => {
        var priceA = parseFloat(a.querySelector("p").textContent.replace("€", ""));
        var priceB = parseFloat(b.querySelector("p").textContent.replace("€", ""));
        return priceB - priceA;
    });

    items.forEach(item => container.appendChild(item));
}

// Function to sort items by price in ascending order
function sortItemsByPriceAsc() {
    var container = document.querySelector(".grid-container");
    var items = Array.from(container.querySelectorAll(".item"));

    items.sort((a, b) => {
        var priceA = parseFloat(a.querySelector("p").textContent.replace("€", ""));
        var priceB = parseFloat(b.querySelector("p").textContent.replace("€", ""));
        return priceA - priceB;
    });

    items.forEach(item => container.appendChild(item));
}

// Function to sort items by name in ascending order
function sortItemsByName() {
    var container = document.querySelector(".grid-container");
    var items = Array.from(container.querySelectorAll(".item"));

    items.sort((a, b) => {
        var nameA = a.querySelector("h3").textContent.toLowerCase();
        var nameB = b.querySelector("h3").textContent.toLowerCase();
        return nameA.localeCompare(nameB);
    });

    items.forEach(item => container.appendChild(item));
}
