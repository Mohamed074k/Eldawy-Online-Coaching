// Payment form handling
document.querySelectorAll('.payment-btn').forEach(button => {
    button.addEventListener('click', function() {
        const paymentMethod = this.textContent.split('with')[1].trim();
        alert(`Processing payment with ${paymentMethod}. This feature will be implemented soon.`);
    });
});