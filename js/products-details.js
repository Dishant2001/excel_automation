// Function to load product details based on URL parameters
document.addEventListener("DOMContentLoaded", function() {
    // Get the category and product ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const productId = urlParams.get('id');
    
    if (!category || !productId) {
        console.error("Missing category or product ID in URL");
        document.getElementById("product-details").innerHTML = `
            <div class="alert alert-danger">
                <h4>Error: Product not found</h4>
                <p>The requested product could not be found. Please go back to the products page.</p>
                <a href="products.html?category=rolling" class="btn btn-primary mt-3">Back to Products</a>
            </div>
        `;
        return;
    }
    
    // Update breadcrumb with category
    updateBreadcrumb(category);
    
    // Fetch the product data
    fetch("./js/details.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load product data");
            }
            return response.json();
        })
        .then(data => {
            // Check if the product exists
            if (!data[category] || !data[category][productId]) {
                throw new Error("Product not found");
            }
            
            // Display product details
            displayProductDetails(data[category][productId], category);
            
            // Update page title
            document.title = `${data[category][productId].name} - Excel Automation`;
        })
        .catch(error => {
            console.error("Error loading product data:", error);
            document.getElementById("product-details").innerHTML = `
                <div class="alert alert-danger">
                    <h4>Error: ${error.message}</h4>
                    <p>There was a problem loading the product details. Please try again later.</p>
                    <a href="products.html?category=${category}" class="btn btn-primary mt-3">Back to Products</a>
                </div>
            `;
        });
});

// Function to update breadcrumb
function updateBreadcrumb(category) {
    const breadcrumbElement = document.getElementById("product-breadcrumb");
    
    if (breadcrumbElement) {
        let categoryText = "";
        let categoryLink = "";
        
        switch(category) {
            case "rolling":
                categoryText = "Rolling Shutters";
                categoryLink = "products.html?category=rolling";
                break;
            case "sliding":
                categoryText = "Sliding Gates";
                categoryLink = "products.html?category=sliding";
                break;
            case "swing":
                categoryText = "Swing Gates";
                categoryLink = "products.html?category=swing";
                break;
            default:
                categoryText = "Products";
                categoryLink = "products.html";
        }
        
        breadcrumbElement.innerHTML = `
            <li class="breadcrumb-item"><a class="text-white" href="index.html">Home</a></li>
            <li class="breadcrumb-item"><a class="text-white" href="${categoryLink}">${categoryText}</a></li>
            <li class="breadcrumb-item text-white active" aria-current="page">Product Details</li>
        `;
    }
}

// Function to display product details
function displayProductDetails(product, category) {
    const container = document.getElementById("product-details");
    
    if (!container) {
        console.error("Product details container not found");
        return;
    }
    
    // Update product name heading
    document.getElementById("product-name").textContent = product.name;
    
    // Generate HTML for product details
    let html = '';
    
    // Description list
    html += `
        <div class="detail-section" style="margin-top: -20px;">
            <h4 class="section-title">Key Features</h4>
            <ul class="feature-list">
    `;
    
    product.description.forEach(item => {
        html += `<li>${item}</li>`;
    });
    
    html += `
            </ul>
        </div>
    `;
    
    // Technical features
    if (product.technical_features) {
        html += `
        <div class="detail-section">
            <h4 class="section-title">Technical Specifications</h4>
            <div class="specs-table-container" style="margin: 2rem 0; max-width: 100%; text-align: left;">
                <table class="specs-table" style="margin: 0;">
                    <thead>
                        <tr>
                            <th>Specification</th>
        `;
        
        // Determine if we have multiple product variants
        const hasVariants = product.name_list && product.name_list.length > 1;
        
        if (hasVariants) {
            product.name_list.forEach(name => {
                html += `<th>${name}</th>`;
            });
        } else {
            html += '<th>Value</th>';
        }
        
        html += `
                            </tr>
                        </thead>
                        <tbody>
        `;
        
        // Add each technical feature
        Object.keys(product.technical_features).forEach(feature => {
            html += `<tr><td>${feature}</td>`;
            
            const values = product.technical_features[feature];
            
            if (Array.isArray(values) && values.length > 0) {
                if (hasVariants) {
                    values.forEach(value => {
                        html += `<td>${value}</td>`;
                    });
                    
                    // If we have fewer values than variants, add empty cells
                    for (let i = values.length; i < product.name_list.length; i++) {
                        html += '<td>-</td>';
                    }
                } else {
                    html += `<td>${values[0]}</td>`;
                }
            } else {
                html += '<td>-</td>';
            }
            
            html += '</tr>';
        });
        
        html += `
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    }
    
    // Product images
    if (product.images && product.images.length > 0) {
        html += `
            <div class="detail-section">
                <h4 class="section-title">Product Images</h4>
                <div class="image-gallery">
        `;
        
        product.images.forEach(image => {
            html += `
                <div class="gallery-item">
                    <img src="${image}" alt="${product.name}" loading="lazy">
                </div>
            `;
        });
        
        html += `
                </div>
            </div>
        `;
    }
    
    // Dimension images
    if (product.dimension_images && product.dimension_images.length > 0) {
        html += `
            <div class="detail-section">
                <h4 class="section-title">Dimensions</h4>
                <div class="image-gallery dimensions-gallery">
        `;
        
        product.dimension_images.forEach(image => {
            html += `
                <div class="gallery-item">
                    <img src="${image}" alt="Dimensions" loading="lazy">
                </div>
            `;
        });
        
        html += `
                </div>
            </div>
        `;
    }
    
    // Additional accessories
    if (product.additional_accessories && product.additional_accessories.length > 0) {
        html += `
            <div class="detail-section">
                <h4 class="section-title">Additional Accessories</h4>
                <ul class="accessories-list">
        `;
        
        product.additional_accessories.forEach(accessory => {
            html += `<li>${accessory}</li>`;
        });
        
        html += `
                </ul>
            </div>
        `;
    }
    
    // Back to products button
    html += `
        <div class="mt-4">
            <a href="products.html?category=${category}" class="btn btn-primary back-to-products">
                <i class="fa fa-arrow-left me-2"></i>Back to Products
            </a>
        </div>
    `;
    
    // Insert the HTML into the container
    container.innerHTML = html;
}

