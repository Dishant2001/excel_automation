let details = {}; // Store JSON data here

// Function to get query parameter value
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Function to load products from JSON file
async function loadProductsFromJSON() {
    try {
        const response = await fetch('js/details.json'); // Fetch JSON file
        if (!response.ok) throw new Error('Failed to load products');
        details = await response.json(); // Parse JSON data

        // Once products are loaded, display them
        displayProducts();
    } catch (error) {
        console.error("Error loading products:", error);
    }
}

// Function to display products based on category
// function displayProducts() {
//     const category = getQueryParam('category') || 'rolling'; // Default category

//     // if (!document.getElementById("product-title") || !document.getElementById("product-list")) {
//     //     console.error("Product display elements not found in DOM.");
//     //     return;
//     // }

//     if (details[category]) {
//         console.log(details[category]);
//         // document.getElementById("product-title").textContent = 
//         //     category.charAt(0).toUpperCase() + category.slice(1) + " Products";
//         // document.getElementById("product-list").innerHTML = 
//         //     products[category].map(item => `<li>${item}</li>`).join('');
//     } else {
//         console.log("Failed");
//         // document.getElementById("product-title").textContent = "Category Not Found";
//         // document.getElementById("product-list").innerHTML = "<li>No products available.</li>";
//     }

//     // Update URL only if needed
//     // const newUrl = `/products?category=${category}`;
//     // if (window.location.pathname + window.location.search !== newUrl) {
//     //     window.history.pushState({}, "", newUrl);
//     // }
// }


function displayProducts() {
    const category = getQueryParam('category') || 'rolling'; // Default category
    const productContainer = document.getElementById("product-display");
    const categoryHeading = document.getElementById("category-heading");
    productContainer.innerHTML = ""; // Clear previous content

    if(category==="rolling")
        categoryHeading.innerText = "Rolling Shutter Motors";
    else if(category==="sliding")
        categoryHeading.innerText = "Sliding Gate Motors";
    else if(category==="swing")
        categoryHeading.innerText = "Swing Gate Motors";

    const categoryProducts = details[category];
    console.log(categoryProducts);
    if (!categoryProducts) {
        productContainer.innerHTML = "<p>No products found in this category.</p>";
        return;
    }

    Object.values(categoryProducts).forEach((product, index) => {
        const truncatedDesc = product.description.join(". ").split(". ").slice(0, 2).join(". ") + "...";

        const productHTML = `
            <div class="product-item">
                <div class="product-image">
                    <img src="${product.images[0]}" alt="img/logos/allmatic_logo.jpg">
                </div>
                <div class="product-info">
                    <div class="product-name">${product.name}</div>
                    <div class="product-description">${truncatedDesc}</div>
                    <a href="products.html?id=${product.id}" class="read-more">Read More</a>
                </div>
            </div>
        `;
        productContainer.innerHTML += productHTML;
    });
}

// Ensure DOM is ready before executing scripts
document.addEventListener("DOMContentLoaded", () => {
    loadProductsFromJSON();
});
