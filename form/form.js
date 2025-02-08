document.addEventListener('DOMContentLoaded', function() {
    const products = [
        { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
        { id: "fc-2050", name: "power laces", averagerating: 4.7 },
        { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
        { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
        { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
    ];

    const productSelect = document.getElementById('productName');

    // Clear any existing options except the first placeholder
    while (productSelect.options.length > 1) {
        productSelect.remove(1);
    }

    // Populate the select element with product options
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id; // Use the product ID as the value
        option.textContent = product.name; // Use the product name as the display text
        productSelect.appendChild(option);
    });
});


document.getElementById('currentyear').textContent = new Date().getFullYear();


document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
