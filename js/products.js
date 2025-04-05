// Global variable to store product data
let productData = {};

// Function to load products based on URL parameter
document.addEventListener("DOMContentLoaded", function () {
    // Get the category from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');

    if (category) {
        // Update heading
        updateCategoryHeading(category);

        // Fetch the product data
        fetch("./js/details.json")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to load product data");
                }
                return response.json();
            })
            .then(data => {
                // Store the data globally
                productData = data;

                // Display products for the selected category
                displayProducts(category, data[category]);
            })
            .catch(error => console.error("Error loading product data:", error));
    } else {
        console.error("No category specified in URL");
    }
});

// Function to update category heading
function updateCategoryHeading(category) {
    const headingElement = document.getElementById("category-heading");

    if (headingElement) {
        let headingText = "";

        let pageHeader = document.querySelector('.page-header');

        switch (category) {
            case "rolling":
                headingText = "Rolling Shutter Motors";
                // console.log("Page header element:", document.querySelector('.page-header'));
                // pageHeader.style.removeProperty("background");
                // pageHeader.style.background = "linear-gradient(rgba(53, 53, 53, .7), rgba(53, 53, 53, .7)), url(../img/about/excel_4.png) center center no-repeat !important;"
                break;
            case "sliding":
                headingText = "Sliding Gate Motors";
                // pageHeader.style.removeProperty("background");
                // pageHeader.style.background = "linear-gradient(rgba(53, 53, 53, .7), rgba(53, 53, 53, .7)), url(../img/about/excel_6.png) center center no-repeat !important;"
                break;
            case "swing":
                headingText = "Swing Gate Motors";
                // pageHeader.style.removeProperty("background");
                // pageHeader.style.background = "linear-gradient(rgba(53, 53, 53, .7), rgba(53, 53, 53, .7)), url(../img/about/excel_5.png) center center no-repeat !important;"
                break;
            case "door":
                headingText = "Sliding Door Motors";
                // pageHeader.style.removeProperty("background");
                // pageHeader.style.background = "linear-gradient(rgba(53, 53, 53, .7), rgba(53, 53, 53, .7)), url(../img/about/excel_5.png) center center no-repeat !important;"
                break;
            case "highspeed":
                headingText = "High Speed Door Motors";
                // pageHeader.style.removeProperty("background");
                // pageHeader.style.background = "linear-gradient(rgba(53, 53, 53, .7), rgba(53, 53, 53, .7)), url(../img/about/excel_5.png) center center no-repeat !important;"
                break;
            case "central":
                headingText = "Central Motors";
                // pageHeader.style.removeProperty("background");
                // pageHeader.style.background = "linear-gradient(rgba(53, 53, 53, .7), rgba(53, 53, 53, .7)), url(../img/about/excel_5.png) center center no-repeat !important;"
                break;
            case "accessories":
                headingText = "Accessories";
                // pageHeader.style.removeProperty("background");
                // pageHeader.style.background = "linear-gradient(rgba(53, 53, 53, .7), rgba(53, 53, 53, .7)), url(../img/about/excel_5.png) center center no-repeat !important;"
                break;
            default:
                headingText = "Automation Products";
        }

        headingElement.textContent = headingText;
    }
}

// Function to display products in the container
function displayProducts(category, products) {
    if (category !== "accessories") {

        const container = document.getElementById("product-display");

        if (!container) {
            console.error("Product display container not found");
            return;
        }

        // Clear any existing content
        container.innerHTML = "";

        // Create HTML for each product
        Object.keys(products).forEach((productId, index) => {
            const product = products[productId];
            const productElement = document.createElement("div");
            productElement.className = "product-item";

            // Determine the first image to display
            const imageUrl = product.images && product.images.length > 0
                ? product.images[0]
                : "./img/placeholder.png";

            // Create HTML content for the product item
            productElement.innerHTML = `
            <div class="product-image-info-wrapper">
                <div class="product-image">
                    <img src="${imageUrl}" alt="${product.name}" loading="lazy">
                </div>
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-description">${product.description[0] + ". " + product.description[1].substring(0, 10) + "..."}</p>
                    <a href="product-details.html?category=${category}&id=${productId}" class="read-more">Read More</a>
                </div>
            </div>
        `;

            container.appendChild(productElement);
        });
    }
    else {
        const container = document.getElementById("image-gallery");
        container.innerHTML = ''; // Clear existing content if any

        products.forEach(image => {
            const card = document.createElement("div");
            card.className = "image-card";

            const img = document.createElement("img");
            img.src = image.src;
            img.alt = image.name;

            const caption = document.createElement("p");
            caption.textContent = image.name;

            card.appendChild(img);
            card.appendChild(caption);

            container.appendChild(card);
        });
    }
}