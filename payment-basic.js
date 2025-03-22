document.addEventListener('DOMContentLoaded', function() {
    const paymentCards = document.querySelectorAll('.payment-card');
    
    paymentCards.forEach(card => {
        card.addEventListener('click', function() {
            // Remove active class from all cards
             paymentCards.forEach(c => c.style.border = '2px solid transparent');

            
            // Add active class to clicked card
            this.style.border = '2px solid var(--primary-color)';
            
        });
    });
});