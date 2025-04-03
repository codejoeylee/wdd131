const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];


function populateProductOptions() {
    const productsSelect = document.getElementById("productName");
    if (productsSelect) {
        products.forEach(product => {
            const option = document.createElement('option');
            option.value = product.id;
            option.textContent = product.name;
            productsSelect.appendChild(option);
        });
    }
}


function updateReviewCounter() {
    const reviewCountElement = document.getElementById('reviewCount');
    if (!reviewCountElement) return;

    const urlParams = new URLSearchParams(window.location.search);
    const reviewSubmitted = urlParams.get('reviewSubmitted');

    if (reviewSubmitted === 'true') {
        const reviewCount = parseInt(localStorage.getItem('reviewCount') || 0) + 1;
        localStorage.setItem('reviewCount', reviewCount);
    }

    const currentReviewCount = localStorage.getItem('reviewCount') || 0;
    reviewCountElement.textContent = currentReviewCount;
}


function handleFormSubmission() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault(); 
            alert('Form submitted');
            
            window.location.href = 'review.html?reviewSubmitted=true';
        });
    }
}


document.addEventListener('DOMContentLoaded', () => {
    populateProductOptions(); 
    updateReviewCounter();    
    handleFormSubmission();   
});
